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
  const Story_list = document.querySelector("#story_list");
  const sizeBorder = 62;
  let Story_list_item = `<li class="story_list_item">
                           <button class="story_list_item_button">
                              <img class="story_list_item_avatar" src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/465999819_1797030581041871_5626206262976515636_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=sXADCdVihvEQ7kNvgFG6XOu&_nc_zt=24&_nc_ht=scontent.fhan17-1.fna&_nc_gid=A9XFav7HR_sRo1JJJXz964W&oh=00_AYB-cuy0aOsPpOj6RJIm8gcfbEICkiDmXp3IXHZSuXU30g&oe=673FA238" alt="" />
                              <img class="add_story_icon" src="/Img/add_story.svg" alt="" />
                              <canvas class="avatarCanvas" width="${sizeBorder}" height="${sizeBorder}"></canvas>
                              <span class="story_list_item_name">Tin của bạn</span>
                          </button>
                         </li>`;
  for (let i = 0; i < Story.length; i++) {
    const item = Story[i];
    Story_list_item += `<li class="story_list_item">
                          <button class="story_list_item_button">
                            <img class="story_list_item_avatar" src="${item.Avatar}" alt="" />
                            <span class="story_list_item_name">${item.Name}</span>
                            <canvas class="avatarCanvas" width="${sizeBorder}" height="${sizeBorder}"></canvas>
                          </button>
                        </li>`;
  }
  Story_list.innerHTML = Story_list_item;

  const canvas = document.querySelectorAll('.avatarCanvas');
  for(let i = 0; i < canvas.length; i++){

  
const ctx = canvas[i].getContext('2d');

// Kích thước và tọa độ
const centerX = canvas[i].width / 2;
const centerY = canvas[i].height / 2;
const outerRadius =  canvas[i].width / 2; // Bán kính vòng ngoài (viền ngoài)
const innerRadius = outerRadius - 2; // Bán kính vòng trong (viền trong)

// Gradient màu
const gradient = ctx.createLinearGradient(0, 0, canvas[i].width, canvas[i].height);
gradient.addColorStop(0, '#feda75');
gradient.addColorStop(0.25, '#fa7e1e');
gradient.addColorStop(0.5, '#d62976');
gradient.addColorStop(0.75, '#962fbf');
gradient.addColorStop(1, '#4f5bd5');

// Vẽ đường viền (vòng ngoài)
ctx.beginPath();
ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
ctx.fillStyle = gradient;
ctx.fill();

// Vẽ vòng trong để tạo khoảng trống cho ảnh
ctx.beginPath();
ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
ctx.fillStyle = '#fff'; // Màu trắng ở trung tâm
ctx.fill();

// Vẽ ảnh bên trong

  }
  const thumb = "https://instagram.fhan17-1.fna.fbcdn.net/v/t39.30808-6/465697836_521005890908850_6768022630801790702_n.jpg?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDQ4eDIwNDguc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan17-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8o5Cpkw6v1YQ7kNvgGoO4Oy&_nc_gid=75cd6e6bfa954eadb8befcfaa4413b4c&edm=APNOSGoAAAAA&ccb=7-5&ig_cache_key=MzQ5Mzg5NTQwNzQyMTMzNTY2MQ%3D%3D.3-ccb7-5&oh=00_AYDaIbpU9qjlK43vim-8Aaau07Lp0PqFxou7JkcTZ7QylQ&oe=6740DA52&_nc_sid=ca40e6";
  const Articles = [
    {
      Avatar : "/Img/avatar_footer.jpg",
      Name : "asiamystika",
      Type : "Image",
      Media : [thumb,thumb,thumb,thumb],
      Content:`<p>🚆 𝑰𝒎𝒂𝒈𝒆𝒔 𝒕𝒉𝒂𝒕 𝒄𝒂𝒑𝒕𝒖𝒓𝒆 𝒘𝒉𝒚 𝑽𝒊𝒆𝒕𝒏𝒂𝒎'𝒔 𝑵𝒐𝒓𝒕𝒉-𝑺𝒐𝒖𝒕𝒉 𝑹𝒆𝒖𝒏𝒊𝒇𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝑹𝒂𝒊𝒍𝒘𝒂𝒚 𝒊𝒔 𝒗𝒐𝒕𝒆𝒅 𝒂𝒎𝒐𝒏𝒈 𝒘𝒐𝒓𝒍𝒅'𝒔 𝒕𝒐𝒑 10 𝒄𝒂𝒑𝒕𝒊𝒗𝒂𝒕𝒊𝒏𝒈 𝒓𝒂𝒊𝒍 𝒓𝒐𝒖𝒕𝒆𝒔 𝒇𝒐𝒓 𝒕𝒓𝒂𝒗𝒆𝒍 🇻🇳<br><br>Overnight train is among the best unique experiences we would recommend for every family/friends trip in Vietnam. Some scenic routes you should try:<br><br>❤️ Sài Gòn - Bình Thuận (3.5 hrs): Pass through stunning landscapes, including the highlight—dragon fruit fields. Take a night train to see them beautifully lit up!<br><br>❤️ Huế - Đà Nẵng (3 hrs): Perfect for scenery lovers! This route winds along the breathtaking Hải Vân Pass, offering views of mountains and lush forests.<br><br>❤️ Đà Nẵng - Quy Nhơn (5-6 hrs): Capture the beauty of Vietnam’s South Central Coast in this fascinating journey. Consider The Vietage Train, Top 6 Railways in Asia, for luxury experience.<br><br>❤️ Hà Nội - Sài Gòn (30+ hrs): An epic cross-country journey! Enjoy diverse landscapes, from peaceful countryside to coastal views, all from the comfort of your seat.<br><br>Ready to see Vietnam by rail? Let’s plan your journey!</p>`,
      Like : 15,
      Time :"18 tháng 11"
    }
  ];
  let Article = ``;
  for(let i = 0; i < Articles.length; i++){
    const item = Articles[i];
    const Media = item.Type == "Image" ? 
    `<div class="article_body_slide swiper">
      <div class="swiper-wrapper">
         ${item.Media.map(media => `
        <div class="swiper-slide">
          <img src="${media}" alt="Media" />
        </div>`).join('')}
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>` :
     `<div>
          <video></video>
     </div>`;
    Article += `<article class="Article">
                    <div class="article_header">
                        <div class="article_header_author">
                          <img class="article_header_author_avatar" src="${item.Avatar}" />
                          <div class="article_header_author_name">${item.Name}</div>
                        </div>
                        <div class="article_header_option">
                          <svg xmlns="http://www.w3.org/2000/svg" aria-label="Lựa chọn khác" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                            <title>Lựa chọn khác</title>
                            <circle cx="12" cy="12" r="1.5"></circle>
                            <circle cx="6" cy="12" r="1.5"></circle>
                            <circle cx="18" cy="12" r="1.5"></circle>
                          </svg>
                        </div>
                    </div>
                    <div class="article_body">
                      <div class="article_body_media">
                        ${Media}
                      </div>
                      <div class="article_body_action">
                        <button>
                          <img src="/Img/notify_heal.svg" />
                        </button>
                        <button>
                          <img src="/Img/comment.svg" />
                        </button>
                        <button>
                          <img src="/Img/share.svg" />
                        </button>
                        <button>
                          <img src="/Img/save.svg" />
                        </button>
                      </div>
                      <div class="article_body_like">${item.Like} lượt thích</div>
                      <div class="article_body_content">
                        ${item.Content}
                      </div>
                      
                      <p class="article_body_time">${item.Time}</p>
                    </div>
                </article>`
  }
  document.getElementById('Articles').innerHTML = Article;

  const articles = document.querySelectorAll('.Article');
const maxLength = 180;
articles.forEach(article => {
  const contentElement = article.querySelector('.article_body_content');

  const fullText = contentElement.innerHTML.trim();
  const truncatedText = fullText.slice(0, maxLength);

  if (fullText.length > maxLength) {
    contentElement.innerHTML = truncatedText + '... <span class="article_body_readmore">Xem thêm</span>';

    const readMoreButton = contentElement.querySelector('.article_body_readmore');

    readMoreButton.addEventListener('click', function () {
      contentElement.innerHTML = fullText;
      // Ẩn nút "Xem thêm" sau khi nhấn
      readMoreButton.style.display = 'none';
    });
  }
});
});
