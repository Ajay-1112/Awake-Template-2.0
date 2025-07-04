import { ExternalLink } from "lucide-react";
import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/shadcn/card";
import { Button } from "@/components/ui/shadcn/button";
import { portfolioItems } from "@/data/Portfolio_data";

export default function Portfolio() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 2xl:max-w-[1400px]">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            A selection of my recent software development work, showcasing
            expertise in front-end, back-end, and mobile application
            development.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 ">
          {portfolioItems.map((project) => (
            <Card
              key={project.id}
              className="group hover:border-primary/30 overflow-hidden pt-0 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <CardHeader>
                <h3 className="text-md md:text-xl  font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-sm md:text-lg mt-2 line-clamp-2">
                  {project.description}
                </p>
              </CardHeader>

              <CardFooter>
                <Button variant="secondary">
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-primary flex items-center">
                    <span className="text-sm font-medium">View project</span>
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
