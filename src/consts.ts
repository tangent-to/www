import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Tangent",
  EMAIL: "essiparent@icloud.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Tangent",
  DESCRIPTION: "Scientific machine learning and physics-based modeling, with open-source tools for reproducible scientific computing.",
};

export const BLOG: Metadata = {
  TITLE: "Writing",
  DESCRIPTION: "Notes on getting modeling right: reproducibility, differentiable models, and machine-learning rigor.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Selected applied and professional projects.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Applied and professional projects in scientific machine learning and physics-based modeling.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/tangent-to"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/essi-parent-b1b61a24b/",
  }
];
