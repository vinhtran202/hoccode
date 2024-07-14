import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getDatabase,
  get,
  ref,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC59FPXcEXZZrQqOc77gZUM6t7TxWBIlPo",
  authDomain: "my-blog-b69d8.firebaseapp.com",
  databaseURL:
    "https://my-blog-b69d8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-blog-b69d8",
  storageBucket: "my-blog-b69d8.appspot.com",
  messagingSenderId: "794790048312",
  appId: "1:794790048312:web:ddbbca95e829568ad7accd",
  measurementId: "G-Y89L731KTV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

function getPostData() {
  const user_ref = ref(db, "post/");
  get(user_ref).then((snapshot) => {
    const data = snapshot.val();

    let html = "";
    const table = document.querySelector(".main");
    for (const key in data) {
      const { title, post_content } = data[key];

      console.log(post_content);

      html += `
           <div class="post"> 
               <h2>${title}</h2>
               <p>
                 ${post_content}
               </p>
           </div>
          `;
    }
    table.innerHTML = html;
  });
}

getPostData();
