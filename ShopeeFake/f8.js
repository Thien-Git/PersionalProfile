document.addEventListener("DOMContentLoaded", function () {

    var dangky = document.getElementsByClassName('header-navbar-item-link--separate');
    var dangnhap = document.getElementsByClassName('header-navbar-item-link--login');
    var modal = document.getElementsByClassName('modal');
    var overlay = document.getElementsByClassName('modal__overlay');

    overlay[0].onclick = function () {
        modal[0].classList.add('hidenmodal');
        
    }
    

    dangky[0].onclick = function () {
        modal[0].classList.remove('hidenmodal');
        document.getElementsByClassName('hidenregister')[0].classList.remove('hidenregister');
    }

    dangnhap[0].onclick = function () {
        modal[0].classList.remove('hidenmodal');
        document.getElementsByClassName('hidenlogin')[0].classList.remove('hidenlogin');
    }



}, false)