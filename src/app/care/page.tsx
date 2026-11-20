import type { Metadata } from "next";

// Unlisted page. Nothing on the site links here, and search engines are told
// not to index it. Share the URL directly with site owners.

// Paste your real links here. Until then, both buttons fall back to email.
const BOOKING_URL = ""; // e.g. https://cal.com/nickjohnson/site-checkup
const PLAN_URL = ""; // e.g. Stripe Payment Link for the monthly plan
const EMAIL = "nickjohnson.builds@gmail.com";

const PRICE = "$150";
const SHARE = "10%";

const bookHref =
  BOOKING_URL ||
  `mailto:${EMAIL}?subject=${encodeURIComponent("Free site checkup")}&body=${encodeURIComponent("Site address:\n\nWhat's bugging you about it:\n")}`;
const planHref =
  PLAN_URL ||
  `mailto:${EMAIL}?subject=${encodeURIComponent("Start the Site Care plan")}&body=${encodeURIComponent("Site address:\n")}`;

export const metadata: Metadata = {
  title: "Site Care | Nick Johnson",
  description:
    "I keep small websites fast, updated and earning, for a flat monthly fee plus a share of the revenue I help them make.",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: null },
  openGraph: {
    title: "Site Care | Nick Johnson",
    description:
      "I keep small websites fast, updated and earning, for a flat monthly fee plus a share of the revenue I help them make.",
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
    body: "If it looks right, start the monthly plan and I get to work. Cancel any month.",
  },
];

const faqs = [
  {
    q: "How does the revenue share work?",
    a: `Each month you share your ad and affiliate dashboard totals, and I invoice ${SHARE} of what the site earned. If it earned nothing that month, you pay only the flat fee.`,
  },
  {
    q: "Who owns the site?",
    a: "You do. Domain, hosting, ad accounts and content stay in your name. I work through access you give me and can hand everything back at any time.",
  },
  {
    q: "What kinds of sites?",
    a: "Blogs, hobby and reference sites, small shops and small business sites. WordPress, static sites, Next.js, Laravel and Shopify themes.",
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
              I keep small websites running, fast, and earning.
            </h1>
            <p className="mb-10 max-w-2xl text-lg text-gray-400">
              For people who own a blog, a hobby site or a small shop and would
              rather not babysit it. You pay a flat monthly fee plus a small
              share of the money the site makes, so I only do well when it does.
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
                See the plan
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-10 text-2xl font-bold sm:text-3xl">
              What the plan covers
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
          <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
                One plan, priced so we both win
              </h2>
              <p className="mb-6 text-gray-400">
                I've done this before. For ten years I looked after a
                company's ad-supported websites for a flat monthly fee plus 10%
                of their AdSense revenue, and kept that money coming in month
                after month. I've been building and running websites for 17
                years.
              </p>
              <p className="text-gray-400">
                The share is what keeps me focused on the things that actually
                move your numbers, not just on keeping the lights on.
              </p>
            </div>
            <div className="border border-white/10 bg-white/5 p-8">
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-gray-500">
                Site Care plan
              </p>
              <p className="mb-1 text-4xl font-bold">
                {PRICE}
                <span className="text-lg font-normal text-gray-400">
                  {" "}
                  / month
                </span>
              </p>
              <p className="mb-6 font-mono text-sm text-blue-400">
                + {SHARE} of ad and affiliate revenue
              </p>
              <ul className="mb-8 space-y-2 text-sm text-gray-400">
                <li>Updates, backups and uptime checks</li>
                <li>Speed and fix-it work every month</li>
                <li>Ad and affiliate setup and tuning</li>
                <li>Small features included</li>
                <li>Month to month, cancel any time</li>
              </ul>
              <a
                href={planHref}
                className="block bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Start the plan
              </a>
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
