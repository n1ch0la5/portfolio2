import type { Metadata } from "next";

// Unlisted page. Nothing on the site links here, and search engines are told
// not to index it. Share the URL directly with site owners.

// Paste your real links here. Until then, every button falls back to email.
const BOOKING_URL = ""; // e.g. Calendly link for the free checkup
const FIXUP_URL = ""; // Stripe Payment Link: Site Fix-up
const CARE_URL = ""; // Stripe Payment Link: Site Care
const GROWTH_URL = ""; // Stripe Payment Link: Site Growth
const EMAIL = "nickjohnson.builds@gmail.com";

const SHARE = "20%";

const bookHref =
  BOOKING_URL ||
  `mailto:${EMAIL}?subject=${encodeURIComponent("Free site checkup")}&body=${encodeURIComponent("Site address:\n\nWhat's bugging you about it:\n")}`;
const mailPlan = (name: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(`Start ${name}`)}&body=${encodeURIComponent("Site address:\n")}`;

const plans = [
  {
    name: "Fix-up",
    price: "$349",
    per: "one time",
    note: "Start here",
    href: FIXUP_URL || mailPlan("a Site Fix-up"),
    cta: "Book the fix-up",
    items: [
      "Updates, backups and security cleanup",
      "ads.txt, ad and affiliate setup checked",
      "Broken pages, links and forms fixed",
      "The worst speed problems fixed",
      "A short written report of what I did",
    ],
  },
  {
    name: "Care",
    price: "$79",
    per: "/ month",
    note: "Keep it running",
    href: CARE_URL || mailPlan("Site Care"),
    cta: "Start Care",
    items: [
      "Updates, backups and uptime checks",
      "Small fixes and changes",
      "A quick monthly check for broken things",
      "Month to month, cancel any time",
    ],
  },
  {
    name: "Growth",
    price: "$199",
    per: "/ month",
    note: `+ ${SHARE} of revenue above your baseline`,
    href: GROWTH_URL || mailPlan("Site Growth"),
    cta: "Start Growth",
    items: [
      "Everything in Care",
      "Ad and affiliate setup and tuning",
      "Speed and page work aimed at earnings",
      "Small features included",
      "Month to month, cancel any time",
    ],
  },
];

export const metadata: Metadata = {
  title: "Site Care | Nick Johnson",
  description:
    "I keep websites fast, updated and earning, from blogs and shops to classifieds and community sites. A one-time fix-up, monthly care, or a growth plan where I share only in the money I add.",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: null },
  openGraph: {
    title: "Site Care | Nick Johnson",
    description:
      "I keep websites fast, updated and earning, from blogs and shops to classifieds and community sites. A one-time fix-up, monthly care, or a growth plan where I share only in the money I add.",
    url: "https://nicksjohnson.com/care",
    type: "website",
  },
};

const included = [
  {
    title: "Kept running",
    body: "Plugin, theme and core updates, backups, uptime checks, and a monthly pass for broken links, forms and checkout.",
  },
  {
    title: "Made faster",
    body: "Image, caching and script cleanup so pages load quickly on phones. Faster pages keep visitors and help in search.",
  },
  {
    title: "Set up to earn",
    body: "Ads, ads.txt and affiliate links set up properly and placed where they pay without wrecking the page. If you already run ads, I look for what they're leaving on the table.",
  },
  {
    title: "Added to",
    body: "New pages, tools and features when you need them. Small things are part of the plan; bigger builds get a quote first.",
  },
];

const steps = [
  {
    n: "01",
    title: "Book a free checkup",
    body: "Fifteen minutes. Send me the address and we'll talk about what the site does and what's bugging you.",
  },
  {
    n: "02",
    title: "Get a written list",
    body: "Within two days you get a plain list of what I'd fix, in order, and what I think it could earn. Yours to keep either way.",
  },
  {
    n: "03",
    title: "Start the plan",
    body: "Pick the one-time fix-up or a monthly plan and I get to work. Monthly plans cancel any month.",
  },
];

const faqs = [
  {
    q: "How does the revenue share work?",
    a: `It's only on the Growth plan. Before we start, we take your average monthly ad and affiliate income over the last 3 months as your baseline. Each month you share your dashboard totals, and I invoice ${SHARE} of anything above that baseline. If the site doesn't beat it, you pay only the flat fee.`,
  },
  {
    q: "Who owns the site?",
    a: "You do. Domain, hosting, ad accounts and content stay in your name. I work through access you give me and can hand everything back at any time.",
  },
  {
    q: "What kinds of sites?",
    a: "Blogs and reference sites, online shops, directories, classifieds, marketplaces, community and membership sites, and business sites. WordPress, Laravel, Next.js, static sites and Shopify themes. Bigger or custom-built sites get a quote after the checkup.",
  },
  {
    q: "Is there a contract?",
    a: "No. It's month to month. If it isn't worth it to you, stop.",
  },
];

export default function CarePage() {
  return (
    <>
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-mono text-xl font-bold text-blue-400">NJ</span>
          <span className="font-mono text-xs text-gray-500">Site Care</span>
        </div>
      </header>

      <main>
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-4 font-mono text-sm text-blue-400">
              Website maintenance and monetization
            </p>
            <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              I keep websites running, fast, and earning.
            </h1>
            <p className="mb-10 max-w-2xl text-lg text-gray-400">
              For owners who'd rather run the business than the website: blogs,
              shops, directories, classifieds and community sites. Start with a
              one-time fix-up, keep it running for a flat monthly fee, or let me
              grow it and share only in the money I add.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={bookHref}
                className="bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Book a free checkup
              </a>
              <a
                href="#plan"
                className="border border-white/15 px-8 py-4 font-semibold text-gray-200 transition-colors hover:border-white/30 hover:text-white"
              >
                See prices
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-10 text-2xl font-bold sm:text-3xl">
              What I do
            </h2>
            <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {included.map((item) => (
                <div key={item.title} className="bg-gray-950 p-8">
                  <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-400">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="plan" className="border-t border-white/10 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Three ways to work together
            </h2>
            <p className="mb-10 max-w-2xl text-gray-400">
              I've been building and running websites for 17 years, including
              ten years looking after a company's ad-supported sites and keeping
              their AdSense money coming in. Most sites should start with the
              fix-up.
            </p>
            <p className="-mt-6 mb-10 max-w-2xl text-gray-400">
              Running a bigger site, like a classifieds, marketplace or
              membership site? Those get a custom quote after the free checkup.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {plans.map((p) => (
                <div
                  key={p.name}
                  className="flex flex-col border border-white/10 bg-white/5 p-8"
                >
                  <p className="mb-2 font-mono text-xs uppercase tracking-wider text-gray-500">
                    {p.name}
                  </p>
                  <p className="mb-1 text-4xl font-bold">
                    {p.price}
                    <span className="text-lg font-normal text-gray-400">
                      {" "}
                      {p.per}
                    </span>
                  </p>
                  <p className="mb-6 font-mono text-sm text-blue-400">
                    {p.note}
                  </p>
                  <ul className="mb-8 flex-1 space-y-2 text-sm text-gray-400">
                    {p.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <a
                    href={p.href}
                    className="block bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    {p.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-10 text-2xl font-bold sm:text-3xl">
              How it starts
            </h2>
            <ol className="grid gap-8 md:grid-cols-3">
              {steps.map((s) => (
                <li key={s.n}>
                  <p className="mb-3 font-mono text-sm text-blue-400">{s.n}</p>
                  <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                  <p className="text-gray-400">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-8 text-2xl font-bold sm:text-3xl">Questions</h2>
            <dl className="space-y-8">
              {faqs.map((f) => (
                <div key={f.q}>
                  <dt className="mb-2 font-semibold text-gray-100">{f.q}</dt>
                  <dd className="text-gray-400">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Start with a free checkup
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-gray-400">
              Fifteen minutes, no pitch deck. You'll leave with a list of what
              I'd fix first.
            </p>
            <a
              href={bookHref}
              className="inline-block bg-blue-600 px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Book a free checkup
            </a>
            <p className="mt-6 font-mono text-sm text-gray-500">
              or email{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="transition-colors hover:text-blue-400"
              >
                {EMAIL}
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-mono text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Nick Johnson · West Haven, CT
          </p>
        </div>
      </footer>
    </>
  );
}
