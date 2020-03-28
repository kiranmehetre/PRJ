import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-proper-noun-worksheet3',
  templateUrl: './std01-proper-noun-worksheet3.component.html',
  styleUrls: ['./std01-proper-noun-worksheet3.component.scss']
})
export class Std01ProperNounWorksheet3Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();

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
      var PushText = "";
      var Correct_Answers_Count = 0;
      var inputs = $('span.input');

      $(inputs).click(function () {

        inputField = $(this);
        $(inputs).removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(inputField).attr('data-text');
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".img-container").filter(function () {
          return $(this).attr('data-text') === inputValue;
        }).removeClass('click');
        $(inputField).find('span').css('visibility', 'hidden');
        $(this).attr('data-text', '');
      });
      $('.img-container').click(function () {
        if (inputField !== undefined) {
          // inputValue=$(inputField).val();
          inputValue = $(inputField).attr('data-text');
          Text = $(this).find('span').text();
          PushText = $(this).attr('data-text');
          HelpBox.push(PushText);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(PushText) < 0) {
            $(".img-container").filter(function () {
              return $(this).attr('data-text') === inputValue;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (ClickAnswer.indexOf(PushText) > -1) {

          }
          else {
            ClickAnswer = $.grep(ClickAnswer, function (value) {
              return value != inputValue;
            });
            $(inputField).find('span').css('visibility', 'visible');
            $(inputField).find("span").text(Text);
            $(inputField).attr('data-text', PushText);
            ClickAnswer.push(PushText);
          }
        }
      });

      $('.button').click(function () {

        if ($('.button').hasClass('playAgain')) {
          window.location.reload();
        }
        else {
          var Correct_Answers_Count = 0;
          var inputCount = $('span.input span').filter(function () {
            return $(this).text() != "X";
          }).length;
          if (inputCount >= 6) {
            $(inputs).removeClass('bd');
            var Correct_Answers = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
            $(inputs).each(function (i) {
              if ($.trim($(this).find('span').text()) !== Correct_Answers[i]) {
                $(this).addClass('wrong');
                $(this).siblings('.correct-answer').addClass('displayBlock');
              }
              else {
                Correct_Answers_Count++;
              }
            });
            var percentage = (Correct_Answers_Count * 100) / 12;
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
            $('.img-container,.question,input').css('pointer-events', 'none');
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
              $('.result .TextBox h1').text('Please solve at least 6 blanks before submitting');
            }, 500);
          }
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
    $('.result,.close').click(function () {
      $('.result').fadeOut();
      $('.close').show();
    });
  }

}
