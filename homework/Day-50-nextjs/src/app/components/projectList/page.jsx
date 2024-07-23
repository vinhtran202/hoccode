import React from "react";

export default function ProjectListPage() {
  return (
    <section>
      <h2 className="text-2xl text-default-700 text-center">Các dự án</h2>
      <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
        <Project
          title="Project Code snippet"
          description="Một dự án nhỏ hoàn thành trong vòng một ngày. Một trang web đơn giản cho phép tạo và chia sẻ các đoạn code. Sử dụng HTML, CSS, JS và custom elements."
          demoLink="https://codefast.vercel.app/"
          codeLink="https://github.com/duongnguyenf8/demo_custom-element"
        />
        <Project
          title="Project blog"
          description="Một dự án được thực hiện trong ba ngày. Một trang web blog social với các bài viết về lập trình và học tập. Sử dụng React.js."
          demoLink="https://code-exercise-blog.vercel.app/"
          codeLink="https://github.com/duongnguyenf8/code_exercise-blog"
        />
        <Project
          title="Project 20f8"
          description="Một dự án game được làm trong một ngày. Một trò chơi giải đố dựa trên trò chơi 2048. Sử dụng Next.js và Tailwind CSS."
          demoLink="http://f8-2048.sanphamkythuat.online:880/"
          codeLink="https://github.com/duongnguyenf8/20f8"
        />
      </div>
    </section>
  );
}
