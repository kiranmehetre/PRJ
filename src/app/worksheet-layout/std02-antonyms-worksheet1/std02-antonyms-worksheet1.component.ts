import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std02-antonyms-worksheet1',
  templateUrl: './std02-antonyms-worksheet1.component.html',
  styleUrls: ['./std02-antonyms-worksheet1.component.scss']
})
export class Std02AntonymsWorksheet1Component implements OnInit {

  constructor() { }

  ngOnInit() {


    window.onload = function () {
      $('.loadingDiv').hide();
      setImages();
    }
    var theToggle = document.getElementById('toggle');
    // hasClass
    function hasClass(elem, className) {
      return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }
    // addClass
    function addClass(elem, className) {
      if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
      }
    }
    // removeClass
    function removeClass(elem, className) {
      var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
      if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
          newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
      }
    }
    // toggleClass
    function toggleClass(elem, className) {
      var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
      if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0) {
          newClass = newClass.replace(" " + className + " ", " ");
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
      } else {
        elem.className += ' ' + className;
      }
    }
    theToggle.onclick = function () {
      toggleClass(this, 'on');
      $('.menu-block #menu').show();
      $('#toggle span img').toggleClass('up');
      return false;
    }

    var imgUrl = "";
    $('.Main_Container img').click(function () {
      $(this).toggleClass("img-shadow");
      if ($(this).hasClass('click')) {
        imgUrl = "assets/std02-antonyms-worksheet1/img/" + $(this).attr('data-text') + ".png";
        $(this).attr('src', imgUrl);
      }
      else {
        imgUrl = "assets/std02-antonyms-worksheet1/img/" + $(this).attr('data-text') + "_right.png";
        $(this).attr('src', imgUrl);
      }
      $(this).toggleClass('click');

    });
    $('.button').click(function () {

      if ($('.button').hasClass('playAgain')) {
        window.location.href = window.location.href;
      }
      else {
        if ($('.click').length >= 5) {
          $('img.right').each(function () {
            imgUrl = "assets/std02-antonyms-worksheet1/img/" + $(this).attr('data-text') + "_right.png";
            $(this).attr('src', imgUrl);
          });
          $('img.wrong').each(function () {
            imgUrl = "assets/std02-antonyms-worksheet1/img/" + $(this).attr('data-text') + "_wrong.png";
            $(this).attr('src', imgUrl);
          });

          $('img,.bell').css('pointer-events', 'none');
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox').hide();
            $('.fabulous').removeClass('hide');
            $('.result .imgBox').show();
            $('.result').delay(2000).fadeOut('slow');
            $('.close').hide();
          }, 500);
          setTimeout(function () {
            $('.button').addClass('playAgain');
            $('.button.playAgain').text('solve again');
          }, 500);
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please colour at least 5 bells before submitting');
          }, 500);
        }
      }
    });
    $('.result,.close').click(function () {
      $('.result').fadeOut();
      $('.close').show();
    });

    function setImages() {

      var t = new Date().getTime();
      $('.imgBox img').attr('src', 'assets/images/fabulous.gif?' + t);
    }
  }

}
