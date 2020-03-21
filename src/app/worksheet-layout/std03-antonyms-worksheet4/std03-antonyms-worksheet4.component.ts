import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-antonyms-worksheet4',
  templateUrl: './std03-antonyms-worksheet4.component.html',
  styleUrls: ['./std03-antonyms-worksheet4.component.scss']
})
export class Std03AntonymsWorksheet4Component implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color','#9dcc40');
  }

  ngOnInit() {
     $('.loadingDiv').hide();
      setImages();
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
    $(document).ready(function () {
      var options;
      $('.option').click(function () {
        if ($(this).hasClass('underlined')) {
          $(this).removeClass('underlined');
        }
        else {
          $(this).parent().find('.option').removeClass('underlined');
          $(this).addClass('underlined');
        }
      });


      $('.button').click(function () {

        if ($('.button').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var Correct_Answers_Count = 0;
          if ($('.underlined').length >= 5) {

            var Correct_Answers_Count = $('.right.underlined').length;
            $('.option.underlined').not('.right').css('color', '#ed1a1a');
            $('.right').each(function (i) {
              if ($(this).hasClass('underlined')) {
                $(this).addClass('correct');
              }
              else {
                $(this).addClass('correct_white');
              }
            });

            var percentage = (Correct_Answers_Count * 100) / 10;
            var DisplayResult = "";
            if (percentage > 80) {
              DisplayResult = '.outstanding';
            }
            else if (percentage > 60) {
              DisplayResult = '.brilliant';
            }
            else if (percentage > 50) {
              DisplayResult = '.good-work';
            }
            else if (percentage <= 50) {
              DisplayResult = '.keep-practicing';
            }
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox').hide();
              $(DisplayResult).removeClass('hide');
              $('.result .imgBox').show();
              $('.result').delay(2000).fadeOut('slow');
              $('.close').hide();
            }, 500);
            $('.option').css('pointer-events', 'none');
            setTimeout(function () {
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            }, 500);
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 5 words before submitting');
            }, 500);
          }
          $('.result,.close').click(function () {
            $('.result').fadeOut();
            $('.close').show();
          });
        }

      });

    });
    function setImages() {
      var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
        'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
