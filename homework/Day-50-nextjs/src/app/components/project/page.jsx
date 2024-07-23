import React from "react";

export default function ProjectPage({
  title,
  description,
  demoLink,
  codeLink,
}) {
  return (
    <div className="p-2">
      <h3 className="text-xl">{title}</h3>
      <p className="text-md">{description}</p>
      <div className="flex gap-4 py-2">
        <a
          className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
          tabIndex="0"
          role="link"
          href={demoLink}
          target="_blank"
        >
          Demo
        </a>
        <a
          className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
          tabIndex="0"
          role="link"
          href={codeLink}
          target="_blank"
        >
          Code
        </a>
      </div>
      <hr
        className="shrink-0 bg-divider border-none w-full h-divider"
        role="separator"
      />
    </div>
  );
}
