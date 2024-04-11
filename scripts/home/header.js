document.addEventListener('DOMContentLoaded', function() {
  // Set current date
  var currentDate = new Date();
  var formattedDate = currentDate.toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('current-date').textContent = formattedDate;

});

document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('overlay');
  const loginContainer = document.querySelector('.wrapper-login');

  // Xử lý sự kiện khi nhấn nút đăng nhập
  document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();
    overlay.style.display = 'block'; // Hiển thị overlay
    loginContainer.style.display = 'block'; // Hiển thị form đăng nhập
  });

  // Xử lý sự kiện khi nhấn nút đóng form đăng nhập
  document.getElementById('closeLoginFormButton').addEventListener('click', function(event) {
    event.preventDefault();
    overlay.style.display = 'none'; // Ẩn overlay
    loginContainer.style.display = 'none'; // Ẩn form đăng nhập
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


  function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var passwordToggle = document.querySelector('.toggle-password');
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggle.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
      passwordInput.type = "password";
      passwordToggle.innerHTML = '<i class="fas fa-eye"></i>';
    }
  }

  function closeLoginForm() {
    var overlay = document.getElementById('overlay');
    var loginContainer = document.querySelector('.wrapper-login');
    overlay.style.display = 'none';
    loginContainer.style.display = 'none';
  }