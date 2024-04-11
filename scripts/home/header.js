document.addEventListener('DOMContentLoaded', function() {
  // Set current date
  var currentDate = new Date();
  var formattedDate = currentDate.toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('current-date').textContent = formattedDate;

  // Example login/logout functionality
  var isLoggedIn = false;
  var loginBtn = document.getElementById('login-btn');
  loginBtn.addEventListener('click', function() {
      isLoggedIn = !isLoggedIn;
      if (isLoggedIn) {
          loginBtn.textContent = "Đăng xuất";
          // Perform login actions
      } else {
          loginBtn.textContent = "Đăng nhập";
          // Perform logout actions
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Lấy thông tin vị trí, ngày tháng, nhiệt độ và thời tiết từ API (sử dụng OpenWeatherMap)
  const apiKey = 'd7373b6ccc231d62d81c1baa8751254f'; // Thay YOUR_API_KEY bằng API key của bạn
  const city = 'Hanoi';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=vi`; // Thêm tham số 'lang=vi' để lấy thông tin thời tiết bằng tiếng Việt

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;
      const weatherInfoElement = document.getElementById('weather-info');
      weatherInfoElement.textContent = `${temperature}°C, ${weatherDescription}`;
    })
    .catch(error => console.error('Lỗi khi lấy thông tin thời tiết:', error));
});


window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    var content = document.getElementById('content');
    
    if (window.scrollY > 0) {
        menu.classList.add('fixed');
        content.style.paddingTop = menu.offsetHeight + 'px'; // Đảm bảo nội dung không bị che bởi menu
    } else {
        menu.classList.remove('fixed');
        content.style.paddingTop = '0';
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu li');
  
    menuItems.forEach(function(item) {
      item.addEventListener('mouseenter', function() {
        this.classList.add('active');
      });
  
      item.addEventListener('mouseleave', function() {
        this.classList.remove('active');
      });
    });
  });
