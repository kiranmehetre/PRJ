import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-proper-noun-worksheet4',
  templateUrl: './std01-proper-noun-worksheet4.component.html',
  styleUrls: ['./std01-proper-noun-worksheet4.component.scss']
})
export class Std01ProperNounWorksheet4Component implements OnInit {

  constructor() { }

  ngOnInit() {


    $('.loadingDiv').hide();
    setImages();
    window.onload = function () {
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

    $('.col-10 span').click(function () {
      $(this).toggleClass("underlined");
      var numItems = $(this).parent().find('.underlined').length;
      if (numItems >= 3) {
        alert('please deselect any one');
        $(this).removeClass('underlined');
      }
    });

    $('.button').click(function () {

      if ($('.button').hasClass('playAgain')) {
        window.location.href = window.location.href;
      }
      else {
        var i = 0;
        var underlinedCount = 0;
        var Correct_Answers_Count = 0;
        if ($('.underlined').length >= 5) {
          var Correct_Answers_Count = $('.underlined.correct').length;
          $('.underlined').not('.correct').css('color', '#ed1a1a');
          $('.correct').each(function (i) {
            if ($(this).hasClass('underlined')) {
              $(this).addClass('right');
            }
            else {
              $(this).addClass('correct1');
            }
          });

          $('input,.col-10 span').css('pointer-events', 'none');
          var percentage = (Correct_Answers_Count * 100) / 10;
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
            $('.result .TextBox h1').text('Please solve at least 5 sentences before submitting');
          }, 500);
        }
      }

    });

    $('input').attr('readonly', 'readonly');

    $('.result,.close').click(function () {
      $('.result').fadeOut();
      $('.close').show();
    });
    function setImages() {
      var t = new Date().getTime();
      $('.imgBox img').attr("src", 'assets/images/fabulous.gif?' + t);
    }
  }

}
