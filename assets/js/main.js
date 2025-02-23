// hero slick start
$('.heroSlick').slick({
  speed: 500,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  centerMode: false,
  infinite: false,
  arrows: true,
  dots: false,
  swipe: true,
  swipeToSlide: true,
  variableWidth: false,

  nextArrow: '.slick-next-hero',
  prevArrow: '.slick-prev-hero',

  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 1.3,
      centerMode: false,
    }

  }, {
    breakpoint: 800,
    settings: {
      slidesToShow: 1.3,
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1.1,
      slidesToScroll: 1,
    }
  }]
});
// hero slick end

// sermons slick start
$('.sermonsSlider').slick({
  speed: 500,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  infinite: false,
  arrows: true,
  dots: false,
  swipe: true,
  swipeToSlide: true,
  variableWidth: false,

  nextArrow: '.slick-next-sermons',
  prevArrow: '.slick-prev-sermons',

  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      centerMode: false,
    }

  }, {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1.2,
      slidesToScroll: 1,
      arrows: false,
    }
  }]
});
// sermons slick end
// aboutSlider slick start
$('.aboutSlider').slick({
  speed: 500,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  infinite: false,
  arrows: true,
  dots: false,
  swipe: true,
  swipeToSlide: true,
  variableWidth: false,

  nextArrow: '.slick-next-about',
  prevArrow: '.slick-prev-about',

  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      centerMode: false,
    }

  }, {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1.2,
      slidesToScroll: 1,
      arrows: false,
    }
  }]
});
// aboutSlider slick end
// ministriesSlider slick start
$('.ministriesSlider').slick({
  speed: 500,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  infinite: false,
  arrows: true,
  dots: false,
  swipe: true,
  swipeToSlide: true,
  variableWidth: false,

  nextArrow: '.slick-next-ministries',
  prevArrow: '.slick-prev-ministries',

  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      centerMode: false,
    }

  }, {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1.2,
      slidesToScroll: 1,
      arrows: false,
    }
  }]
});
// ministriesSlider slick end

// elder list
$(document).ready(function() {
  $('.teamHead li').click(function() {
    var target = $(this).data('target');
    $('#eldersList').hide();
    $('#daconsList').hide();
    $(target).show();
  });

  $('.backArrow').click(function() {
    $(this).parent().hide();
    $('#eldersList').show();
    $('#daconsList').show();
  });
});
// elder list

// input click and lable top
$(".formGroup .form-control").each(function () {
  const input = $(this);
  const label = input.siblings();

  input.on("focus", function () {
    label.addClass("active");
  });

  input.on("blur", function () {
    if (input.val() === "") {
      label.removeClass("active");
    }
  });
});
// input click and lable top

// onclick sub items open 
$(document).ready(function() {
  if(window.innerWidth < 1000){
      $(".hoverList").on('click', function(){
          // Corrected: Removed the dot before the class name
          console.log("clicked");
          $(this).find(".hoverUl").toggleClass("hoverUl_");
      });
  }
});
// onclick sub items open 

