import React from "react";

export default function NavbarPage() {
  return (
    <nav
      className="flex z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70"
      style={{ "--navbar-height": "4rem" }}
    >
      <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-[1280px]">
        <ul
          className="flex gap-4 h-full flex-row flex-nowrap data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 basis-1/5 sm:flex sm:basis-full items-center"
          data-justify="start"
        >
          <li className="flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border gap-3 max-w-fit">
            <a
              className="hidden sm:flex justify-start items-center gap-1"
              href="/"
            >
              <img
                alt="logo"
                loading="lazy"
                width="36"
                height="36"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Ffavicon.ico&amp;w=48&amp;q=75 1x, /_next/image?url=%2Ffavicon.ico&amp;w=96&amp;q=75 2x"
                src="/_next/image?url=%2Ffavicon.ico&amp;w=96&amp;q=75"
              />
              <p className="font-bold text-inherit">Fullstack.edu.vn F8</p>
            </a>
            <a
              className="font-bold text-green-500 hover:underline hover:text-green-400"
              href="/"
            >
              Home
            </a>
          </li>
        </ul>
        <ul
          className="gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 flex basis-5 sm:basis-full"
          data-justify="end"
        >
          <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold flex gap-2 items-center">
            <a
              className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
              aria-label="F8"
              tabIndex="0"
              role="link"
              href="https://fullstack.edu.vn/@son-dang"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="logo f8"
                loading="lazy"
                width="28"
                height="28"
                decoding="async"
                data-nimg="1"
                className="rounded-md"
                srcSet="/_next/image?url=https%3A%2F%2Ffullstack.edu.vn%2Fstatic%2Fmedia%2Ff8-icon.18cd71cfcfa33566a22b.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Ffullstack.edu.vn%2Fstatic%2Fmedia%2Ff8-icon.18cd71cfcfa33566a22b.png&amp;w=64&amp;q=75 2x"
                src="/_next/image?url=https%3A%2F%2Ffullstack.edu.vn%2Fstatic%2Fmedia%2Ff8-icon.18cd71cfcfa33566a22b.png&amp;w=64&amp;q=75"
              />
            </a>
            <a
              className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
              aria-label="Twitter"
              tabIndex="0"
              role="link"
              href="https://www.facebook.com/groups/f8official"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                className="text-default-500"
              >
                <path
                  clipRule="evenodd"
                  d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
              aria-label="Youtube"
              tabIndex="0"
              role="link"
              href="https://www.youtube.com/c/F8VNOfficial"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                className="text-default-500"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 12C0 8.25027 0 6.3754 0.954915 5.06107C1.26331 4.6366 1.6366 4.26331 2.06107 3.95491C3.3754 3 5.25027 3 9 3H15C18.7497 3 20.6246 3 21.9389 3.95491C22.3634 4.26331 22.7367 4.6366 23.0451 5.06107C24 6.3754 24 8.25027 24 12C24 15.7497 24 17.6246 23.0451 18.9389C22.7367 19.3634 22.3634 19.7367 21.9389 20.0451C20.6246 21 18.7497 21 15 21H9C5.25027 21 3.3754 21 2.06107 20.0451C1.6366 19.7367 1.26331 19.3634 0.954915 18.9389C0 17.6246 0 15.7497 0 12ZM9 5H15C16.9194 5 18.1983 5.00275 19.1673 5.10773C20.0989 5.20866 20.504 5.38448 20.7634 5.57295C21.018 5.75799 21.242 5.98196 21.4271 6.23664C21.6155 6.49605 21.7913 6.90113 21.8923 7.83269C21.9973 8.80167 22 10.0806 22 12C22 13.9194 21.9973 15.1983 21.8923 16.1673C21.7913 17.0989 21.6155 17.504 21.4271 17.7634C21.242 18.018 21.018 18.242 20.7634 18.4271C20.504 18.6155 20.0989 18.7913 19.1673 18.8923C18.1983 18.9973 16.9194 19 15 19H9C7.08058 19 5.80167 18.9973 4.83269 18.8923C3.90113 18.7913 3.49605 18.6155 3.23664 18.4271C2.98196 18.242 2.75799 18.018 2.57295 17.7634C2.38448 17.504 2.20866 17.0989 2.10773 16.1673C2.00275 15.1983 2 13.9194 2 12C2 10.0806 2.00275 8.80167 2.10773 7.83269C2.20866 6.90113 2.38448 6.49605 2.57295 6.23664C2.75799 5.98196 2.98196 5.75799 3.23664 5.57295C3.49605 5.38448 3.90113 5.20866 4.83269 5.10773C5.80167 5.00275 7.08058 5 9 5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <label
              aria-label="Switch to dark mode"
              className="group relative max-w-fit inline-flex items-center justify-start touch-none tap-highlight-transparent px-px transition-opacity hover:opacity-80 cursor-pointer"
              data-selected="true"
            >
              <div
                style={{
                  border: 0,
                  clip: "rect(0 0 0 0)",
                  clipPath: "inset(50%)",
                  height: "1px",
                  margin: "-1px",
                  overflow: "hidden",
                  padding: 0,
                  position: "absolute",
                  width: "1px",
                  whiteSpace: "nowrap",
                }}
              >
                <input
                  aria-labelledby=":R4irqla:"
                  type="checkbox"
                  role="switch"
                  checked
                  value=""
                />
              </div>
              <div
                aria-hidden="true"
                className="relative flex-shrink-0 overflow-hidden outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background group-data-[selected=true]:text-primary-foreground transition-background w-auto h-auto bg-transparent rounded-lg flex items-center justify-center group-data-[selected=true]:bg-transparent !text-default-500 pt-px px-0 mx-0"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height="22"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <path
                    d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </label>
            <button
              className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default text-default-foreground data-[hover=true]:opacity-hover"
              type="button"
            >
              en
            </button>
          </li>
        </ul>
      </header>
    </nav>
  );
}
