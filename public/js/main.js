(function($) {
    "use strict";


    // Initiate the wowjs animation library
    new WOW().init();

    // Initiate superfish on nav menu
    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });

    // Mobile Navigation
    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-chevron-up fa-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').toggle();
        });

        $(document).click(function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    // Smooth scroll for the menu and links with .classes
    $('.nav-menu a, #mobile-nav a').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();

                    if (!$('#header').hasClass('header-fixed')) {
                        top_space = top_space - 20;
                    }
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Header scroll class
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    // Intro carousel
    $('.carousel').carousel({
        interval: 2000
    });
})(jQuery);
/***********************************************************************
 */
function FormValidation() {
    //First Name Validation 
    var x = "";
    //call the all ids
    var fn = document.getElementById('firstname').value;
    var ln = document.getElementById('lname').value;
    var em = document.getElementById('email').value;
    var mo = document.getElementById('mobile').value;
    var pa = document.getElementById('password').value;
    var cop_ass = document.getElementById('Con_password').value;
    var ct = document.getElementById('city').value;
    var zc = document.getElementById('zip_code').value;

    /*************************** Fun_of_Fname**********************/
    if (fn == x) {
        document.getElementById('line1').style.backgroundColor = "red";
        return false;
    } else {
        document.getElementById('line1').style.backgroundColor = "green";
    }
    /*************************** Fun_of_lname**********************/
    if (ln == x) {
        document.getElementById('line2').style.backgroundColor = "red";
        return false;
    } else {
        document.getElementById('line2').style.backgroundColor = "green";
    }
    /*************************** Fun_of_email**********************/
    if (em == x) {
        document.getElementById('line8').style.backgroundColor = "red";
        return false;
    } else {
        document.getElementById('line8').style.backgroundColor = "green";
    }
    /*************************** Fun_of_mobil**********************/

    if (mo == x) {
        document.getElementById('line3').style.backgroundColor = "red";
        return false;
    } else {
        document.getElementById('line3').style.borderColor = "green";

    }
    /*************************** Fun_of_password**********************/

    if (pa == x) {
        document.getElementById('line4').style.backgroundColor = "red";
        return false;
    } else {
        document.getElementById('line4').style.borderColor = "green";
    }

    /*************************** Fun_of_Con_password**********************/
    if (cop_ass == x) {
        document.getElementById('line5').style.backgroundColor = "red";
        return false;
    } else {
        document.getElementById('line5').style.borderColor = "green";
    }

    /*************************** Fun_of_city**********************/


    if (ct == x) {
        document.getElementById('line6').style.backgroundColor = "red";
        return false;
    } else {
        document.getElementById('line6').style.borderColor = "green";
    }
    /*************************** Fun_of_zip_code**********************/
    if (zc == "") {
        document.getElementById('line7').style.backgroundColor = "red";
        return false;

    } else {
        document.getElementById('line7').style.borderColor = "green";
    }




    /******************************************************************/
    if (/^[0-9]+$/.test(document.getElementById("firstname").value)) {
        alert("First Name Contains Numbers!");
        document.getElementById('firstname').style.borderColor = "red";
        return false;
    } else {
        document.getElementById('firstname').style.borderColor = "green";
    }
    if (fn.length <= 2) {
        alert('Your Name is To Short');
        document.getElementById('firstname').style.borderColor = "red";
        return false;
    } else {
        document.getElementById('firstname').style.borderColor = "green";
    }
}


//show password
$(document).ready(function() {
    $("#pw").focus(function() {
        this.type = "text";
    }).blur(function() {
        this.type = "password";
    });
});

//Placeholder fixed for Internet Explorer
$(function() {
    var input = document.createElement("input");
    if (('placeholder' in input) == false) {
        $('[placeholder]').focus(function() {
            var i = $(this);
            if (i.val() == i.attr('placeholder')) {
                i.val('').removeClass('placeholder');
                if (i.hasClass('password')) {
                    i.removeClass('password');
                    this.type = 'password';
                }
            }
        }).blur(function() {
            var i = $(this);
            if (i.val() == '' || i.val() == i.attr('placeholder')) {
                if (this.type == 'password') {
                    i.addClass('password');
                    this.type = 'text';
                }
                i.addClass('placeholder').val(i.attr('placeholder'));
            }
        }).blur().parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var i = $(this);
                if (i.val() == i.attr('placeholder'))
                    i.val('');
            });
        });
    }
});