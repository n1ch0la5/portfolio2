"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  about,
  experience,
  personalInfo,
  projects,
  sideProjects,
  skills,
  type Experience,
  type Project,
  type SkillCategory,
} from "@/data/resume";
import { variants, type Variant } from "@/data/variants";

const STORAGE_KEY = "portfolio-variant";
const MANIFEST_URL = "/resumes/manifest.json";

/** The regular resume, a static file in /public. */
export const DEFAULT_RESUME = "/Nick_Johnson_Resume.pdf";

export interface TailoredResume {
  slug: string;
  company: string;
  file: string;
  href: string;
  uploadedAt: string;
}

interface ManifestEntry {
  company?: string;
  file?: string;
  uploadedAt?: string;
}

interface Manifest {
  resumes: Record<string, ManifestEntry>;
}

interface VariantState {
  slug: string | null;
  variant: Variant | null;
  resume: TailoredResume | null;
}

const EMPTY: VariantState = { slug: null, variant: null, resume: null };
const VariantContext = createContext<VariantState>(EMPTY);

export function slugFromHash(hash: string): string {
  return hash
    .replace(/^#/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

/** True when the hash points at an element on the page (section nav). */
function isSectionAnchor(hash: string): boolean {
  const id = hash.replace(/^#/, "");
  return id.length > 0 && typeof document !== "undefined" && document.getElementById(id) !== null;
}

/**
 * Reads the URL hash on load and on every hash change. Any hash that is not a
 * section anchor (like #projects) is treated as a company slug and remembered
 * for the tab, so in-page navigation and reloads keep the selection. The slug
 * selects a copy variant from variants.ts and/or a tailored resume from the
 * resumes manifest; a slug that matches neither leaves the site unchanged.
 */
export function VariantProvider({ children }: { children: React.ReactNode }) {
  const [slug, setSlug] = useState<string | null>(null);
  const [manifest, setManifest] = useState<Manifest | null>(null);

  useEffect(() => {
    const apply = (hash: string) => {
      const next = slugFromHash(hash);
      if (!next || isSectionAnchor(hash)) return;
      setSlug(next);
      try {
        sessionStorage.setItem(STORAGE_KEY, next);
      } catch {}
    };

    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) setSlug(saved);
    } catch {}

    const read = () => apply(window.location.hash);
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  // Only visitors arriving with a slug pay for the manifest request.
  useEffect(() => {
    if (!slug || manifest) return;
    let cancelled = false;
    fetch(MANIFEST_URL, { cache: "no-store" })
      .then((res) => (res.ok ? (res.json() as Promise<Manifest>) : null))
      .then((data) => {
        if (!cancelled) setManifest(data && data.resumes ? data : { resumes: {} });
      })
      .catch(() => {
        if (!cancelled) setManifest({ resumes: {} });
      });
    return () => {
      cancelled = true;
    };
  }, [slug, manifest]);

  const variant = slug ? (variants[slug] ?? null) : null;
  const entry = slug ? manifest?.resumes[slug] : undefined;
  const resume: TailoredResume | null =
    slug && entry?.file
      ? {
          slug,
          company: entry.company ?? variant?.company ?? slug,
          file: entry.file,
          href: `/resumes/${encodeURIComponent(entry.file)}`,
          uploadedAt: entry.uploadedAt ?? "",
        }
      : null;

  return (
    <VariantContext.Provider value={{ slug, variant, resume }}>
      {children}
    </VariantContext.Provider>
  );
}

export function useVariant(): Variant | null {
  return useContext(VariantContext).variant;
}

export interface Profile {
  variant: Variant | null;
  /** Company name to show as "Prepared for", from the copy variant or the resume. */
  preparedFor: string | null;
  /** Tailored resume for the active slug, if one is stored. */
  resume: TailoredResume | null;
  /** What the Download resume button points at: tailored if present, else the default. */
  resumeHref: string;
  title: string;
  focus: string;
  headline: string;
  summary: string[];
  experience: Experience[];
  featured: Project[];
  fun: Project[];
  skills: SkillCategory[];
  contact: string;
}

/** Base content merged with the active variant's overrides. */
export function useProfile(): Profile {
  const { variant, resume } = useContext(VariantContext);

  const allProjects = [...projects, ...sideProjects];
  const featured = variant?.featuredProjects
    ? variant.featuredProjects
        .map((title) => allProjects.find((p) => p.title === title))
        .filter((p): p is Project => Boolean(p))
    : projects;
  const fun = sideProjects.filter((p) => !featured.includes(p));

  const orderedSkills = variant?.skillsOrder
    ? [
        ...variant.skillsOrder
          .map((name) => skills.find((s) => s.category === name))
          .filter((s): s is SkillCategory => Boolean(s)),
        ...skills.filter((s) => !variant.skillsOrder!.includes(s.category)),
      ]
    : skills;

  return {
    variant,
    preparedFor: variant?.company ?? resume?.company ?? null,
    resume,
    resumeHref: resume?.href ?? DEFAULT_RESUME,
    title: variant?.title ?? personalInfo.title,
    focus: variant?.focus ?? personalInfo.focus,
    headline: variant?.headline ?? personalInfo.headline,
    summary: variant?.summary ?? about.summary,
    experience: experience.map((job) => ({
      ...job,
      summary: variant?.experience?.[job.company] ?? job.summary,
    })),
    featured,
    fun,
    skills: orderedSkills,
    contact: variant?.contact ?? personalInfo.contact,
  };
}
