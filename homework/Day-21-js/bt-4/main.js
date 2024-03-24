var dataArray = [
    ["Tiêu đề bài viết 1", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente praesentium voluptates in voluptatem quisquam qui exercitationem. Voluptas culpa ut, a aliquam beatae nisi provident laudantium nulla ipsam tempora corrupti explicabo.", "https://fastly.picsum.photos/id/450/536/354.jpg?hmac=9m3LrKj4vt0wUGoG8Eqmbw1V0LCJ9VKjotelYl8kLA8"],
    ["Tiêu đề bài viết 2", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente praesentium voluptates in voluptatem quisquam qui exercitationem. Voluptas culpa ut, a aliquam beatae nisi provident laudantium nulla ipsam tempora corrupti explicabo.", "https://fastly.picsum.photos/id/450/536/354.jpg?hmac=9m3LrKj4vt0wUGoG8Eqmbw1V0LCJ9VKjotelYl8kLA8"],
    ["Tiêu đề bài viết 3", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente praesentium voluptates in voluptatem quisquam qui exercitationem. Voluptas culpa ut, a aliquam beatae nisi provident laudantium nulla ipsam tempora corrupti explicabo.", "https://fastly.picsum.photos/id/450/536/354.jpg?hmac=9m3LrKj4vt0wUGoG8Eqmbw1V0LCJ9VKjotelYl8kLA8"]
];

var html = "";

dataArray.forEach(function(data, index) {
    var contentOrder;

    if (index % 2 === 0) {
        contentOrder = `
            <div class="title">
                <h1>${data[0]}</h1>
                <span>${data[1]}</span>
            </div>
            <div class="image">
                <img src="${data[2]}" alt="" />
            </div>
        `;
    } else {
        contentOrder = `
            <div class="image">
                <img src="${data[2]}" alt="" />
            </div>
            <div class="title">
                <h1>${data[0]}</h1>
                <span>${data[1]}</span>
            </div>
        `;
    }

    html += `<div class="box">${contentOrder}</div>`;
});

document.write(html)
