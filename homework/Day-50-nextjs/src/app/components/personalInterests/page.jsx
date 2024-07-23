import React from "react";

export default function PersonalInterestsPage() {
  return (
    <section>
      <h2 className="text-2xl text-default-700 text-center">
        Sở thích cá nhân
      </h2>
      <ul>
        <li className="list-disc list-inside">
          <span className="capitalize">
            Thưởng thức nhạc nhẹ, nhạc rap của Đen Vâu và các nghệ sĩ khác,…
          </span>
        </li>
        <li className="list-disc list-inside">
          <span className="capitalize">
            Đọc sách, học hỏi thêm về các ngôn ngữ lập trình mới mẻ. Hiện tại,
            tôi đang tự học Python
          </span>
        </li>
        <li className="list-disc list-inside">
          <span className="capitalize">
            Theo dõi các xu hướng công nghệ, tin tức về các sản phẩm nổi tiếng
            như Iphone, Huawei, GoogleAI,…
          </span>
        </li>
      </ul>
    </section>
  );
}
