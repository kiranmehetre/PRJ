import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-common-noun-worksheet2',
  templateUrl: './std01-common-noun-worksheet2.component.html',
  styleUrls: ['./std01-common-noun-worksheet2.component.scss']
})
export class Std01CommonNounWorksheet2Component implements OnInit {

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

    var spans;
    $(document).ready(function () {
      $('.text-container').each(function () {
        spans = $(this).find('span');
        $(spans).each(function () {
          $(this).click(function () {
            if ($(this).hasClass('underlined')) {
              $(this).removeClass('underlined');
            }
            else {
              //$(this).parent().find('span').removeClass("underlined");
              var underline_count = $(this).closest('.text-container').find('.underlined').length;
              if (underline_count < 3) {
                $(this).addClass('underlined');
              }
              else {
                alert('please deselect any one');
              }
            }
          });
        });
      });
      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var clickCount = 0;
          $('.text-container').each(function () {
            if ($(this).find('.underlined').length > 0) {
              clickCount++;
            }
          });
          if (clickCount >= 5) {
            var Correct_Answers_Count = 0;
            $('.underlined').not('.right').css('color', '#ed1a1a');
            $('.right').each(function (i) {
              if ($(this).hasClass('underlined')) {
                $(this).addClass('correct');
              }
              else {
                $(this).addClass('correct_white');
              }
            });
            $('.text-container').each(function () {
              if ($(this).find('.underlined.right').length > 0) {
                Correct_Answers_Count++;
              }
            });

            $('.text-container span,.text-container').css('pointer-events', 'none');
            var ImgURL = "";
            var percentage = (Correct_Answers_Count * 100) / 10;
            var DisplayResult = "";

            DisplayResult = '.fabulous';

            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox').hide();
              $(DisplayResult).removeClass('hide');
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
    });
    $('.result,.close').click(function () {
      $('.result').fadeOut();
      // $('.close').show();
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
