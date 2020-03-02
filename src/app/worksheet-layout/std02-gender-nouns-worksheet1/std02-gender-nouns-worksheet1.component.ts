import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std02-gender-nouns-worksheet1',
  templateUrl: './std02-gender-nouns-worksheet1.component.html',
  styleUrls: ['./std02-gender-nouns-worksheet1.component.scss']
})
export class Std02GenderNounsWorksheet1Component implements OnInit {

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


    var inputField;
    var inputValue;
    var ClickAnswer = [];
    var Text = "";
    var inputs = $('input');
    $(inputs).click(function () {
      inputField = $(this);
      inputValue = $(this).val();
      $(inputs).removeClass('bd');
      $(this).addClass('bd');

      ClickAnswer = $.grep(ClickAnswer, function (value) {
        return value != inputValue;
      });
      $(".Option span").filter(function () {
        return $(this).text() === inputValue;
      }).removeClass('click');
      $(this).val("");
    });
    $('input').attr('readonly', 'readonly');
    var HelpBox = [];
    $('.Option span').click(function () {
      inputValue = $(inputField).val();
      if (inputField !== undefined) {
        inputValue = $(inputField).val();
        Text = $(this).text();
        HelpBox.push(Text);
        if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
          $(".Option span").filter(function () {
            return $(this).text() === inputValue;
          }).removeClass('click');
        }
        $(this).addClass('click');
        if (ClickAnswer.indexOf(Text) > -1) {

        }
        else {
          ClickAnswer = $.grep(ClickAnswer, function (value) {
            return value != inputValue;
          });
          $(inputField).val(Text);
          ClickAnswer.push(Text);
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
        var Correct_Answers_Count = 0;
        if (inputCount > 3) {
          var Correct_answers = ["landlady", "stewardess", "manageress", "hostess", "baroness", "girl guide", "milkmaid", "mother-in-law"];
          $('input').each(function (i) {
            if ($(this).val() !== Correct_answers[i]) {
              $(this).css({ 'color': '#FFEB3B', 'border-color': '#000' });
              $(this).parent().siblings('.Correct_Answer').css('display', 'inline-block');
            }
            else {
              Correct_Answers_Count++;
            }
          });
          $(inputs).removeClass('bd');
          $('input,.Option').css('pointer-events', 'none');
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