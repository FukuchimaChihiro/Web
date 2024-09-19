
        const swiperEl = document.querySelector('swiper-container');
    
        const params = {
            centeredSlides: false,
            slidesPerView: 1,
            slidesPerGroup: 1,
            grabCursor: true,
            keyboard: {
                enabled: true,
            },
            navigation: true,
            pagination: {
                clickable: true,
            },
            breakpoints: {
              // 992px以上の場合
              992: {
                slidesPerView: 2
              }
            },
            speed: 1000,
            loop: true,
            autoplay: {
              delay: 3000,
            },
            scrollbar: true,
        };
    
        Object.assign(swiperEl, params)
    
        swiperEl.initialize();

