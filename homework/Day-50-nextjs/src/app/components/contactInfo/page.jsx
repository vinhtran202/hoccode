import React from "react";

export default function ContactInfoPage() {
  return (
    <section>
      <h2 className="text-2xl text-default-700 text-center">
        Thông tin liên hệ
      </h2>
      <ul className="info-container w-full">
        <li>
          <span className="capitalize">
            phone:
            <a
              className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity lowercase"
              tabIndex="0"
              role="link"
              href="tel:0987654321"
              target="_blank"
            >
              0987654321
            </a>
          </span>
        </li>
        <li>
          <span className="capitalize">
            zalo:
            <a
              className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity lowercase"
              tabIndex="0"
              role="link"
              href="https://zalo.me"
              target="_blank"
            >
              https://zalo.me
            </a>
          </span>
        </li>
        <li>
          <span className="capitalize">
            email:
            <a
              className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity lowercase"
              tabIndex="0"
              role="link"
              href="mailto:contact@fullstack.edu.vn"
              target="_blank"
            >
              contact@fullstack.edu.vn
            </a>
          </span>
        </li>
        <li>
          <span className="capitalize">
            facebook:
            <a
              className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity lowercase"
              tabIndex="0"
              role="link"
              href="https://www.facebook.com/groups/f8official"
              target="_blank"
            >
              https://www.facebook.com/groups/f8official
            </a>
          </span>
        </li>
        <li>
          <span className="capitalize">
            youtube:
            <a
              className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity lowercase"
              tabIndex="0"
              role="link"
              href="https://www.youtube.com/c/F8VNOfficial"
              target="_blank"
            >
              https://www.youtube.com/c/F8VNOfficial
            </a>
          </span>
        </li>
      </ul>
      <hr
        className="shrink-0 bg-divider border-none w-full h-divider"
        role="separator"
      />
    </section>
  );
}
