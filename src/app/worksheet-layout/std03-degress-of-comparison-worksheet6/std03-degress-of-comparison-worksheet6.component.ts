import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-degress-of-comparison-worksheet6',
  templateUrl: './std03-degress-of-comparison-worksheet6.component.html',
  styleUrls: ['./std03-degress-of-comparison-worksheet6.component.scss']
})
export class Std03DegressOfComparisonWorksheet6Component implements OnInit {

  constructor() { }

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
      var i = 0;
      $('.col-4').click(function () {
        $(this).toggleClass('click');
        // $(this).addClass('click');
        var numItems = $(this).parent().find('.click').length;
        $(this).attr('data-text', i);
        if (numItems > 3) {
          // $(this).parent().find('[data-text='+(i-3)+']').removeClass('click');
          alert('please deselect any one');
          $(this).removeClass('click');
        }
        i++;
      });
      $('.button').click(function () {

        if ($('.button').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var TotalClickCount = 0;
          $('.Block').each(function () {
            var ClickCount = 0;
            ClickCount = $(this).find('.click').length;
            if (ClickCount == 3) {
              TotalClickCount++;
            }
          });
          if (TotalClickCount >= 3) {
            var Correct_Answers_Count = 0;
            $('.Block').each(function () {
              var ClickCount = 0;
              ClickCount = $(this).find('.click .answer').length;
              if (ClickCount == 3) {
                Correct_Answers_Count++;
              }
            });
            $('.click').css('color', '#ed1a1a');
            $('.click').find('.answer').addClass('correct-ans');
            $('.answer').not('.correct-ans').addClass('correct_white');
            $('.answer-image').show();
            console.log(Correct_Answers_Count);
            var percentage = (Correct_Answers_Count * 100) / 6;
            var ImgURL = "";
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

            setTimeout(function () {
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            }, 500);

            $('.col-4').css('pointer-events', 'none');
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 3 Tic-Tac-Toes before submitting');
            }, 500);
          }
        }
      });

    });
    $('.result,.close').click(function () {
      $('.result').fadeOut();
      $('.close').show();
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
