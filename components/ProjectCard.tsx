"use client";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative h-[420px] w-[320px] cursor-pointer overflow-hidden rounded-2xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      {/* Text Content - Siempre visible y fijo */}
      <div className="absolute bottom-0 right-0 p-6 text-right">
        <div className="opacity-100">
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary-foreground/80">
            {project.category}
          </p>
          <h3 className="text-xl font-bold text-primary-foreground">
            {project.title}
          </h3>
          <div className="mt-3 ml-auto h-2px w-16 bg-primary-foreground" />
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-primary-foreground/50" />
    </div>
  );
}