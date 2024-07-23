import { config } from "./config.js";
const { SERVER_API_URL } = config;

const root = document.querySelector(".root");

const loginHtml = `<div class="w-50 mx-auto py-3">
      <h2 class="text-center">Login</h2>
      <form action="" class="login">
        <div class="mb-3">
          <label for="">Email</label>
          <input
            type="email"
            name="email"
            class="form-control"
            required
            placeholder="Enter email"
          />
          <div class="mb-3">
            <label for="">Password</label>
            <input
              type="password"
              name="password"
              class="form-control"
              required
              placeholder="Enter Password"
            />
          </div>
        </div>
        <div class="d-grid">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
      <p class="text-center mt-2">Don't have an account? <a href="#" class="signup-link">Sign Up</a></p>
    </div>`;

const signupHtml = `<div class="w-50 mx-auto py-3">
      <h2 class="text-center">Sign Up</h2>
      <form action="" class="signup">
        <div class="mb-3">
          <label for="">Email</label>
          <input
            type="email"
            name="email"
            class="form-control"
            required
            placeholder="Enter email"
          />
          <div class="mb-3">
            <label for="">Name</label>
            <input
              type="text"
              name="name"
              class="form-control"
              required
              placeholder="Enter Name"
            />
          </div>
          <div class="mb-3">
            <label for="">Password</label>
            <input
              type="password"
              name="password"
              class="form-control"
              required
              placeholder="Enter Password"
            />
          </div>
        </div>
        <div class="d-grid">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
      <p class="text-center mt-2">Already have an account? <a href="#" class="login-link">Login</a></p>
    </div>`;

const profileHtml = `<div class="w-75 mx-auto py-3">
      <h2>Welcome back!</h2>
      <ul class="list-unstyled d-flex gap-3 profile">
        <li>Chào bạn</li>
        <li><a href="#">Tài Khoản</a></li>
        <li><a href="#" class="logout">Đăng Xuất</a></li>
      </ul>
      <div class="news-feed"></div>
      <div class="post-form-container">
        <h3>Create a New Post</h3>
        <form class="post-form">
          <div class="mb-3">
            <label for="title">Title</label>
            <input type="text" name="title" class="form-control" required placeholder="Enter title" />
          </div>
          <div class="mb-3">
            <label for="content">Content</label>
            <textarea name="content" class="form-control" required placeholder="Enter content"></textarea>
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <div class="d-grid">
        <button class="btn btn-primary load-more">Load More</button>
      </div>
    </div>`;

let isLogin = false;
let page = 1;

const render = () => {
  root.innerHTML = isLogin ? profileHtml : loginHtml;

  // Add event listeners after rendering
  const loginForm = document.querySelector(".login");
  const signupForm = document.querySelector(".signup");
  const loadMoreBtn = document.querySelector(".load-more");
  const postForm = document.querySelector(".post-form");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleLogin(e.target);
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleSignup(e.target);
    });
  }

  const logoutLink = document.querySelector(".logout");
  if (logoutLink) {
    logoutLink.addEventListener("click", handleLogout);
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => loadPosts(page++));
  }

  if (postForm) {
    postForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handlePost(e.target);
    });
  }

  if (isLogin) {
    loadPosts(page);
  }
};

const handleLogin = async (form) => {
  const data = Object.fromEntries(new FormData(form));

  try {
    const response = await fetch(`${SERVER_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Đăng nhập không thành công");
    }
    const token = await response.json();
    console.log(token);

    // Save token to local storage or cookies
    localStorage.setItem("accessToken", token.data.accessToken);

    // Set login status and re-render
    isLogin = true;
    render();
  } catch (error) {
    console.error("Lỗi đăng nhập", error);
  }
};

const handleSignup = async (form) => {
  const data = Object.fromEntries(new FormData(form));

  try {
    const response = await fetch(`${SERVER_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Đăng ký không thành công");
    }
    const result = await response.json();
    console.log(result);

    // After successful signup, switch to login form
    render();
  } catch (error) {
    console.error("Lỗi đăng ký", error);
  }
};

const handleLogout = () => {
  // Clear login status and re-render
  isLogin = false;
  localStorage.removeItem("accessToken");
  render();
};

const loadPosts = async (page) => {
  try {
    const response = await fetch(
      `${SERVER_API_URL}/blogs?page=${page}&limit=10`
    );
    if (!response.ok) {
      throw new Error("Không thể tải bài viết");
    }
    const result = await response.json();
    const posts = result.data;

    const newsFeed = document.querySelector(".news-feed");
    posts.forEach((post) => {
      const postHtml = `<div class="post">
      <h1>${post.userId.name}</h1>
        <h3>${post.title}</h3>
        <p>${post.content}</p>

      </div>
      <span>${post.createdAt}</span>
      <hr/>`;
      newsFeed.innerHTML += postHtml;
      console.log(post);
    });
  } catch (error) {
    console.error("Lỗi không thể tải bài viết", error);
  }
};

const handlePost = async (form) => {
  const data = Object.fromEntries(new FormData(form));
  const token = localStorage.getItem("accessToken");

  try {
    const response = await fetch(`${SERVER_API_URL}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Không thể đăng bài viết");
    }
    const result = await response.json();
    console.log(result);

    // Reload posts after a new one is added
    page = 1;
    document.querySelector(".news-feed").innerHTML = "";
    loadPosts(page);
  } catch (error) {
    console.error("Lỗi không thể đăng bài viết", error);
  }
};

// Initial render
render();
