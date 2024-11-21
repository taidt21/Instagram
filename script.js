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
  const Storys = [
    {
      Name: "hziyy03",
      Avatar: "/image/avatar_footer.jpg",
      Time: "2 giờ",
      MusicName: " Lady Gaga - Close To You",
      Video :"",
    },
  ];
  const Story_list = document.querySelector("#story_list");
  const sizeBorder = 62;
  let Story_list_item = `<li class="story_list_item">
                           <button class="story_list_item_button">
                              <img class="story_list_item_avatar" src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/465999819_1797030581041871_5626206262976515636_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=sXADCdVihvEQ7kNvgFG6XOu&_nc_zt=24&_nc_ht=scontent.fhan17-1.fna&_nc_gid=A9XFav7HR_sRo1JJJXz964W&oh=00_AYB-cuy0aOsPpOj6RJIm8gcfbEICkiDmXp3IXHZSuXU30g&oe=673FA238" alt="" />
                              <img class="add_story_icon" src="/image/add_story.svg" alt="" />
                              <canvas class="avatarCanvas" width="${sizeBorder}" height="${sizeBorder}"></canvas>
                              <span class="story_list_item_name">Tin của bạn</span>
                          </button>
                         </li>`;
  for (let i = 0; i < Storys.length; i++) {
    const Story = Storys[i];
    Story_list_item += `<li class="story_list_item">
                          <button class="story_list_item_button">
                            <img class="story_list_item_avatar" src="${Story.Avatar}" alt="" />
                            <span class="story_list_item_name">${Story.Name}</span>
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
      Avatar : "/image/avatar_footer.jpg",
      Name : "asiamystika",
      Type : "Image",
      Media : [thumb,thumb,thumb,thumb],
      Content:`<p>🚆 𝑰𝒎𝒂𝒈𝒆𝒔 𝒕𝒉𝒂𝒕 𝒄𝒂𝒑𝒕𝒖𝒓𝒆 𝒘𝒉𝒚 𝑽𝒊𝒆𝒕𝒏𝒂𝒎'𝒔 𝑵𝒐𝒓𝒕𝒉-𝑺𝒐𝒖𝒕𝒉 𝑹𝒆𝒖𝒏𝒊𝒇𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝑹𝒂𝒊𝒍𝒘𝒂𝒚 𝒊𝒔 𝒗𝒐𝒕𝒆𝒅 𝒂𝒎𝒐𝒏𝒈 𝒘𝒐𝒓𝒍𝒅'𝒔 𝒕𝒐𝒑 10 𝒄𝒂𝒑𝒕𝒊𝒗𝒂𝒕𝒊𝒏𝒈 𝒓𝒂𝒊𝒍 𝒓𝒐𝒖𝒕𝒆𝒔 𝒇𝒐𝒓 𝒕𝒓𝒂𝒗𝒆𝒍 🇻🇳<br><br>Overnight train is among the best unique experiences we would recommend for every family/friends trip in Vietnam. Some scenic routes you should try:<br><br>❤️ Sài Gòn - Bình Thuận (3.5 hrs): Pass through stunning landscapes, including the highlight—dragon fruit fields. Take a night train to see them beautifully lit up!<br><br>❤️ Huế - Đà Nẵng (3 hrs): Perfect for scenery lovers! This route winds along the breathtaking Hải Vân Pass, offering views of mountains and lush forests.<br><br>❤️ Đà Nẵng - Quy Nhơn (5-6 hrs): Capture the beauty of Vietnam’s South Central Coast in this fascinating journey. Consider The Vietage Train, Top 6 Railways in Asia, for luxury experience.<br><br>❤️ Hà Nội - Sài Gòn (30+ hrs): An epic cross-country journey! Enjoy diverse landscapes, from peaceful countryside to coastal views, all from the comfort of your seat.<br><br>Ready to see Vietnam by rail? Let’s plan your journey!</p>`,
      Like : 15,
      Time :"18 tháng 11"
    },
    {
      Avatar : "/image/avatar_footer.jpg",
      Name : "asiamystika",
      Type : "Video",
      Media : "/video/asiamystika.mp4",
      Content:`<p class="_ap3a _aaco _aacu _aacx _aad7 _aade" dir="auto">🌟 𝐓𝐚𝐬𝐭𝐞 𝐭𝐡𝐞 𝐑𝐞𝐚𝐥 𝐇𝐨𝐢 𝐀𝐧: 𝐅𝐫𝐨𝐦 𝐋𝐚𝐧𝐭𝐞𝐫𝐧𝐬 𝐭𝐨 𝐋𝐨𝐜𝐚𝐥 𝐃𝐞𝐥𝐢𝐠𝐡𝐭𝐬<br><br>Lanterns and ancient alleys are only part of Hoi An’s magic—its authentic dishes tell the rest of the story. Save this list of "must-try dishes" to explore Hoi An's hidden culinary gem!<br><br>1.  Kickstart your day with Banh Mi 🥖 <br>at Banh Mi Phuong (2B Phan Chu Trinh)<br><br>2.  Must not forget Hoi An’s specialties, Cao Lau &amp; Mi Quang 🍲 <br>at Mr. Hai Cao Lau (6A Truong Minh Luong)<br><br>3. Refresh with Herbal Drinks 🍹 <br>at Mot Hoi An (150 Tran Phu)<br><br>4.  Savor delicate White Rose Dumplings 🥟<br>at White Rose Restaurant (533 Hai Ba Trung)<br><br>5. Enjoy crispy Banh Xeo 🥟<br>at Ba Le Well Restaurant (45/51 Tran Hung Dao)<br><br>6. Indulge in Hoi An’s flavorful Chicken Rice (Com Ga) 🍛 <br>at Com Ga Ba Buoi (22 Phan Chu Trinh)<br><br>7. Try Fried Wontons 🍤 <br>at Morning Glory Restaurant (106 Nguyen Thai Hoc)<br><br>8. Sample Black Sesame Dessert (Che Me Den) 🥣 <br>at Che Xi Ma Ong Thieu (118 Nguyen Truong To)<br><br>9. End your journey with Sweet Corn Dessert (Che Bap) 🌽<br>at Che Bap Co Lien (03 Nguyen Hue)<br><br>Ready to add this experience to your Vietnam to-do list? Contact us for a thoroughly customized year-end trip!<br><br>---------------&ZeroWidthSpace;<br>Asia Mystika - Contact us for your personalized Vietnam travel experience&ZeroWidthSpace;<br>📞 Whatsapp: (+84) 866.22.7878&ZeroWidthSpace;<br>📩 Email: sales@asiamystika.com<br><a class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz  _aa9_ _a6hd" href="/explore/tags/asiamystika/" role="link" tabindex="0">#AsiaMystika</a> <a class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz  _aa9_ _a6hd" href="/explore/tags/vietnamtravel/" role="link" tabindex="0">#VietnamTravel</a> <a class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz  _aa9_ _a6hd" href="/explore/tags/yearendtravel/" role="link" tabindex="0">#YearEndTravel</a> <a class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz  _aa9_ _a6hd" href="/explore/tags/hoianfoodtour/" role="link" tabindex="0">#HoiAnFoodTour</a> <a class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz  _aa9_ _a6hd" href="/explore/tags/eatlikealocal/" role="link" tabindex="0">#EatLikeALocal</a></p>`,
      Like : 4,
      Time :"7 tháng 8"
    },
    {
      Avatar : "/image/avatar_footer.jpg",
      Name : "asiamystika",
      Type : "Image",
      Media : ["https://instagram.fhan14-2.fna.fbcdn.net/v/t39.30808-6/466613361_526164390393000_1528492346067391083_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDQ4eDIwNDguc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan14-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=oEtLh76KRLIQ7kNvgEM6dS4&_nc_gid=48ffca61c91348e7a5605c5e76012939&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzUwMDM5MTU3MTI5MDUwNDk0Mg%3D%3D.3-ccb7-5&oh=00_AYCyb91M741gczpCIJoCwLlm6IAhZ6M05Z5Z5Lbx5yv1ug&oe=67421820&_nc_sid=7a9f4b",
        "https://instagram.fhan14-2.fna.fbcdn.net/v/t39.30808-6/466417112_526164337059672_7988171838349914759_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDQ4eDIwNDguc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan14-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=6cVw7LUg6OoQ7kNvgEfEPpI&_nc_gid=48ffca61c91348e7a5605c5e76012939&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzUwMDM5MTU3MTAxMzY3NDEzMQ%3D%3D.3-ccb7-5&oh=00_AYDcYEmQvswqBozlTMiYdBJXe9tRLuZiOzxbbpL11KRz7g&oe=67420C02&_nc_sid=7a9f4b",
        "https://instagram.fhan14-5.fna.fbcdn.net/v/t39.30808-6/466562675_526164273726345_5379890080302782009_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDQ4eDIwNDguc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan14-5.fna.fbcdn.net&_nc_cat=109&_nc_ohc=-hLFNr4ZNZEQ7kNvgFfzWCA&_nc_gid=48ffca61c91348e7a5605c5e76012939&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzUwMDM5MTU3MDk4MDAwMzg1OQ%3D%3D.3-ccb7-5&oh=00_AYDCyX9lBHgO8jfQztjq42yEIWHvS5p_WNp8hw_M4R9ttQ&oe=67423B04&_nc_sid=7a9f4b",
        "https://instagram.fhan14-5.fna.fbcdn.net/v/t39.30808-6/466251056_526164357059670_8392601006567123_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDQ4eDIwNDguc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan14-5.fna.fbcdn.net&_nc_cat=106&_nc_ohc=9Bb__gVelxEQ7kNvgFmddMp&_nc_gid=48ffca61c91348e7a5605c5e76012939&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzUwMDM5MTU3MjIxMzI4Njk4OQ%3D%3D.3-ccb7-5&oh=00_AYBUG1FfNcUU-jSiFHvmV_6nKZ9ydjR96N6VWFZwLRDBJg&oe=67421800&_nc_sid=7a9f4b",
      "https://instagram.fhan14-5.fna.fbcdn.net/v/t39.30808-6/466103116_526164300393009_6631985481022684219_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDQ4eDIwNDguc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan14-5.fna.fbcdn.net&_nc_cat=109&_nc_ohc=5pXEglFJtsUQ7kNvgGjkZ7Z&_nc_gid=48ffca61c91348e7a5605c5e76012939&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzUwMDM5MTU3MDM1MDkyMjIxMQ%3D%3D.3-ccb7-5&oh=00_AYCxg25KwD5cmH5ut7VxRhd62xRYcqRBghUYfHfrI_AY8A&oe=67421141&_nc_sid=7a9f4b"],
      Content:`<p class="_ap3a _aaco _aacu _aacx _aad7 _aade" dir="auto">🌟 𝐓𝐚𝐬𝐭𝐞 𝐭𝐡𝐞 𝐑𝐞𝐚𝐥 𝐇𝐨𝐢 𝐀𝐧: 𝐅𝐫𝐨𝐦 𝐋𝐚𝐧𝐭𝐞𝐫𝐧𝐬 𝐭𝐨 𝐋𝐨𝐜𝐚𝐥 𝐃𝐞𝐥𝐢𝐠𝐡𝐭𝐬<br><br>Lanterns and ancient alleys are only part of Hoi An’s magic—its authentic dishes tell the rest of the story. Save this list of "must-try dishes" to explore Hoi An's hidden culinary gem!<br><br>1.  Kickstart your day with Banh Mi 🥖 <br>at Banh Mi Phuong (2B Phan Chu Trinh)<br><br>2.  Must not forget Hoi An’s specialties, Cao Lau &amp; Mi Quang 🍲 <br>at Mr. Hai Cao Lau (6A Truong Minh Luong)<br><br>3. Refresh with Herbal Drinks 🍹 <br>at Mot Hoi An (150 Tran Phu)<br><br>4.  Savor delicate White Rose Dumplings 🥟<br>at White Rose Restaurant (533 Hai Ba Trung)<br><br>5. Enjoy crispy Banh Xeo 🥟<br>at Ba Le Well Restaurant (45/51 Tran Hung Dao)<br><br>6. Indulge in Hoi An’s flavorful Chicken Rice (Com Ga) 🍛 <br>at Com Ga Ba Buoi (22 Phan Chu Trinh)<br><br>7. Try Fried Wontons 🍤 <br>at Morning Glory Restaurant (106 Nguyen Thai Hoc)<br><br>8. Sample Black Sesame Dessert (Che Me Den) 🥣 <br>at Che Xi Ma Ong Thieu (118 Nguyen Truong To)<br><br>9. End your journey with Sweet Corn Dessert (Che Bap) 🌽<br>at Che Bap Co Lien (03 Nguyen Hue)<br><br>Ready to add this experience to your Vietnam to-do list? Contact us for a thoroughly customized year-end trip!<br><br>---------------&ZeroWidthSpace;<br>Asia Mystika - Contact us for your personalized Vietnam travel experience&ZeroWidthSpace;<br>📞 Whatsapp: (+84) 866.22.7878&ZeroWidthSpace;<br>📩 Email: sales@asiamystika.com<br><a class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz  _aa9_ _a6hd" href="/explore/tags/asiamystika/" role="link" tabindex="0">#AsiaMystika</a> <a class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz  _aa9_ _a6hd" href="/explore/tags/vietnamtravel/" role="link" tabindex="0">#VietnamTravel</a> <a class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz  _aa9_ _a6hd" href="/explore/tags/yearendtravel/" role="link" tabindex="0">#YearEndTravel</a> <a class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz  _aa9_ _a6hd" href="/explore/tags/hoianfoodtour/" role="link" tabindex="0">#HoiAnFoodTour</a> <a class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz  _aa9_ _a6hd" href="/explore/tags/eatlikealocal/" role="link" tabindex="0">#EatLikeALocal</a></p>`,
      Like : 27,
      Time :"2 ngày trước"
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
      <button class="swiper-button swiper-button-next">
          <img class="arrow_slide" src="/image/arrow_slide.svg" />
      </button>
      <button class="swiper-button swiper-button-prev">
          <img class="arrow_slide" src="/image/arrow_slide.svg" />
      </button>
    </div>` :
     `
      <div class="article_body_media_video">
          <img class="play_icon" src='/image/play.svg' loading="lazy" />
          <video class='custom_video play-pause' muted loop playsinline>
            <source src="${item.Media}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="video-controls">
          <button class="mute-unmute control_item">
          <img class='mute_icon' src="/image/mute.svg" loading="lazy" alt="" />
          </button>
          
         
            <input type="range" class="seek-bar control_item custom-range" value="0" step="0.1">
            
            <span class="current-time time_number">0:00</span> <span class="duration time_number">0:00</span>
            
          
            </div>
      </div>
     `;
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
                          <img src="/image/notify_heal.svg" />
                        </button>
                        <button>
                          <img src="/image/comment.svg" />
                        </button>
                        <button>
                          <img src="/image/share.svg" />
                        </button>
                        <button>
                          <img src="/image/save.svg" />
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



const videos = document.querySelectorAll(".custom_video");
 // IntersectionObserver setup
 const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target;

      // Kiểm tra tỷ lệ hiển thị có đạt >= 70% không
      if (entry.intersectionRatio >= 0.7) {
        video.play(); // Phát video
      } else {
        video.pause(); // Tạm dừng video
      }
    });
  },
  {
    threshold: Array.from({ length: 11 }, (_, i) => i * 0.1), // Tạo các mức threshold từ 0.0 đến 1.0
  }
);

// Gắn observer cho mỗi video
videos.forEach((video) => {
  observer.observe(video);
});

  // Lấy tất cả các container video
  const videoContainers = document.querySelectorAll(".article_body_media_video");

  videoContainers.forEach((container) => {
    const video = container.querySelector(".custom_video");
    const muteUnmuteBtn = container.querySelector(".mute-unmute");
    const playPauseBtn = container.querySelector(".play-pause");
    const seekBar = container.querySelector(".seek-bar");
    const currentTimeSpan = container.querySelector(".current-time");
    const durationSpan = container.querySelector(".duration");
    const playIcon = container.querySelector('.play_icon');
    // Play/Pause button
    const playPauseHandler = async () => {
      if (video.paused) {
        try {
          await video.play();
          playIcon.style.display = 'none';
        } catch (error) {
          console.error('Lỗi khi phát video:', error);
        }
      } else {
        video.pause();
        playIcon.style.display = 'block';
      }
    };
    
    playPauseBtn.addEventListener("click", playPauseHandler);
    
    // Mute/Unmute button
    muteUnmuteBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      const currentSrc =  muteUnmuteBtn.querySelector('img').getAttribute('src');
      let updatedSrc = null;
      if(video.muted ){
         updatedSrc = currentSrc.replace('/unmute', '/mute');
      }else{
        updatedSrc = currentSrc.replace('/mute','/unmute');
      }
      muteUnmuteBtn.querySelector('img').setAttribute('src',updatedSrc);
    });

    // // Update Seek Bar and Current Time
    let animationFrameId;

    // Hàm cập nhật thanh tiến trình một cách mượt mà
    function updateSeekBar() {
      if (video.duration) {
        const progress = (video.currentTime / video.duration) * 100;
        seekBar.value = progress;
        currentTimeSpan.textContent = formatTime(video.currentTime);
      }
      if (!video.paused && !video.ended) {
        animationFrameId = requestAnimationFrame(updateSeekBar);
      }
    }
  
    // Bắt đầu cập nhật khi video phát
    video.addEventListener("play", () => {
      animationFrameId = requestAnimationFrame(updateSeekBar);
    });
  
    // Dừng cập nhật khi video tạm dừng hoặc kết thúc
    video.addEventListener("pause", () => {
      cancelAnimationFrame(animationFrameId);
    });
  
    video.addEventListener("ended", () => {
      cancelAnimationFrame(animationFrameId);
    });

    // // Seek Video
    seekBar.addEventListener("input", (e) => {
      const seekTime = (e.target.value / 100) * video.duration;
      video.currentTime = seekTime;
    });

    // // Display Video Duration
    video.addEventListener("loadedmetadata", () => {
      durationSpan.textContent = formatTime(video.duration);
    });

    // // Format Time (Helper Function)
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }
  });

// Lấy tất cả các phần tử có lớp 'swiper-container'
const swiperContainers = document.querySelectorAll('.article_body_slide');

// Duyệt qua từng phần tử và khởi tạo Swiper
swiperContainers.forEach((container, index) => {
    // Tạo các lớp CSS duy nhất cho pagination và navigation
    const paginationClass = `swiper-pagination-${index}`;
    const nextButtonClass = `swiper-button-next-${index}`;
    const prevButtonClass = `swiper-button-prev-${index}`;

    // Thêm các lớp CSS này vào các phần tử tương ứng
    container.querySelector('.swiper-pagination').classList.add(paginationClass);
    container.querySelector('.swiper-button-next').classList.add(nextButtonClass);
    container.querySelector('.swiper-button-prev').classList.add(prevButtonClass);

    // Khởi tạo Swiper
    new Swiper(container, {
        // loop: true, // Lặp lại các slide
        pagination: {
            el: `.${paginationClass}`,
            clickable: true,
        },
        navigation: {
            nextEl: `.${nextButtonClass}`,
            prevEl: `.${prevButtonClass}`,
        },
        // Thêm các tùy chọn khác nếu cần
    });
});

const posts = document.querySelectorAll('.Article');
const videoSources = [];

posts.forEach((post) =>{
  const video = post.querySelector('video');
  if(video){
    const source = video.querySelector('source');
    if(source && source.src){
      videoSources.push(source.src);
    }
  }
});




// Lấy hostname hiện tại
const currentHost = window.location.hostname;
// Kiểm tra nếu đang chạy trên domain GitHub
if (currentHost.includes("github.io")) {
    // Lấy tất cả thẻ img
    const imgElements = document.querySelectorAll("img");
    
    imgElements.forEach(img => {
        // Lấy src hiện tại của thẻ img
        const currentSrc = img.getAttribute("src");
         // Kiểm tra nếu src không bắt đầu bằng 'http://' hoặc 'https://'
        if (currentSrc && !currentSrc.match(/^https?:\/\//i)) {
          // Thêm '/Instagram' vào trước src nếu chưa có
          if (!currentSrc.startsWith("/Instagram")) {
              img.setAttribute("src", "/Instagram" + currentSrc);
          }
      }
    });
    const vidElements = document.querySelectorAll("video");
    vidElements.forEach(vid =>{
      const currentSrc = vid.querySelector('source').getAttribute("src");
      if(currentSrc && !currentSrc.match(/^https?:\/\//i)){
        if(!currentSrc.startsWith("/Instagram")){
          vid.querySelector('source').setAttribute("src","/Instagram" + currentSrc)
        }
      }
    });
}
});
