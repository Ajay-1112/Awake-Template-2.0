import { cn } from "@/lib/utils";
import { MarqueeComponent } from '../components/ui/shadcn/MarqueeComponent';
import { usePortfolio } from '@/contexts/PortfolioContext';


// Utility function to create slugs
const createSlug = (title) => {
  return title
    .toLowerCase() // Convert to lowercase
    .trim() // Trim whitespace from both ends
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '') // Remove all non-word characters (except hyphens)
    .replace(/--+/g, '-') // Replace multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, ''); // Remove hyphens from the beginning and end
};

export default function Testimonials() {
  const portfolioItems = usePortfolio();

  const reviewItems = portfolioItems?.map((item, index) => {
    // Truncate reviewBody if longer than 80 characters
    const reviewText =
      item.review.reviewBody.length > 80
        ? `${item.review.reviewBody.slice(0, 80)}... Read more`
        : item.review.reviewBody;

    return (
      <a href={`/${createSlug(item.title)}`} key={index} className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4")}>
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt={item.review.clientName} src={item.review.clientProfilePhoto} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">{item.review.clientName}</figcaption>
            <p className="text-xs font-medium dark:text-white/40">{item.review.clientUsername}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-xs dark:text-white">{reviewText}</blockquote>
        <img src={item.imgSrc} className="mt-2 rounded-lg" alt="" />
      </a>
    );
  });

  return (
    <section id='testimonials' className=' relative w-full container mx-auto px-2 xl:px-0 flex flex-col items-center justify-center overflow-hidden'>
      <h2 className="text-sm font-mono font-medium tracking-wider uppercase animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">Testimonials</h2>
      <h3 className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text px-1 py-2 text-5xl font-semibold leading-none tracking-tighter text-transparent text-center sm:text-5xl md:text-6xl lg:text-7xl">
        What People Say
      </h3>
      <p className="text-lg tracking-tight text-gray-400 md:text-xl text-balance text-center">
        Don&apos;t just take our word for it. Here&apos;s what <br /> <strong>real people</strong> are saying about our work.
      </p>
      <MarqueeComponent className="mt-8" marqueeItems={reviewItems} />
    </section>
  );
}