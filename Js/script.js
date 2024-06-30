// SearchBar
let box = document.querySelector('.box');
let searchIconOne = document.querySelector('.searchIcon1');

    searchIconOne.addEventListener('click', ()=>{
        box.classList.add("open");
    })

let searchIconTwo = document.querySelector('.searchIcon2');
    searchIconTwo.addEventListener('click', ()=>{
        box.classList.remove("open")
    })

// SearchBar Ends

let mobileBox = document.querySelector('.smallbox');
let searchIconSm = document.querySelector('.searchIconSm');
    searchIconSm.addEventListener('click', ()=>{
        mobileBox.classList.add("smOpen");
    })

let searchIconMobile = document.querySelector('.searchIconMobile');
    searchIconMobile.addEventListener('click', ()=>{
        mobileBox.classList.remove("smOpen");
    })

// SearchBar Sm  ends



// Banner Section
$(function(){

    // home banner slider
    $(".bannerSlider").slick({
        arrows: false,
        dots: true,
        dotsClass: "bannerDots container",
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $(".bannerSliderSm").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $(".productSlider").slick({
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "#productLeftArrow",
        nextArrow: "#productRightArrow",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    })

    // Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    // Bootstrap tooltips Ends

    // Deal of the day
    // timer div
    $('.timer').countdown('2024/8/10', function(event) {
      $('.days').html(event.strftime('%D'));
      $('.hours').html(event.strftime('%H'));
      $('.min').html(event.strftime('%M'));
      $('.sec').html(event.strftime('%S'));
    });
    // timer div Ends
  
    // desktop device dey of deal
    $(".daydealSlider").slick({
      arrows: false,
      dots: true,
      dotsClass: "dealsSlick Container",
      infinite: true,
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 2000,
    })
    // desktop device dey of deal Ends
  
    // Mobile Device
    $(".dayDealMobileSlider").slick({
      arrows: false,
      dots: true,
      dotsClass: "dealsSlick Container",
      infinite: true,
      slidesToShow: 1,
      // slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    })
    // Mobile Device Ends
    // Deal of the day Ends

    // letest news 
    $(".letestNewsSlider").slick({
      arrows: false,
      dots: true,
      dotsClass: "lNewsSlick Container",
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })
    // letest news  Ends
    $('.counter').counterUp({
      delay: 10,
      time: 1500,
      offset: 70,
      beginAt: 100,
      formatter: function (n) {
        return n.replace(/,/g, '.');
      }
  });
    
})
// Banner Section Ends

// About Page 
$(".leaderSlider").slick({
  arrows: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: "#productLeftArrow",
  nextArrow: "#productRightArrow",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})




// customer content slider
$(".customerContentSlider").slick({
  arrows: false,
  dots: true,
  dotsClass: "customerReviewdots",
  autoplay: true,
  autoplaySpeed: 4000,
});
// customer content slider Ends

// Aetor's InstaGram
$(".aetorInstaSlider").slick({
  arrows: false,
  dots: true,
  dotsClass: "aetorInstadots",
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})
// Aetor's InstaGram Ends
// About Page  Ends

// Details Product Page
// Add to Cart Counter
let inc = document.querySelector(".inc")
let dec = document.querySelector(".dec")
let counterNumber = document.querySelector(".counterNumber")

inc?.addEventListener('click', function(){
  counterNumber.value = Number(counterNumber.value) + 1;
})


dec?.addEventListener('click', function(){
  if(Number(counterNumber.value) > 1){
    counterNumber.value = Number(counterNumber.value) - 1;
  }else{
    dec.style.cursor = "not-allowed";
  }

})
// Add to Cart Counter Ends
// Details Product Page Ends


  // Product Details page
  $(function(){
  // Product details/gellary Slider
    $(".productGallerySlider").slick({
      arrows: false,
      asNavFor: '.productGalleryThambnaleSlider',
    })
    $(".productGalleryThambnaleSlider").slick({
      arrows: false,
      slidesToShow: 5,
      Infinity: true,
      centerMode: true,
      centerPadding: '0px',
      asNavFor: '.productGallerySlider',
      focusOnSelect: true,
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: "#galleryProductLeftArrow",
      nextArrow: "#galleryProductRightArrow",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    })
  // Product details/gellary Slider Ends
  })

  // Product Details page Ends

  // blogClassic page
  $(".slider").slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
  // blogClassic page Ends