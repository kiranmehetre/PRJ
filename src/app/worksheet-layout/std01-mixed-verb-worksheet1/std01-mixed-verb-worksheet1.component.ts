import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-mixed-verb-worksheet1',
  templateUrl: './std01-mixed-verb-worksheet1.component.html',
  styleUrls: ['./std01-mixed-verb-worksheet1.component.scss']
})
export class Std01MixedVerbWorksheet1Component implements OnInit {

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


    var selectext = false;
    var inputField;
    var inputValue;
    var inputClass = "";
    var clickClass = "";
    var Text = "";
    var ClickAnswer = [];
    var HelpBox = [];
    var Correct_Answers_Count = 0;
    var inputs = $('input');
    var QuestionsArray = [".Questions > .row-m-0:nth-child(1)", ".Questions > .row-m-0:nth-child(2)", ".Questions > .row-m-0:nth-child(3)", ".Questions > .row-m-0:nth-child(4)", ".Questions > .row-m-0:nth-child(5)", ".Questions > .row-m-0:nth-child(6)", ".Questions > .row-m-0:nth-child(7)", ".Questions > .row-m-0:nth-child(8)"]
    $(inputs).attr('readonly', 'readonly');
    $('.question').each(function (i) {
      ClickAnswer[i] = [];
      ClickAnswer.push(ClickAnswer[i]);
      HelpBox[i] = [];
      HelpBox.push(HelpBox[i]);
    });
    $(inputs).click(function () {
      inputField = $(this);
      $(inputs).parent().removeClass('bd');
      $(this).parent().addClass('bd');
      inputClass = $(this).closest('.question').find('.number').text().trim();
      inputValue = $(inputField).val();
      ClickAnswer[parseInt(inputClass) - 1] = $.grep(ClickAnswer[parseInt(inputClass) - 1], function (value) {
        return value != inputValue;
      });
      $(QuestionsArray[parseInt(inputClass) - 1]).find("u").filter(function () {
        return $(this).text().trim() === inputValue;
      }).removeClass('click');
      $(this).val("");
    });

    $('u').click(function () {
      clickClass = $(this).closest('.question').find('.number').text().trim();
      if (inputField !== undefined && clickClass === inputClass) {
        Text = $(this).text().trim().replace('.', '');
        inputValue = $(inputField).val();

        HelpBox[parseInt(clickClass) - 1].push(Text);
        if (HelpBox[parseInt(clickClass) - 1].indexOf(inputValue) > -1 && ClickAnswer[parseInt(clickClass) - 1].indexOf(Text) < 0) {
          $("u").filter(function () {
            return $(this).text().trim() === inputValue;
          }).removeClass('click');
        }
        $(this).addClass('click');

        if (ClickAnswer[parseInt(clickClass) - 1].indexOf(Text) > -1) {

        }
        else {
          ClickAnswer[parseInt(clickClass) - 1] = $.grep(ClickAnswer[parseInt(clickClass) - 1], function (value) {
            return value != inputValue;
          });
          $(inputField).val(Text);
          ClickAnswer[parseInt(clickClass) - 1].push(Text);
        }
      }
    });

    $('.button').click(function () {
      if ($('.button').hasClass('playAgain')) {
        window.location.href = window.location.href;
      }
      else {
        var inputCount = $('input').filter(function () {
          return !!$(this).val();
        }).length;

        if (inputCount >= 8) {
          $(inputs).parent().removeClass('bd');
          var Correct_Answers = ["are", "flying", "was", "raining", "did", "wake", "is", "fixing", "had", "spoken", "will", "travel", "can", "talk", "were", "standing"];
          $(inputs).each(function (i) {
            if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              $(this).siblings('.ans').css('display', 'block');
            }
            else {
              Correct_Answers_Count++;
            }
          });
          var percentage = (Correct_Answers_Count * 100) / 16;
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
          $('input,.text-container span span').css('pointer-events', 'none');
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 8 blanks before submitting');
          }, 500);
        }
      }
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
