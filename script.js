const menu = document.querySelector('.icons');
const togge = document.querySelector('.extra-menu') ;
const navbar= document.querySelector('.h1');
const loginBar = document.querySelector('.login');
const sreachBar = document.querySelector('.sreach-bar');


menu.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    togge.classList.toggle('active');
    navbar.classList.toggle('active');
    loginBar.classList.toggle('active');
    sreachBar.classList.toggle('active');

})



const slides = document.querySelectorAll(".main-images");
let activeSlide = 0;
let autoScrollInterval;
let isScrolling = false;
let isAutoScrolling = false;
const idleTime = 5000;

const handleScroll = (event) => {
    // Xóa interval tự động cuộn slide nếu có
    clearInterval(autoScrollInterval);

    if (event.deltaY === 0) {
        // Không cuộn, bắt đầu đếm thời gian
        isScrolling = false;
        startAutoScroll();
    } else {
        // Đang cuộn, đánh dấu là đang cuộn
        isScrolling = true;

        // Kiểm tra hướng cuộn
        if (event.deltaY > 0) {
            // Cuộn xuống, chuyển slide tiếp theo nếu slide hiện tại không phải là ảnh cuối cùng
            if (activeSlide < slides.length - 1) {
                activeSlide += 1;
            }
        } else {
            // Cuộn lên, chuyển slide trước đó nếu slide hiện tại không phải là ảnh đầu tiên
            if (activeSlide > 0) {
                activeSlide -= 1;
            }
        }
        

        // Cập nhật trạng thái của các slide
        updateSlideStatus();
    }
};

const updateSlideStatus = () => {
    for (let i = 0; i < slides.length; i++) {
        if (i === activeSlide) {
            slides[i].dataset.status = "active";
            slides[i].style.opacity = 1;
        } else if (i === activeSlide + 1 || i === activeSlide - 1) {
            slides[i].dataset.status = "becoming-active";
            slides[i].style.opacity = 0;
        } else {
            slides[i].dataset.status = "inactive";
            slides[i].style.opacity = 0;
        }
    }
};

const startAutoScroll = () => {
    if (!isScrolling) {
        // Không có chuyển động chuột, bắt đầu tự động cuộn slide
        isAutoScrolling = true;
        autoScrollInterval = setInterval(() => {
            if (activeSlide < slides.length - 1) {
                activeSlide += 1;
                updateSlideStatus();
            } else {
                // Khi slide cuối cùng được hiển thị, dừng tự động cuộn
                clearInterval(autoScrollInterval);
                isAutoScrolling = false;
            }
        }, 5000);
    }
};

// Bắt đầu tự động cuộn slide khi trang được tải lên
startAutoScroll();

// Thêm sự kiện cuộn chuột
window.addEventListener("wheel", handleScroll);



//SREACH BAR MESSENGER
const userInput = document.getElementById('userInput');
const loginButton = document.getElementById('login-submit') ;


userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        alert('Comming soon.....')
    }
});

loginButton.addEventListener('click', function(){
    alert("comming soon..");
})




let slideIndex = 0;

showSlide(slideIndex);

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }

  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  slides[slideIndex].style.display = 'block';
}


