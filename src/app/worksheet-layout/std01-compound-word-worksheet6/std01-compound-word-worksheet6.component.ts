import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-compound-word-worksheet6',
  templateUrl: './std01-compound-word-worksheet6.component.html',
  styleUrls: ['./std01-compound-word-worksheet6.component.scss']
})
export class Std01CompoundWordWorksheet6Component implements OnInit {

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


    $(document).ready(function () {
      var inputField;
      var inputValue = "";
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var PushText = "";
      var Correct_Answers_Count = 0;
      var inputs = $('.answer-container');
      // $(inputs).attr('readonly','readonly');
      // $(inputs).css('cursor','pointer');

      $(inputs).click(function () {

        inputField = $(this).find('.input span');
        $(inputs).find('img').removeClass('bd');
        $(this).find('img').addClass('bd');
        inputValue = $(inputField).attr('data-text');
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".helpbox").filter(function () {
          return $(this).find('span').attr('data-text') === inputValue;
        }).removeClass('click');
        $(this).find('.input span').text('');
        $(this).find('.input span').attr('data-text', '');
      });
      $('.helpbox').click(function () {
        if (inputField !== undefined) {
          // inputValue=$(inputField).val();
          inputValue = $(inputField).attr('data-text');
          Text = $(this).find('span').text();
          PushText = $(this).find('span').attr('data-text');
          HelpBox.push(PushText);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(PushText) < 0) {
            $(".helpbox").filter(function () {
              return $(this).find('span').attr('data-text') === inputValue;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (ClickAnswer.indexOf(PushText) > -1) {

          }
          else {
            ClickAnswer = $.grep(ClickAnswer, function (value) {
              return value != inputValue;
            });
            $(inputField).text(Text);
            $(inputField).attr('data-text', PushText);
            ClickAnswer.push(PushText);
          }
        }
      });

      $('.button').click(function () {

        if ($('.button').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var Correct_Answers_Count = 0;
          var inputCount = $('.input span').filter(function () {
            return !!$(this).text();
          }).length;
          console.log(inputCount);
          if (inputCount >= 5) {
            $(inputs).find('img').removeClass('bd');
            var Correct_Answers = ["bow", "house", "fly", "work", "light", "shore", "fly", "box", "fall", "market"];
            $(inputs).each(function (i) {
              if ($.trim($(this).find('.input span').text()) !== Correct_Answers[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).closest('.answer-container').find('.correct-answer').css('visibility', 'visible');
              }
              else {
                Correct_Answers_Count++;
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
            $('.helpbox,.answer-container').addClass('disabled');
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
              $('.result .TextBox h1').text('Please solve at least 5 banners before submitting');
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
