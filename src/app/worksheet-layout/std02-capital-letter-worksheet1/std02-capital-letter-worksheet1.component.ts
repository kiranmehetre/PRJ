import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std02-capital-letter-worksheet1',
  templateUrl: './std02-capital-letter-worksheet1.component.html',
  styleUrls: ['./std02-capital-letter-worksheet1.component.scss']
})
export class Std02CapitalLetterWorksheet1Component implements OnInit {

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
          var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
          if (hasClass(elem, className)) {
              while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
                  newClass = newClass.replace(' ' + className + ' ', ' ');
              }
              elem.className = newClass.replace(/^\s+|\s+$/g, '');
          }
      }
      // toggleClass
      function toggleClass(elem, className) {
          var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
          if (hasClass(elem, className)) {
              while (newClass.indexOf(" " + className + " ") >= 0 ) {
                  newClass = newClass.replace( " " + className + " " , " " );
              }
              elem.className = newClass.replace(/^\s+|\s+$/g, '');
          } else {
              elem.className += ' ' + className;
          }
      }
      theToggle.onclick = function() {
          toggleClass(this, 'on');
          $('.menu-block #menu').show();
          $('#toggle span img').toggleClass('up');
          return false;
      }

    $('.cap-container').click(function () {
      if ($(this).find('span').hasClass('click')) {
        $(this).find('span').removeClass('click');
      }
      else {
        $(this).find('span').addClass("click");
        // $(this).addClass('underlined');
      }
    });
    $('.button').click(function () {
      if ($('.button').hasClass('playAgain')) {
        window.location.href = window.location.href;
      }
      else {

        var underlinedCount = $('.click').length;
        if (underlinedCount >= 8) {

          $('.right').each(function () {
            if ($(this).hasClass('click')) {
              $(this).addClass('correct');
              $(this).css('text-transform', 'capitalize')
            }
            else {
              $(this).addClass('correct_white');
            }
          });
          // $('.click').not('.right').css('color', '#ed1a1a');
          $('.click').not('.right').addClass('wrong-click');
          var Correct_Answers_Count = $('.click.right').length;
          var percentage = (Correct_Answers_Count * 100) / 15;
          $('.cap-container').css('pointer-events', 'none');
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
            $('.result .TextBox h1').text('Please click on at least 8 words before submitting');
          }, 500);
        }
      }

    });
    $('.result,.close').click(function () {
      $('.result').fadeOut();
      $('.close').show();
    });

    function setImages() {
      var AllImages = ['assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
