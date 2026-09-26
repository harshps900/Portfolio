import Link from "next/link";
import Header from "@/common/Header";
import Footer from "@/common/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] bg-[#09090b] text-[#f4f4f5] flex flex-col items-center justify-center px-6 text-center pt-28 pb-16">
        <div className="space-y-6 max-w-md">
          <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-widest">
            404 Error
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-100">
            Page Not Found
          </h1>
          <p className="text-zinc-400 text-sm font-normal leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved. Use the navigation below to return to the portfolio.
          </p>
          <div>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white text-sm font-medium transition-all"
            >
              Back to Home ➔
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
