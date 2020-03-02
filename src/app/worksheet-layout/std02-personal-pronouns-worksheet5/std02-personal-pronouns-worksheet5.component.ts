import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std02-personal-pronouns-worksheet5',
  templateUrl: './std02-personal-pronouns-worksheet5.component.html',
  styleUrls: ['./std02-personal-pronouns-worksheet5.component.scss']
})
export class Std02PersonalPronounsWorksheet5Component implements OnInit {

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
    var Correct_Answers_Count = 0;
    var ClickAnswer = [];
    var HelpBox = [];
    var inputs = $('input');
    $("input").each(function (i) {

      $(this).attr('id', 'question' + i);

      var id = $(this).attr('id', 'question' + i);
    });

    var inputField;
    var PushText, inputValue;


    $(inputs).click(function () {

      inputField = $(this);
      $(inputs).removeClass('bd');
      $(this).addClass('bd');
      inputValue = $(inputField).attr('data-text');
      ClickAnswer = $.grep(ClickAnswer, function (value) {
        return value != inputValue;
      });
      $(".helpbox-ans").filter(function () {
        return $(this).attr('data-text') === inputValue;
      }).removeClass('white');
      $(this).val('');
      $(this).attr('data-text', '');
    });

    $('input').attr('readonly', 'readonly');



    for (var i = 0, len = inputs.length; i < len; i++) {
      inputs[i].addEventListener('focus', function () {
        $(this).attr('id', 'question' + i).addClass('bd');  //handle event
      })
    };
    var Text = '';

    $('.helpbox-ans').click(function () {
      if (inputField !== undefined) {
        // inputValue=$(inputField).val();
        inputValue = $(inputField).attr('data-text');
        Text = $(this).find('span').text();
        PushText = $(this).attr('data-text');
        HelpBox.push(PushText);
        if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(PushText) < 0) {
          $(".helpbox-ans").filter(function () {
            return $(this).attr('data-text') === inputValue;
          }).removeClass('white');
        }
        $(this).addClass('white');
        if (ClickAnswer.indexOf(PushText) > -1) {

        }
        else {
          ClickAnswer = $.grep(ClickAnswer, function (value) {
            return value != inputValue;
          });
          $(inputField).val(Text);
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
        var inputCount = $('input[type="text"]').filter(function () {
          return !!$(this).val();
        }).length;


        if (inputCount >= 4) {
          $(inputs).removeClass('bd');
          var Correct_Answers = ["us", "him", "them", "her", "me", "you", "it", "you"];
          $(inputs).each(function (i) {
            if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              $(this).parent().siblings('.correct-answer').css('visibility', 'visible');
            }
            else {
              Correct_Answers_Count++;
            }
          });
          $('input,.helpbox-ans').css('pointer-events', 'none');
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
        }
        else {
          setTimeout(function () {

            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 4 blanks before submitting');
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
      var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
        'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
