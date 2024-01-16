$(document).ready(function () {

    //ANIMATION
    function animation() {

        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();

        $('.animation').each(function () {

            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');


            if (position < windowHeight + scroll - 100) {

                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);

            }

        });


    }


    $(window).scroll(function () {
        animation();
    });


    animation();

    if ('.team-members-slider'.length) {
        $(".team-members-slider").owlCarousel(
                {
                    autoplay : true,
                    loop : true,
                    responsive: {
                        0: {
                            items: 1,
                            margin: 0
                        },
                        992: {
                            items: 2,
                            margin: 30
                        }
                    }
                }

        );
    };
   
   
    if($('.contact-form'.length > 0)){
        
        $('.contact-form').validate({
           
            highlight: function(element){
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function(element){
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },              
                message: {
                    required: true,
                    minlength: 10
                }               
            },
            messages : {
                name : {
                    required: 'The Name* field is required!',
                    minlength: 'Minimum length is 3 characters!'
                },
                email : {
                    required: 'The Email* field is required!',
                    email: 'Please enter an valid email adress!'
                }
            },
            errorElement : 'p',
            errorPlacement : function(error, element){
                error.appendTo(element.closest('.form-group').find('.error-msg'));
            }
        });
        
    }



});