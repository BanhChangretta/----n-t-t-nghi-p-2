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

