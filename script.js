// JavaScript for TrueGrain Refinishing Site

// Swiper sliders initialization (if Swiper library is loaded)
if (typeof Swiper !== 'undefined') {
    // Hero image slider
    var heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false }
    });
    // Testimonial slider
    var testimonialSwiper = new Swiper('.testimonial-swiper', {
        loop: true,
        autoplay: { delay: 8000, disableOnInteraction: false }
    });
}

// Live preview for quote form photo upload
var photoInput = document.getElementById('q-photo');
if (photoInput) {
    photoInput.addEventListener('change', function() {
        var previewImg = document.getElementById('photoPreviewImg');
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                previewImg.src = e.target.result;
                previewImg.style.display = 'block';
            };
            reader.readAsDataURL(this.files[0]);
        }
    });
}

// Before/After slider range functionality
var sliderRange = document.getElementById('sliderRange');
var afterImageContainer = document.getElementById('afterImageContainer');
if (sliderRange && afterImageContainer) {
    sliderRange.addEventListener('input', function() {
        afterImageContainer.style.width = this.value + '%';
    });
}

// Popup handling (timed and exit-intent)
function showPopup(id) {
    var popup = document.getElementById(id);
    if (popup) popup.style.display = 'flex';
}
function hidePopup(id) {
    var popup = document.getElementById(id);
    if (popup) popup.style.display = 'none';
}
// Show timed popup after 30s
setTimeout(function() { showPopup('popupTimed'); }, 30000);
// Show exit-intent popup on mouse leave (only once)
var exitShown = false;
document.addEventListener('mouseleave', function(e) {
    if (e.clientY < 0 && !exitShown) {
        showPopup('popupExit');
        exitShown = true;
    }
});
// Close popups on close button click
document.querySelectorAll('.popup-close').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var popup = btn.closest('.popup');
        if (popup) popup.style.display = 'none';
    });
});

// Sticky CTA banner close button
var stickyClose = document.querySelector('.sticky-close');
if (stickyClose) {
    stickyClose.addEventListener('click', function() {
        var sticky = document.querySelector('.sticky-cta');
        if (sticky) sticky.style.display = 'none';
    });
}
