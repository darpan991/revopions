var THEMEMASCOT = {};
(function ($) {

	"use strict";

	/* ---------------------------------------------------------------------- */
	/* --------------------------- Start Demo Switcher  --------------------- */
	/* ---------------------------------------------------------------------- */
	//   var showSwitcher = false;
	//   var $body = $('body');
	//   var $style_switcher = $('#style-switcher');
	//   if( !$style_switcher.length && showSwitcher ) {
	//       $.ajax({
	//           url: "color-switcher/style-switcher.html",
	//           success: function (data) { $body.append(data); },
	//           dataType: 'html'
	//       });
	//   }
	/* ---------------------------------------------------------------------- */
	/* ----------------------------- En Demo Switcher  ---------------------- */
	/* ---------------------------------------------------------------------- */


	//   THEMEMASCOT.isRTL = {
	//     check: function() {
	//       if( $( "html" ).attr("dir") === "rtl" ) {
	//         return true;
	//       } else {
	//         return false;
	//       }
	//     }
	//   };

	//   THEMEMASCOT.isLTR = {
	//     check: function() {
	//       if( $( "html" ).attr("dir") !== "rtl" ) {
	//         return true;
	//       } else {
	//         return false;
	//       }
	//     }
	//   };


	//Hide Loading Box (Preloader)
	function loader() {
		$(window).on('load', function () {
			// Animate loader off screen
			$(".preloader").addClass('loaded');
			$(".preloader").delay(600).fadeOut();
		});
	}

	loader();

	// Call headerStyle on scroll
	$(window).on('scroll', function () {
		headerStyle();
	});

	// Also call on page load to handle reload
	$(document).ready(function () {
		headerStyle();
	});


	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($('.main-header').length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header-style-one');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				sticky_header.addClass("fixed-header animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				sticky_header.removeClass("fixed-header animated slideInDown");
				scrollLink.fadeOut(300);
			}
			if (windowpos > 1) {
				siteHeader.addClass("fixed-header");
			} else {
				siteHeader.removeClass("fixed-header");
			}
		}
	}
	headerStyle();

	// Header hide on scroll down, show on scroll up (optional)

	if ($(window).width() > 991) {
		if ($(window).width() > 768) {
			$('.parallaxie').parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

	// hover animation
	const $items = $(".case-block-four");

	// set second one active by default
	$items.eq(1).addClass("active");

	$items.hover(function () {
	$items.removeClass("active");
	$(this).addClass("active");
	});

	//Submenu Dropdown Toggle
	if ($('.main-header li.dropdown ul').length) {
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
	}

	//Mobile Nav Hide Show
	if ($('.mobile-menu').length) {

		var mobileMenuContent = $('.main-header .main-menu .navigation').html();

		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});

		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function () {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});

	}

	//Header Search
	if ($(".search-btn").length) {
		$(".search-btn").on("click", function () {
			$(".main-header").addClass("moblie-search-active");
		});
		$(".close-search, .search-back-drop").on("click", function () {
			$(".main-header").removeClass("moblie-search-active");
		});
	}

	//Fact Counter + Text Count
	if ($(".count-box").length) {
		$(".count-box").appear(
			function () {
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);

				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text(),
					}).animate(
						{
							countNum: n,
						},
						{
							duration: r,
							easing: "linear",
							step: function () {
								$t.find(".count-text").text(Math.floor(this.countNum));
							},
							complete: function () {
								$t.find(".count-text").text(this.countNum);
							},
						}
					);
				}
			},
			{ accY: 0 }
		);
	}


	//Price Range Slider
	if ($(".price-range-slider").length) {
		$(".price-range-slider").slider({
			range: true,
			min: 10,
			max: 99,
			values: [10, 60],
			slide: function (event, ui) {
				$("input.property-amount").val(ui.values[0] + " - " + ui.values[1]);
			},
		});

		$("input.property-amount").val(
			$(".price-range-slider").slider("values", 0) +
			" - $" +
			$(".price-range-slider").slider("values", 1)
		);
	}

	 /* ================================
      Hover Active Js Start
    ================================ */

    $(".team-award-block-three ").hover(
		// Function to run when the mouse enters the element
		function () {
			// Remove the "active" class from all elements
			$(".team-award-block-three ").removeClass("active");
			// Add the "active" class to the currently hovered element
			$(this).addClass("active");
		}
	);


	//product bxslider
	if ($(".product-details .bxslider").length) {
		$(".product-details .bxslider").bxSlider({
			nextSelector: ".product-details #slider-next",
			prevSelector: ".product-details #slider-prev",
			nextText: '<i class="fa fa-angle-right"></i>',
			prevText: '<i class="fa fa-angle-left"></i>',
			mode: "fade",
			auto: "true",
			speed: "700",
			pagerCustom: ".product-details .slider-pager .thumb-box",
		});
	}
	//Tabs Box

	//Quantity box
	$(".quantity-box .add").on("click", function () {
		if ($(this).prev().val() < 999) {
			$(this)
				.prev()
				.val(+$(this).prev().val() + 1);
		}
	});
	$(".quantity-box .sub").on("click", function () {
		if ($(this).next().val() > 1) {
			if ($(this).next().val() > 1)
				$(this)
					.next()
					.val(+$(this).next().val() - 1);
		}
	});

	$(".feature-block-one").on("mouseenter", function () {
		$(".feature-block-one").removeClass("active");
		$(this).addClass("active");
	});

	// Horizontal accordion js area start here ***
	$(".hzAccordion__item").on("click", function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
	// Horizontal accordion js area end here ***


	$(function () {
		const $featureList = $(".feature-list-items");
		const $img = $("#rotatable-image");

		if (!$featureList.length || !$img.length) return;

		let currentRotation = 0;
		let lastIndex = null;

		$featureList.on("mouseenter", "li .title", function () {
			const $titles = $featureList.find("li .title");
			const index = $titles.index(this);

			if (lastIndex === null) {
				currentRotation += 45;
				$img.css({
					transition: "transform 0.4s ease-in-out",
					transform: `rotate(${currentRotation}deg)`
				});
				lastIndex = index;
				return;
			}

			if (index > lastIndex) {
            currentRotation += 45; // moving down
          } else if (index < lastIndex) {
            currentRotation -= 45; // moving up
          }

          $img.css({
          	transition: "transform 0.4s ease-in-out",
          	transform: `rotate(${currentRotation}deg)`
          });

          lastIndex = index;
        });
	});



	 /* ================================
       Project Anim Js Start
    ================================ */

	// Project Image Slider
	if ($('.project-image-slider').length) {
		var swiper = new Swiper(".project-image-slider", {
			slidesPerView: 2,
			spaceBetween: 30,
			speed: 600,
			loop: true,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 2,
				},
				1023: {
					slidesPerView: 2,
				},
			},
		});
	}

	 /* ================================
           Image Move scale Js Start
        ================================ */
        const $section = $('.hero-section1');
        const $target = $('.tilt_scale');

        if ($section.length && $target.length) {
            let requestId;

            $section.on('mousemove', function(e) {
                if (requestId) {
                    cancelAnimationFrame(requestId);
                }

                requestId = requestAnimationFrame(() => {
                    const offset = $section.offset();
                    const width = $section.outerWidth();
                    const height = $section.outerHeight();

                    const x = e.pageX - offset.left;
                    const y = e.pageY - offset.top;

                    const rotateY = ((x / width) - 0.5) * 20;
                    const rotateX = ((y / height) - 0.5) * -20;

                    $target.css({
                        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
                    });
                });
            });

            $section.on('mouseleave', function() {
                if (requestId) {
                    cancelAnimationFrame(requestId);
                }
                $target.css({
                    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
                });
            });
        }

	// hover reveal start
	const hoverItem = document.querySelectorAll(".bw-hover-image");

	function moveImage(e, hoverItem, index) {
		const item = hoverItem.getBoundingClientRect();
		const x = e.clientX - item.x;
		const y = e.clientY - item.y;
		if (hoverItem.children[index]) {
			hoverItem.children[index].style.transform = `translate(${x}px, ${y}px)`;
		}
	}
	hoverItem.forEach((item, i) => {
		item.addEventListener("mousemove", (e) => {
			setInterval(moveImage(e, item, 1), 50);
		});
	});
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});






	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	//Brand-slider
	if ($('.brand-slider').length > 0) {
		const brandSlider = new Swiper(".brand-slider", {
			spaceBetween: 25,
			speed: 2000,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".dot",
				clickable: true,
			},
			breakpoints: {
			
				1399: {
					slidesPerView: 5,
				},
				1199: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 3,
				},
				575: {
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 1.8,
				},
			},
		});
	}

	if ($('.brand-slider2').length > 0) {
		const brandSlider2 = new Swiper(".brand-slider2", {
			spaceBetween: 25,
			speed: 2000,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".dot",
				clickable: true,
			},
			breakpoints: {
			
				1399: {
					slidesPerView: 5,
				},
				1199: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 1.4,
				},
			},
		});
	}

	if ($('.project-slider-5').length > 0) {
		const projectSlider5 = new Swiper(".project-slider-5", {
			spaceBetween: 30,
			speed: 2000,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			
			breakpoints: {
				1199: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 1.8,
				},
				0: {
					slidesPerView: 1.1,
				},
			},
		});
	}

	//testimonial-carousel One
	if ($('.testimonial-swiper-one').length) {
		var swiper = new Swiper(".testimonial-swiper-one", {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			speed: 2000,
      		freeMode: true,
			navigation: {
				nextEl: ".testimonial-arry-next",
				prevEl: ".testimonial-arry-prev",
			},
		});
	}

	//service-slider
	if ($('.service-slide').length > 0) {
		const serviceSlider = new Swiper(".service-slide", {
			spaceBetween: 25,
			speed: 2000,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".dot",
				clickable: true,
			},
			breakpoints: {
				1599: {
					slidesPerView: 1.9,
				},
				1499: {
					slidesPerView: 1.7,
				},
				1399: {
					slidesPerView: 1.6,
				},
				1299: {
					slidesPerView: 1.5,
				},
				1199: {
					slidesPerView: 1.4,
				},
				991: {
					slidesPerView: 1.3,
				},
				767: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}

	//testimonial-slider
	if ($('.testimonial-slider').length > 0) {
		const testimonialSlider = new Swiper(".testimonial-slider", {
			loop: true,
			autoplay: true,
			spaceBetween: 30,
			speed: 1000,
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
		});
	}


	//testimonial-slider-two
	if ($('.testimonial-slider-two').length > 0) {
		const testimonialSliderTwo = new Swiper(".testimonial-slider-two", {
			loop: true,
			autoplay: true,
			spaceBetween: 24,
			speed: 2000,
			autoplay: {
				delay: 1000,
			},
			pagination: {
				el: ".dot",
				clickable: true,
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				575: {
					slidesPerView: 1,
				},
				767: {
					slidesPerView: 1.4,
				},
				991: {
					slidesPerView: 2,
				},
				1199: {
					slidesPerView: 1.5,
				},
				1399: {
					slidesPerView: 2,
				},
				1499: {
					slidesPerView: 2.2,
				},
				1599: {
					slidesPerView: 2.3,
				},
				1699: {
					slidesPerView: 2.5,
				},
				1799: {
					slidesPerView: 2.8,
				},
			},
		});
	}
	
	//Service Hover image
	document.addEventListener("DOMContentLoaded", function() {
		const serviceLinks = document.querySelectorAll(".service-block-three");
		const imageBoxes = document.querySelectorAll(".service-hover-image .image-box");

		if (!serviceLinks.length || !imageBoxes.length) return;

		// Initialize first item as active
		serviceLinks[0].classList.add("active");

		serviceLinks.forEach(link => {
			link.addEventListener("mouseenter", function() {
			const index = this.getAttribute("data-index");
			imageBoxes.forEach(box => box.classList.remove("active"));
			const activeBox = document.querySelector(`.service-hover-image .image-box[data-index="${index}"]`);
			if (activeBox) {
				activeBox.classList.add("active");
			}

			serviceLinks.forEach(l => l.classList.remove("active"));
			this.classList.add("active");
			});
		});
	});


	// Thumbs Slider
	const testimonialThumbs = new Swiper('.testimonial-thumbs', {
		spaceBetween: 10,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesProgress: true,
		centeredSlides: true,
		speed: 2000,
		loop: true,
		autoplay: {
			delay: 1000,
			disableOnInteraction: false,
		},
		navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
	});

	//testimonial-slider
	if ($('.testimonial-slider-three').length > 0) {
		const testimonialSliderThree = new Swiper(".testimonial-slider-three", {
			loop: true,
			autoplay: true,
			spaceBetween: 30,
			speed: 2000,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
			pagination: {
				el: ".dot",
				clickable: true,
			},
			thumbs: {
				swiper: testimonialThumbs,
			}
		});
	}



	$('.ai-hero-slider-1').slick({
		speed: 10000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
		slidesPerRow: 1,
		slidesToShow: 4,
		arrows: false,
		buttons: false,
		vertical: true,
		verticalSwiping: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				}
			},
			{
				breakpoint: 992,
				settings: {
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
				}
			}
		]
	});
	// Swiper marqee area end here ***


	function is_rtl() {
		return $('html').attr('dir') == 'rtl' ? true : false;
	}


	//MixItup Gallery
	if ($(".filter-list").length) {
		$(".filter-list").mixItUp({});
	}

	//Jquery Knob animation  // Pie Chart Animation
	if ($(".dial").length) {
		$(".dial").appear(
			function () {
				var elm = $(this);
				var color = elm.attr("data-fgColor");
				var perc = elm.attr("value");

				elm.knob({
					value: 0,
					min: 0,
					max: 100,
					skin: "tron",
					readOnly: true,
					thickness: 0.15,
					dynamicDraw: true,
					displayInput: false,
				});
				$({ value: 0 }).animate(
					{ value: perc },
					{
						duration: 2000,
						easing: "swing",
						progress: function () {
							elm.val(Math.ceil(this.value)).trigger("change");
						},
					}
				);
				//circular progress bar color
				$(this).append(function () {
					// elm.parent().parent().find('.circular-bar-content').css('color',color);
					//elm.parent().parent().find('.circular-bar-content .txt').text(perc);
				});
			},
			{ accY: 20 }
		);
	}

	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	if ($(".tabs-box").length) {
		$(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
			e.preventDefault();
			var target = $($(this).attr("data-tab"));

			if ($(target).is(":visible")) {
				return false;
			} else {
				target
					.parents(".tabs-box")
					.find(".tab-buttons")
					.find(".tab-btn")
					.removeClass("active-btn");
				$(this).addClass("active-btn");
				target
					.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.fadeOut(0);
				target
					.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.removeClass("active-tab animated fadeIn");
				$(target).fadeIn(300);
				$(target).addClass("active-tab animated fadeIn");
			}
		});
	}

	// Scroll to a Specific Div
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 0);

		});
	}

	// Elements Animation
	if ($('.wow').length) {
		var wow = new WOW(
			{
				boxClass: 'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 0,          // distance to the element when triggering the animation (default is 0)
				mobile: false,       // trigger animations on mobile devices (default is true)
				live: true       // act on asynchronously loaded content (default is true)
			}
		);
		wow.init();
	}

	//Jquery Knob animation  // Pie Chart Animation
	if ($(".dial").length) {
		$(".dial").appear(
			function () {
				var elm = $(this);
				var color = elm.attr("data-fgColor");
				var perc = elm.attr("value");

				elm.knob({
					value: 0,
					min: 0,
					max: 100,
					skin: "tron",
					readOnly: true,
					thickness: 0.07,
					dynamicDraw: true,
					displayInput: false,
				});

				$({ value: 0 }).animate(
					{ value: perc },
					{
						duration: 2000,
						easing: "swing",
						progress: function () {
							elm.val(Math.ceil(this.value)).trigger("change");
						},
					}
				);

				//circular progress bar color
				$(this).append(function () {
					// elm.parent().parent().find('.circular-bar-content').css('color',color);
					//elm.parent().parent().find('.circular-bar-content .txt').text(perc);
				});
			},
			{ accY: 20 }
		);
	}

	if ($('.service-accordian-item .inner-box').length) {
		const $boxes = $('.service-accordian-item .inner-box');

		if ($boxes.length) {
			// Click logic
			$boxes.on('click', function () {
				$boxes.removeClass('active');
				$('.service-accordian-item .content-box').slideUp().removeClass('active');

				$(this).addClass('active');
				$(this).find('.content-box').slideDown().addClass('active');
			});
		}
	}

	

	$(document).ready(function () {
		$("select").niceSelect();
	});

	//>> Video Popup Start <<//
	$(".img-popup").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	$('.video-popup').magnificPopup({
		type: 'iframe',
		callbacks: {
		}
	});

	// count Bar
	if ($(".count-bar").length) {
		$(".count-bar").appear(
			function () {
				var el = $(this);
				var percent = el.data("percent");
				$(el).css("width", percent).addClass("counted");
			},
			{
				accY: -50,
			}
		);
	}


	(function () {
		function animateProgress(id, valueId, endValue, speed) {
			const progress = document.getElementById(id);
			const valueContainer = document.getElementById(valueId);

			if (!progress || !valueContainer) return;

			let currentValue = 0;

			function updateProgress() {
				currentValue++;
				if (currentValue > endValue) {
					currentValue = endValue;
				}
				valueContainer.textContent = `${currentValue}%`;
				progress.style.background = `conic-gradient(
					#C8F169 ${currentValue * 3.6}deg,
					#D4D4D4 ${currentValue * 3.6}deg
				)`;

				if (currentValue < endValue) {
					setTimeout(() => requestAnimationFrame(updateProgress), speed);
				}
			}

			requestAnimationFrame(updateProgress);
		}

		// Initialize progress bars only if their elements exist
		document.addEventListener("DOMContentLoaded", function () {
			if (document.getElementById('progress1') && document.getElementById('value1')) {
				animateProgress('progress1', 'value1', 95, 20);
			}
			if (document.getElementById('progress2') && document.getElementById('value2')) {
				animateProgress('progress2', 'value2', 85, 20);
			}
			if (document.getElementById('progress3') && document.getElementById('value3')) {
				animateProgress('progress3', 'value3', 85, 20);
			}
			if (document.getElementById('progress4') && document.getElementById('value4')) {
				animateProgress('progress4', 'value4', 85, 20);
			}
			if (document.getElementById('progress5') && document.getElementById('value5')) {
				animateProgress('progress5', 'value5', 85, 20);
			}
			if (document.getElementById('progress6') && document.getElementById('value6')) {
				animateProgress('progress6', 'value6', 85, 20);
			}
			if (document.getElementById('progress7') && document.getElementById('value7')) {
				animateProgress('progress7', 'value7', 85, 20);
			}
			if (document.getElementById('progress8') && document.getElementById('value8')) {
				animateProgress('progress8', 'value8', 85, 20);
			}
		});


	})();

	



})(window.jQuery);


    (function() {
      // --------------------------------------------------------------
      //  UNIQUE NAMESPACE: no collisions with any external code
      //  Variables & functions are isolated inside IIFE
      // --------------------------------------------------------------
      
      // ----- CUSTOMIZABLE LABELS (no conflict)
      const UNQ_LABELS = [
        'Digital', 'SEO', 'Display Ads', 'Google Ads',
        'Content Marketing', 'Social Media Ads', 'Analytics', 'Link Building'
      ];

      // ----- PHYSICS CONFIGURATION (unique naming)
      const UNQ_GRAVITY     = 0.045;
      const UNQ_FRICTION    = 0.999;
      const UNQ_WALL_BOUNCE = 0.70;
      const UNQ_COL_REST    = 0.85;
      const UNQ_FLOOR_DAMP  = 0.72;
      const UNQ_PADDING     = 14;
      const UNQ_PILL_H      = 40;
      const UNQ_RADIUS      = 20;
      const UNQ_FONT        = '600 13px "DM Sans", sans-serif';
      const UNQ_BG          = '#111111';
      const UNQ_BORDER_NORM = '#2a2a2a';
      const UNQ_BORDER_HOV  = '#F7E8C1';
      const UNQ_TEXT_COLOR  = '#F7E8C1';

      // DOM elements (unique IDs)
      let unqCanvas = null;
      let unqCtx = null;
      let unqGrabCanvas = null;
      let unqGrabCtx = null;    // not strictly needed but for consistency
      let unqWidth = 0, unqHeight = 0;
      
      // Data structures
      let unqBalls = [];
      let unqDraggingIndex = null;
      let unqDragOffsetX = 0, unqDragOffsetY = 0;
      let unqMouseX = -999, unqMouseY = -999;
      let unqHoveringIndex = -1;
      
      // for flick velocity on drag end
      let unqLastDragX = 0, unqLastDragY = 0;
      let unqLastDragTimestamp = 0;
      
      // Helper: measure text width based on current font
      function unqMeasureTextWidth(label) {
        if (!unqCtx) return 100;
        unqCtx.font = UNQ_FONT;
        const metrics = unqCtx.measureText(label);
        return metrics.width + 44;   // horizontal padding
      }
      
      // initialize balls with random positions (fall from top)
      function unqInitBalls() {
        if (!unqWidth || unqWidth < 100) return;
        const cols = 3;
        const startXBase = UNQ_PADDING + 8;
        const colStep = (unqWidth - UNQ_PADDING * 2) / cols;
        unqBalls = UNQ_LABELS.map((label, idx) => {
          const w = unqMeasureTextWidth(label);
          return {
            label: label,
            w: w,
            h: UNQ_PILL_H,
            x: startXBase + (idx % cols) * colStep,
            y: -UNQ_PILL_H * 1.8 - idx * 70,
            vx: (Math.random() - 0.5) * 1.2,
            vy: 0,
          };
        });
      }
      
      // resize handler: adapt canvas dimensions and reposition? keep relative positions but adjust if needed
      function unqResizeHandler() {
        const wrapElem = document.getElementById('unq_tagCanvasWrap');
        if (!wrapElem) return;
        unqWidth = wrapElem.clientWidth;
        unqHeight = wrapElem.clientHeight;
        if (unqCanvas) {
          unqCanvas.width = unqWidth;
          unqCanvas.height = unqHeight;
        }
        if (unqGrabCanvas) {
          unqGrabCanvas.width = unqWidth;
          unqGrabCanvas.height = unqHeight;
        }
        // re-measure widths because font rendering might slightly shift, and clamp positions
        if (unqBalls.length && unqCtx) {
          for (let b of unqBalls) {
            const newW = unqMeasureTextWidth(b.label);
            // keep original x but adjust if new width changes collision behavior – minor shift ok
            b.w = newW;
          }
          // clamp positions to new boundaries (avoid out-of-bounds)
          for (let b of unqBalls) {
            if (b.x + b.w > unqWidth - UNQ_PADDING) {
              b.x = Math.max(UNQ_PADDING, unqWidth - b.w - UNQ_PADDING);
            }
            if (b.x < UNQ_PADDING) b.x = UNQ_PADDING;
            if (b.y + b.h > unqHeight - UNQ_PADDING) {
              b.y = unqHeight - b.h - UNQ_PADDING;
            }
          }
        }
      }
      
      // draw rounded rectangle
      function unqRoundRect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
      }
      
      // draw single tag
      function unqDrawTag(ball, isHoverOrDrag) {
        if (!unqCtx) return;
        unqRoundRect(unqCtx, ball.x, ball.y, ball.w, ball.h, UNQ_RADIUS);
        unqCtx.fillStyle = UNQ_BG;
        unqCtx.fill();
        unqCtx.strokeStyle = isHoverOrDrag ? UNQ_BORDER_HOV : UNQ_BORDER_NORM;
        unqCtx.lineWidth = isHoverOrDrag ? 1.8 : 1;
        unqCtx.stroke();
        unqCtx.font = UNQ_FONT;
        unqCtx.fillStyle = UNQ_TEXT_COLOR;
        unqCtx.textAlign = 'center';
        unqCtx.textBaseline = 'middle';
        unqCtx.fillText(ball.label, ball.x + ball.w / 2, ball.y + ball.h / 2);
      }
      
      // collision response between two balls (axis-aligned rectangles)
      function unqCollideRect(a, b) {
        if (a.x + a.w <= b.x || b.x + b.w <= a.x) return false;
        if (a.y + a.h <= b.y || b.y + b.h <= a.y) return false;
        
        const overlapX = Math.min(a.x + a.w - b.x, b.x + b.w - a.x);
        const overlapY = Math.min(a.y + a.h - b.y, b.y + b.h - a.y);
        
        if (overlapX < overlapY) {
          const sep = overlapX / 2 + 0.5;
          if (a.x < b.x) { a.x -= sep; b.x += sep; }
          else { a.x += sep; b.x -= sep; }
          const avgVx = (a.vx + b.vx) / 2;
          a.vx = avgVx + (b.vx - avgVx) * UNQ_COL_REST;
          b.vx = avgVx + (a.vx - avgVx) * UNQ_COL_REST;
          a.vx += (Math.random() - 0.5) * 0.4;
          b.vx += (Math.random() - 0.5) * 0.4;
        } else {
          const sep = overlapY / 2 + 0.5;
          if (a.y < b.y) { a.y -= sep; b.y += sep; }
          else { a.y += sep; b.y -= sep; }
          const avgVy = (a.vy + b.vy) / 2;
          a.vy = avgVy + (b.vy - avgVy) * UNQ_COL_REST;
          b.vy = avgVy + (a.vy - avgVy) * UNQ_COL_REST;
          a.vy += (Math.random() - 0.5) * 0.3;
          b.vy += (Math.random() - 0.5) * 0.3;
        }
        return true;
      }
      
      // hit test point
      function unqHitTest(ball, mx, my) {
        return mx >= ball.x && mx <= ball.x + ball.w && my >= ball.y && my <= ball.y + ball.h;
      }
      
      // animation & physics loop
      function unqAnimationLoop() {
        if (!unqCtx || !unqCanvas || unqWidth === 0) {
          requestAnimationFrame(unqAnimationLoop);
          return;
        }
        
        unqCtx.clearRect(0, 0, unqWidth, unqHeight);
        
        // update hover index
        unqHoveringIndex = -1;
        for (let i = 0; i < unqBalls.length; i++) {
          if (unqHitTest(unqBalls[i], unqMouseX, unqMouseY)) {
            unqHoveringIndex = i;
            break;
          }
        }
        
        // apply physics for all non-dragging balls
        for (let i = 0; i < unqBalls.length; i++) {
          if (i === unqDraggingIndex) continue;
          const b = unqBalls[i];
          b.vy += UNQ_GRAVITY;
          b.vx *= UNQ_FRICTION;
          b.vy *= UNQ_FRICTION;
          b.x += b.vx;
          b.y += b.vy;
          
          // boundaries with bounce
          if (b.x < UNQ_PADDING) {
            b.x = UNQ_PADDING;
            b.vx = Math.abs(b.vx) * UNQ_WALL_BOUNCE;
          }
          if (b.x + b.w > unqWidth - UNQ_PADDING) {
            b.x = unqWidth - UNQ_PADDING - b.w;
            b.vx = -Math.abs(b.vx) * UNQ_WALL_BOUNCE;
          }
          if (b.y + b.h > unqHeight - UNQ_PADDING) {
            b.y = unqHeight - UNQ_PADDING - b.h;
            b.vy = -Math.abs(b.vy) * UNQ_FLOOR_DAMP;
            b.vx *= 0.97;
            if (Math.abs(b.vy) < 0.25) b.vy = 0;
          }
          if (b.y < -b.h * 4) {
            b.y = -b.h * 4;
            b.vy = 0.3;
          }
        }
        
        // collision detection (multiple passes for stability)
        for (let pass = 0; pass < 3; pass++) {
          for (let i = 0; i < unqBalls.length; i++) {
            for (let j = i + 1; j < unqBalls.length; j++) {
              if (i === unqDraggingIndex || j === unqDraggingIndex) continue;
              unqCollideRect(unqBalls[i], unqBalls[j]);
            }
          }
        }
        
        // draw all balls
        for (let i = 0; i < unqBalls.length; i++) {
          const isActive = (i === unqHoveringIndex || i === unqDraggingIndex);
          unqDrawTag(unqBalls[i], isActive);
        }
        
        // set cursor style on grab canvas
        if (unqGrabCanvas) {
          let cursorStyle = 'default';
          if (unqDraggingIndex !== null) cursorStyle = 'grabbing';
          else if (unqHoveringIndex !== -1) cursorStyle = 'grab';
          unqGrabCanvas.style.cursor = cursorStyle;
        }
        
        requestAnimationFrame(unqAnimationLoop);
      }
      
      // --- EVENT HANDLERS (with unique naming) ---
      function unqGetPointerPosition(e, canvasElem) {
        const rect = canvasElem.getBoundingClientRect();
        let clientX, clientY;
        if (e.touches) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else if (e.changedTouches) {
          clientX = e.changedTouches[0].clientX;
          clientY = e.changedTouches[0].clientY;
        } else {
          clientX = e.clientX;
          clientY = e.clientY;
        }
        return { x: clientX - rect.left, y: clientY - rect.top };
      }
      
      function unqOnPointerDown(e) {
        e.preventDefault?.();
        if (!unqGrabCanvas) return;
        const pos = unqGetPointerPosition(e, unqGrabCanvas);
        unqMouseX = pos.x;
        unqMouseY = pos.y;
        
        // find topmost ball (reverse order for natural feel)
        for (let i = unqBalls.length - 1; i >= 0; i--) {
          if (unqHitTest(unqBalls[i], unqMouseX, unqMouseY)) {
            unqDraggingIndex = i;
            unqDragOffsetX = unqMouseX - unqBalls[i].x;
            unqDragOffsetY = unqMouseY - unqBalls[i].y;
            // stop movement while dragging
            unqBalls[i].vx = 0;
            unqBalls[i].vy = 0;
            unqLastDragX = unqMouseX;
            unqLastDragY = unqMouseY;
            unqLastDragTimestamp = performance.now();
            break;
          }
        }
      }
      
      function unqOnPointerMove(e) {
        if (!unqGrabCanvas) return;
        const pos = unqGetPointerPosition(e, unqGrabCanvas);
        unqMouseX = pos.x;
        unqMouseY = pos.y;
        
        if (unqDraggingIndex !== null) {
          const ball = unqBalls[unqDraggingIndex];
          let newX = unqMouseX - unqDragOffsetX;
          let newY = unqMouseY - unqDragOffsetY;
          // clamp to keep within boundaries
          newX = Math.min(Math.max(newX, UNQ_PADDING), unqWidth - ball.w - UNQ_PADDING);
          newY = Math.min(Math.max(newY, UNQ_PADDING), unqHeight - ball.h - UNQ_PADDING);
          ball.x = newX;
          ball.y = newY;
          unqLastDragX = unqMouseX;
          unqLastDragY = unqMouseY;
          unqLastDragTimestamp = performance.now();
        }
        if (e.cancelable) e.preventDefault();
      }
      
      function unqOnPointerUp(e) {
        if (unqDraggingIndex !== null && unqBalls[unqDraggingIndex]) {
          const now = performance.now();
          const dt = Math.max(now - (unqLastDragTimestamp || now), 1) / 16;
          if (dt < 18 && unqLastDragX !== undefined && unqLastDragY !== undefined) {
            const pos = unqGetPointerPosition(e, unqGrabCanvas);
            const velX = (pos.x - unqLastDragX) / dt * 0.65;
            const velY = (pos.y - unqLastDragY) / dt * 0.65;
            unqBalls[unqDraggingIndex].vx = Math.min(Math.max(velX, -8), 8);
            unqBalls[unqDraggingIndex].vy = Math.min(Math.max(velY, -8), 8);
          }
          unqDraggingIndex = null;
        }
      }
      
      function unqOnPointerLeave() {
        unqMouseX = -999;
        unqMouseY = -999;
      }
      
      // attach event listeners to grab canvas
      function unqAttachEvents() {
        if (!unqGrabCanvas) return;
        unqGrabCanvas.addEventListener('mousedown', unqOnPointerDown);
        window.addEventListener('mousemove', unqOnPointerMove);
        window.addEventListener('mouseup', unqOnPointerUp);
        unqGrabCanvas.addEventListener('mouseleave', unqOnPointerLeave);
        
        // touch events
        unqGrabCanvas.addEventListener('touchstart', unqOnPointerDown, { passive: false });
        window.addEventListener('touchmove', unqOnPointerMove, { passive: false });
        window.addEventListener('touchend', unqOnPointerUp);
        window.addEventListener('touchcancel', unqOnPointerUp);
      }
      
      // resize observer or window event
      function unqBindResize() {
        window.addEventListener('resize', () => {
          unqResizeHandler();
          // after resize, re-run any boundary adjustments
          if (unqBalls.length) {
            for (let b of unqBalls) {
              b.x = Math.min(Math.max(b.x, UNQ_PADDING), unqWidth - b.w - UNQ_PADDING);
              b.y = Math.min(Math.max(b.y, UNQ_PADDING), unqHeight - b.h - UNQ_PADDING);
            }
          }
        });
      }
      
      // main initialization
      function unqInit() {
        unqCanvas = document.getElementById('unq_tagCanvasLayer');
        if (!unqCanvas) {
          console.warn('Canvas layer missing');
          return;
        }
        unqCtx = unqCanvas.getContext('2d');
        unqGrabCanvas = document.getElementById('unq_dragCaptureLayer');
        if (!unqGrabCanvas) return;
        
        unqResizeHandler();
        unqInitBalls();
        unqAttachEvents();
        unqBindResize();
        
        // start animation
        unqAnimationLoop();
      }
      
      // start when DOM ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', unqInit);
      } else {
        unqInit();
      }
    })();