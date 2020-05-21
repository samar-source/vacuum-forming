//Автоскроллинг до определенного блока
// $('.menu').on('click','.link-scroll', function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    // event.preventDefault();

    //забираем идентификатор бока с атрибута href
    // var id  = $(this).attr('href');

    //узнаем высоту от меню до блока на который ссылается якорь 
    // var top = $(id).offset().top - $('.menu').height();
     
    //анимируем переход на расстояние - top за 800 мс
    // $('body,html').animate({scrollTop: top}, 800);

		//закрывается мобильное меню нажатием на ссылку меню
			// if ($('.mobile-menu__container').css('height','100%')) {
			// 	$('.mobile-menu__container').css('height','0');
			// }else {
			// 	$('.mobile-menu__container').css('height','100%');
			// }

	$('.menu__link').click(function() {
		var target = $(this).attr('href');
		var navHeight = $('.menu').outerHeight();
		$('html, body').animate({scrollTop: $(target).offset().top - navHeight}, 800);
		if (window.innerWidth <= 768) {
				$('.mobile-menu__container').slideToggle(800);
				$('.mobile-menu__container').css(
				{
					'display':'none'
				});

				$('.burger').addClass('burger_active');
				$('.burger').removeClass('burger_active');
		}
		return false;
	});

	// Menu icon
	if (window.innerWidth <= 768) {
		document.querySelector('.burger').onclick = function(){
			document.querySelector('.burger').classList.toggle('burger_active');
		}

		$('.burger').click(function() {
			$('.mobile-menu__container').slideToggle(800);
			$('.mobile-menu__container').css(
			{
				'display':'block'
			});
		});
	}
// });

// OwlCarousel2. Слайдер. Портфолио
$(document).ready(function(){
	$('.portfolio__slider').owlCarousel({
		items: 3,
		slideBy: 3,
		margin: 6,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
    nav: false,
    dots: true,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause:  true,
		autoplaySpeed: 500,
		responsive:{ 
        0:{
		        items: 1,
		        dots: false,
		        // nav: true,
		        // navText: [" ", " "],
		        autoplay: true,
		        smartSpeed: 1500,
		        autoplayTimeout: 3500,
		        touchDrag: true 
          },
        600:{
            center: false,
            dots: false,
            items:2,
            touchDrag:true
        },
        768:{
            items:3
        }
      }
	});
}); 

// OwlCarousel2. Слайдер. Партнеры
$(document).ready(function(){
	$('.partners__slider').owlCarousel({
		loop: true,
		margin: 12,
		mouseDrag: true,
		touchDrag: true,
		slideBy: 6,
    nav: false,
    dots: false,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause:  true,
		responsive:{
        0:{
		        items: 2
          },
        600:{
            items:4
        },
        768:{
            items:5
        },
        992:{
            items:6
        }
      }
	});
});

$(document).ready(function(){
    $(window).on('resize', function(){
     	if($(window).width() <= 600) {
		  	var height = $('.advantage-text').height()+50;
		    $('.advantage__item').css('margin-bottom',height);
		    // console.log(height);
			}	
    }).trigger('resize');
});

// Подключение OwlCarousel2 к меню сервиса только при разрешении меньше 768px
$(document).ready(function(){
  $(window).on('resize', function(){
    if($(window).width() <= 768) {
      $('.services__menu-slider').addClass('owl-carousel');
      $('.menu__link_violet').addClass('link_active');
    }
    else {
      $('.services__menu-slider').removeClass('owl-carousel');
    }
  }).trigger('resize');
});

// OwlCarousel2. Слайдер. Меню сервиса
$(document).ready(function(){
	$('.services__menu-slider.owl-carousel').owlCarousel({
    items: 1,
    loop: false,
		margin: 0,
		mouseDrag: true,
		touchDrag: true,
    nav: true,
    dots: false,
		autoplay: false
	});
});

//Подгрузка контента по сервису
function changeBox(winLink) {
	var servicesLink = document.querySelectorAll('.menu__link_violet');
  var servicesText = document.querySelectorAll('.information__text');

  for (var i = 0; i < servicesLink.length; i++) {
  	if (servicesLink[i].id == winLink) {
  		servicesLink[i].classList.add('link_active');
    	servicesText[i].style.display = 'block';
    } else {
    	servicesLink[i].classList.remove('link_active');
    	servicesText[i].style.display = 'none';
    }
  }
}

// Скроллинг наверх
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
				$('.scrollup').fadeOut();
			}
	});	 
	$('.scrollup').click(function(){
		$('html, body').animate({ scrollTop: 0 }, 600);
		return false;
	});
});

// Lightbox2. Увеличение изображения по клику
$(document).ready(function(){
	lightbox.option({
		'alwaysShowNavOnTouchDevices': true,
		'disableScrolling': true,
		'fadeDuration': 200,
		'fitImagesInViewport': true,
	  'resizeDuration': 200,
	  'wrapAround': true
	});
});