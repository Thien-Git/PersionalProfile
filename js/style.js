document.addEventListener("DOMContentLoaded", function () {

    var linkaboutme = document.getElementsByClassName('linkabout');
    var linkcontact = document.getElementsByClassName('linkcontact');
    var sub = document.getElementsByClassName('sub');
    var overlay = document.getElementsByClassName('overlay');

    // var dangnhap = document.getElementsByClassName('header-navbar-item-link--login');
    // var modal = document.getElementsByClassName('modal');
    // var overlay = document.getElementsByClassName('modal__overlay');

    linkaboutme[0].onclick = function () {
        sub[0].classList.add('about__me');
        sub[0].classList.remove('tthere');

    }

    linkcontact[0].onclick = () => {
        sub[1].classList.add('about__me');
        sub[1].classList.remove('tthere');
    }
   
    overlay[0].onclick = function () {
        sub[0].classList.add('tthere');
    }

    overlay[1].onclick = function () {
        sub[1].classList.add('tthere');
    }
    

    // dangky[0].onclick = function () {
    //     modal[0].classList.remove('hidenmodal');
    //     document.getElementsByClassName('hidenregister')[0].classList.remove('hidenregister');
    // }

    // dangnhap[0].onclick = function () {
    //     modal[0].classList.remove('hidenmodal');
    //     document.getElementsByClassName('hidenlogin')[0].classList.remove('hidenlogin');
    // }



}, false)
