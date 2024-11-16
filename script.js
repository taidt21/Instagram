
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById('myForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của form
      
        var formData = new FormData(e.target); // Tạo FormData từ form
      var api = "https://script.google.com/macros/s/AKfycbw6K_iC8ugCximtvi_KNmCDvp44v4weyrHZXg002VW-EMmfsyLd1O9yFwvgE0xG_dCwLg/exec";
        fetch(api, {
          method: 'POST',
          body: formData, // Gửi FormData trực tiếp
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Phản hồi từ server:', data);
            if (data.status === 'success') {
              alert('Đã gửi dữ liệu thành công!');
              e.target.reset();
            } else {
              alert('Có lỗi xảy ra: ' + data.message);
            }
          })
          .catch((error) => {
            console.error('Lỗi:', error);
            alert('Có lỗi xảy ra khi gửi dữ liệu.');
          });
      });
      
});