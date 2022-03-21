$(function () {
  $('.slider__items').slick({
    dots: true,
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button class="slider-btn slider-btn__prev" aria-label="previous button"><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">< g clip- path="url(#clip0_1565_19366)" ><path d="M8.00741 15.3168L22.6269 0.697834C23.5569 -0.23259 25.0647 -0.23259 25.9942 0.697834C26.9238 1.62743 26.9238 3.13515 25.9942 4.06467L13.0582 17.0003L25.9938 29.9354C26.9234 30.8654 26.9234 32.3729 25.9938 33.3025C25.0642 34.2325 23.5565 34.2325 22.6265 33.3025L8.00703 18.6833C7.54223 18.2183 7.31009 17.6094 7.31009 17.0003C7.31009 16.3909 7.54268 15.7816 8.00741 15.3168Z" fill="#262626" /></ ><defs><clipPath id="clip0_1565_19366"><rect width="34" height="34" fill="white" transform="translate(34 34) rotate(-180)" /></clipPath></defs></svg ></button>',
    nextArrow: '<button class="slider-btn slider-btn__next" aria-label="next button"><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">< g clip- path="url(#clip0_1565_19362)" ><path d="M25.9926 15.3168L11.3731 0.697834C10.4431 -0.23259 8.93532 -0.23259 8.00579 0.697834C7.07619 1.62743 7.07619 3.13515 8.00579 4.06467L20.9418 17.0003L8.00617 29.9354C7.07657 30.8654 7.07657 32.3729 8.00617 33.3025C8.93577 34.2325 10.4435 34.2325 11.3735 33.3025L25.993 18.6833C26.4578 18.2183 26.6899 17.6094 26.6899 17.0003C26.6899 16.3909 26.4573 15.7816 25.9926 15.3168Z" fill="#262626" /></ ><defs><clipPath id="clip0_1565_19362"><rect width="34" height="34" fill="white" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 34)" /></clipPath></defs></svg ></button>',
  });

  $('.groups__items, .offer__items, .partners__items, .rating__items, .blog__items').slick({
    // slidesToShow: 3,
    arrows: true,
    variableWidth: true,
    prevArrow: '<button class="slider-btn slider-btn__prev" aria-label="previous button"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">< g clip- path="url(#clip0_2866_9427)" ><path d="M2.82752 5.40594L7.98735 0.246294C8.31557 -0.0820914 8.84774 -0.0820914 9.17581 0.246294C9.5039 0.574387 9.5039 1.10652 9.17581 1.43459L4.61016 6.00009L9.17567 10.5654C9.50377 10.8937 9.50377 11.4257 9.17567 11.7538C8.84758 12.0821 8.31544 12.0821 7.98721 11.7538L2.82739 6.5941C2.66334 6.42998 2.58141 6.2151 2.58141 6.00011C2.58141 5.78502 2.6635 5.56999 2.82752 5.40594Z" fill="#262626" /></ ><defs><clipPath id="clip0_2866_9427"><rect width="12" height="12" fill="white" transform="translate(12 12) rotate(-180)" /></clipPath></defs></svg ></button>',
    nextArrow: '<button class="slider-btn slider-btn__next" aria-label="next button"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">< g clip- path="url(#clip0_2866_9432)" ><path d="M9.17248 6.59406L4.01265 11.7537C3.68443 12.0821 3.15226 12.0821 2.82419 11.7537C2.4961 11.4256 2.4961 10.8935 2.82419 10.5654L7.38984 5.99991L2.82433 1.43457C2.49623 1.10635 2.49623 0.574263 2.82433 0.24617C3.15242 -0.0820564 3.68456 -0.0820563 4.01279 0.24617L9.17261 5.4059C9.33666 5.57002 9.41859 5.7849 9.41859 5.99989C9.41859 6.21498 9.3365 6.43001 9.17248 6.59406Z" fill="#262626" /></ ><defs><clipPath id="clip0_2866_9432"><rect width="12" height="12" fill="white" /></clipPath></defs></svg ></button>',
  });
});