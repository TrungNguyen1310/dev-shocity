// ... existing code ...

// Thêm global error handler ở đầu file hoặc trước khi khởi tạo PIXI
window.onerror = function (message, source, lineno, colno, error) {
  // Kiểm tra xem có phải lỗi uid undefined không
  if (message.includes("Cannot read properties of undefined (reading 'uid')")) {
    console.error('Detected uid undefined error:', {
      message: message,
      source: source,
      lineno: lineno,
      colno: colno,
      error: error,
    });

    // Reload sau 1 giây
    setTimeout(() => {
      window.location.reload();
    }, 1000);

    return true;
  }

  // Các lỗi khác sẽ được xử lý bình thường
  return false;
};

// scroll to top Button
window.addEventListener('scroll', function () {
  var scrollToTopButton = document.querySelector('.scroll-to-top');
  // Kiểm tra nếu element tồn tại
  if (scrollToTopButton) {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var speed = 500;
      var href = this.getAttribute('href');
      var target = document.querySelector(href === '#' || href === '' ? 'html' : href);
      var position = target.offsetTop;

      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    });
  });
});

// click logo-href
document.querySelectorAll('.logo-href').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = './sho-city.html';
  });
});

document.querySelectorAll('.head-office-href').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = './head-office.html';
  });
});

// Thêm sự kiện lắng nghe orientation change
window.addEventListener('orientationchange', function (e) {
  e.preventDefault(); // Ngăn reload mặc định
});

//Turn off zoom
// document.addEventListener('gesturestart', function (e) {
//   e.preventDefault();
// });
