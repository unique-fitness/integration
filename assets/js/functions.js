        jQuery(document).ready(function ($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
            AOS.init();
            $(document).scroll(function () {
                var $nav = $(".navbar-scrolled");
                $nav.toggleClass('fixed-navbar', $(this).scrollTop() > $nav.height());
              });            
            $(function() {
            $('.bg-btn-numbers').hover(function() {
                $('.fixed-color-btn').attr("id","fixed-color-btn");
            }, function() {
                // on mouseout, reset the background colour
                $('.fixed-color-btn').delay("slow").attr("id","");
            });
            });

            var third_owl = $('.owl-activites');
            third_owl.owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            navText: ["<span class='material-symbols-outlined rotate-flat'>trending_flat</span>","<span class='material-symbols-outlined'>trending_flat</span>"],
            margin: 0,
            center: true,
            autoplay: true,
            // autoWidth: true,
            responsiveClass: true,
            autoHeight: true,
            responsive: {
                0: {
                items: 1
                },
                600: {
                items: 2
                },
                960: {
                items: 3
                },
                1200: {
                items: 3
                }
            }
            });
            
            var events_owl = $('.owl-events');
            events_owl.owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            margin: 0,
            center: true,
            autoplay: false,
            // autoWidth: true,
            responsiveClass: true,
            autoHeight: true,
            responsive: {
                0: {
                items: 1
                },
                600: {
                items: 2
                },
                960: {
                items: 3
                },
                1200: {
                items: 3
                }
            }
            });

            var imagPop = document.getElementById("lightgallery");
            lightGallery(imagPop);
            
            const cursor = document.querySelector('.custom-cursor');
            document.addEventListener('mousemove', e =>{
                cursor.setAttribute('style', 'top: '+(e.pageY - 10)+'px; left: '+(e.pageX - 10)+'px;');
            })
            document.addEventListener('click', () =>{
                cursor.classList.add('expand-cursor');
                setTimeout(() =>{
                    cursor.classList.remove('expand-cursor');
                }, 500)
            })
        });

