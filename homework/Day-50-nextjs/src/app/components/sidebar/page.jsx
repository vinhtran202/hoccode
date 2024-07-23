import React from "react";

export default function SidebarPage() {
  return (
    <aside className="hidden md:block md:w-[300px] lg:w-[400px] flex flex-col gap-4">
      <figure className="w-full">
        <div
          className="relative shadow-black/5 shadow-none rounded-large w-52 h-52"
          style={{ maxWidth: "fit-content" }}
        >
          <div className="relative overflow-hidden rounded-inherit rounded-large translate-x-[50%] ">
            <img
              src="https://yt3.googleusercontent.com/UsflU74uvka_3sejOu3LUGwzOhHJV0eIYoWcvOfkOre_c12uIN4ys-QqRlAkbusEmbZjTA-b=s900-c-k-c0x00ffffff-no-rj"
              className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none object-cover transform hover:scale-125 transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large p-2 w-[300px] lg:w-[400px]"
              loading="lazy"
              alt="Fullstack.edu.vn F8"
              data-loaded="true"
            />
          </div>
        </div>
        <figcaption className="text-center text-sm">
          Front-end developer
        </figcaption>
      </figure>
      <section>
        <h2 className="text-4xl text-default-700 mb-6">Các kỹ năng của tôi</h2>
        <ul className="mb-8">
          <li className="border border-default-700">
            <h3 className="font-bold inline ">Kỹ năng làm việc</h3>: REST API,
            React.js, Next.js, Redux, Context, CSS3, HTML5, UI/UX, Figma,
            Photoshop...
          </li>
          <li className="border border-default-700 mb-4">
            <h3 className="font-bold inline">Các kỹ năng khác</h3>: Kỹ năng
            nghiên cứu và tìm kiếm tương đối tốt. Tư duy làm việc, kỹ năng làm
            việc nhóm tốt so với độ tuổi.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-4xl text-default-700 mb-5 ">Lịch sử</h2>
        <ul className="">
          <li className="border border-default-700 mb-4">
            <h3 className="font-bold inline">2016</h3>: Trường Trung học Cơ sở
            nào đó
            <hr
              className="shrink-0 bg-divider border-none w-full h-divider"
              role="separator"
            />
          </li>
          <li className="border border-default-700 mb-4">
            <h3 className="font-bold inline">2017-2019</h3>: Các trường Trung
            học Cơ sở khác
            <hr
              className="shrink-0 bg-divider border-none w-full h-divider"
              role="separator"
            />
          </li>
          <li className="border border-default-700 mb-4">
            <h3 className="font-bold inline">2019-2021</h3>: Trường Trung học
            Phổ thông khác
            <hr
              className="shrink-0 bg-divider border-none w-full h-divider"
              role="separator"
            />
          </li>
          <li className="border border-default-700 mb-4">
            <h3 className="font-bold inline">2022-2023</h3>: Học đại học và làm
            trợ giảng tại F8
            <hr
              className="shrink-0 bg-divider border-none w-full h-divider"
              role="separator"
            />
          </li>
        </ul>
      </section>
    </aside>
  );
}
