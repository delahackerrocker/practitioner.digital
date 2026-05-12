import InteractiveWireSurface from "./InteractiveWireSurface";
import ProjectCard from "./ProjectCard";

// Odd grids get a quiet visual filler so the last card does not feel stranded.
export default function ProjectGrid({ compact = false, navigate, projects }) {
  const needsFiller = projects.length % 2 === 1;
  const fillerAccent = projects[projects.length - 1]?.accent ?? "#8fb7ff";

  return (
    <div className={`project-grid ${compact ? "project-grid--compact" : ""}`.trim()}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} navigate={navigate} project={project} />
      ))}

      {needsFiller ? (
        <div
          aria-hidden="true"
          className="project-grid__filler"
          style={{ "--project-accent": fillerAccent }}
        >
          <InteractiveWireSurface accent={fillerAccent} variant="compact" />
        </div>
      ) : null}
    </div>
  );
}
