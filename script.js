/** @format */

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form

    var formData = new FormData(e.target); // Tạo FormData từ form
    var api =
      "https://script.google.com/macros/s/AKfycbwKxfBRWeWXIPeFTdoUVKu4gbwxN9CqtQkBis9S5sQU6G8BSQNop5697T8zBC_Iq478TA/exec";
    fetch(api, {
      method: "POST",
      body: formData, // Gửi FormData trực tiếp
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Phản hồi từ server:", data);
        if (data.status === "success") {
          alert("Đã gửi dữ liệu thành công!");
          e.target.reset();
        } else {
          alert("Có lỗi xảy ra: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Lỗi:", error);
        alert("Có lỗi xảy ra khi gửi dữ liệu.");
      });
  });

  //STORY
  const Story = [
    {
      Name: "hziyy03",
      Avatar: "/IMG/avatar_footer.jpg",
      Time: "2 giờ",
      MusicName: " Lady Gaga - Close To You",
      Media: "",
      MusicSound: "/video_story/close_to_you.mp3",
    },
  ];
  const Story_list = document.querySelector(".story_list");
  let Story_list_item = ``;
  for (let i = 0; i < Story.length; i++) {
    const item = Story[i];
    Story_list_item += `<li class="story_list_item">
                          <button class="story_list_item_button">
                            <img class="story_list_item_avatar" src="${item.Avatar}" alt="" />
                            <span class="story_list_item_name">${item.Name}</span>
                          </button>
                        </li>`;
  }
  document.getElementById("story_list").innerHTML = Story_list_item;
});
