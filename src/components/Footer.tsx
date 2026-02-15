export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Nick Johnson. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/n1ch0la5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 transition-colors hover:text-violet-400"
          >
            GitHub
          </a>
          <a
            href="mailto:nicholas.johnson78@gmail.com"
            className="text-sm text-gray-600 transition-colors hover:text-violet-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
