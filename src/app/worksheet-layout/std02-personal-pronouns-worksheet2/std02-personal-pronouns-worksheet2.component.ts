import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std02-personal-pronouns-worksheet2',
  templateUrl: './std02-personal-pronouns-worksheet2.component.html',
  styleUrls: ['./std02-personal-pronouns-worksheet2.component.scss']
})
export class Std02PersonalPronounsWorksheet2Component implements OnInit {

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
    $(document).ready(function () {

      var inputField;
      var inputValue = "";
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var Correct_Answers_Count = 0;
      $('.text-container span').click(function () {
        $(this).toggleClass("underlined");
        var numItems = $(this).parent().find('.underlined').length;
        if (numItems > 2) {
          alert('please deselect any one');
          $(this).removeClass('underlined');
        }
      });

      $('.button').click(function () {
        if ($(this).hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var Correct_Answers_Count = 0;
          var underlineCount=0;
          $('.question').each(function(){
            if($(this).find('.underlined').length > 0){
              underlineCount++;
            }
          });
          if (underlineCount >= 4) {
            var Correct_Answers = ["We", "me", "You", ["I", "them"], "It", "him", "her", "us"];

            $('.text-container').each(function (i) {
              var isTrue = false;
              var underlined = $(this).find('.underlined');
              if (i == 3) {
                $(underlined).each(function (j) {
                  if (Correct_Answers[i].indexOf($(this).text()) < 0) {
                    $(underlined[j]).css('color', 'red');
                  }
                  else {
                    isTrue = true;
                  }
                });
                if (isTrue) {
                  Correct_Answers_Count++;
                }
                for (var x = 0; x < 2; x++) {
                  var Click = $(this).find("span:contains(" + Correct_Answers[i][x] + ")");
                  if ($(Click).hasClass('underlined')) {
                    $(Click).addClass('colorgreen_bordered');
                  }
                  else {
                    $(Click).addClass('colorgreen');
                  }
                }
              }
              else {
                if (underlined !== undefined) {
                  if (underlined.text() !== Correct_Answers[i]) {
                    $(underlined).css('color', 'red');
                  }
                  else {
                    Correct_Answers_Count++;
                  }
                }
                var Click = $(this).find("span:contains(" + Correct_Answers[i] + ")");
                if ($(Click).hasClass('underlined')) {
                  $(Click).addClass('colorgreen_bordered');
                }
                else {
                  $(Click).addClass('colorgreen');
                }
              }
            });
            var percentage = (Correct_Answers_Count * 100) / 8;
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
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            }, 500);
            $('.text-container span').css('pointer-events', 'none');
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 4 sentences before submitting');
            }, 500);
          }
        }
        $('.result,.close').click(function () {
          $('.result').fadeOut();
          $('.close').show();
        });
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
