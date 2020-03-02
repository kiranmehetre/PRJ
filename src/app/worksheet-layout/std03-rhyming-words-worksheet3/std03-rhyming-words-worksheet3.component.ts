import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-rhyming-words-worksheet3',
  templateUrl: './std03-rhyming-words-worksheet3.component.html',
  styleUrls: ['./std03-rhyming-words-worksheet3.component.scss']
})
export class Std03RhymingWordsWorksheet3Component implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color','#96d3c6');
  }

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
    $(document).ready(function () {
      $('.Question_Row').each(function () {
        var options = $(this).find('.option');
        $(options).each(function () {
          $(this).click(function () {
            if ($(this).hasClass('click')) {
              $(options).removeClass('click');
            }
            else {
              $(options).removeClass('click');
              $(this).addClass('click');
            }
          })
        })
      });
      $('.myButton').click(function () {

        if ($('.myButton').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          if ($('.click').length >= 4) {
            var Correct_Answers = ["camp", "height", "sloppy", "drew", "spade", "third", "crane", "quick"];
            $('.click').not('.right').css('color', '#ed1a1a');
            $('.right').each(function (i) {
              if ($(this).hasClass('click')) {
                $(this).addClass('correct_bordered');
              }
              else {
                $(this).addClass('correct');
              }
            });





            $('.option').css('pointer-events', 'none');
            var Correct_answers_count = $('.right.click').length;
            var percentage = (Correct_answers_count * 100) / 8;
            console.log(percentage);
            var DisplayResult = "";
            if (percentage > 80) {
              DisplayResult = '.outstanding';
            }
            else if (percentage > 60) {
              DisplayResult = '.brilliant';
            }
            else if (percentage >= 50) {
              DisplayResult = '.good-work';
            }
            else if (percentage < 50) {
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
              $('.myButton').addClass('playAgain');
              $('.myButton.playAgain').text('solve again');
            }, 500);
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 4 words before submitting');
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
