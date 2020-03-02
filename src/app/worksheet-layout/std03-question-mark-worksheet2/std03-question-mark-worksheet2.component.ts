import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-question-mark-worksheet2',
  templateUrl: './std03-question-mark-worksheet2.component.html',
  styleUrls: ['./std03-question-mark-worksheet2.component.scss']
})
export class Std03QuestionMarkWorksheet2Component implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color','#a1d4a7');
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
    var inputValue;
    var inputField;
    var ClickAnswer = [];
    var HelpBox = [];
    var QuestionMarkInputField;
    var Spaninput = $('.input-span input');
    var QuestionMarkinput = $('.question-mark input');
    $(Spaninput).click(function () {
      inputField = $(this);
      inputValue = $(this).val();
      $(Spaninput).parent().removeClass('bd');
      $(this).parent().addClass('bd');
      ClickAnswer = $.grep(ClickAnswer, function (value) {
        return value != inputValue;
      });
      $(".input-helpbox .help-box").filter(function () {
        return $(this).text().trim() === inputValue;
      }).removeClass('click');
      $(this).val("");
    });
    $(QuestionMarkinput).click(function () {
      QuestionMarkInputField = $(this);
      $(QuestionMarkinput).removeClass('question-mark-bd');
      $(this).addClass('question-mark-bd');
      $(this).val("");
    });
    $('.input-helpbox .help-box').click(function () {

      if (inputField !== undefined) {
        //$(inputField).val($(this).text());
        inputValue = $(inputField).val();
        var Text = $(this).text().trim();
        HelpBox.push(Text);
        if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
          $(".input-helpbox .help-box").filter(function () {
            return $(this).text().trim() === inputValue;
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

    $('.question-Mark-helpbox .help-box').click(function () {
      if (QuestionMarkInputField !== undefined) {
        //$(inputField).val($(this).text());
        var IsQuestion = $(this).text().trim();
        $(QuestionMarkInputField).val(IsQuestion);
      }
    });
    $('.button').click(function () {

      if ($('.button').hasClass('playAgain')) {
        window.location.href = window.location.href;
      }
      else {
        var Correct_Answers_Count = 0;
        var inputCount = $('.input-span input').filter(function () {
          return !!$(this).val();
        }).length;
        var QuestioninputCount = $('.question-mark input').filter(function () {
          return !!$(this).val();
        }).length;
        if (inputCount >= 5 && QuestioninputCount >= 5) {
          var Correct_answers = ["Is", "Are", "Do", "Will", "Am", "Can", "May", "Does", "Was", "Shall"];
          var correctQuestionMark = ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?"];
          $('.input-span input').each(function (i) {
            if ($(this).val() !== Correct_answers[i]) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#fff' });
              $(this).next().css('display', 'initial');
            }
            else {
              Correct_Answers_Count++;
            }
          });
          $('.question-mark input').each(function (i) {
            if ($(this).val() !== correctQuestionMark[i]) {
              $(this).css({ 'color': '#ed1a1a' });
              $(this).parent().next().css('display', 'initial');
            }
            else {
              Correct_Answers_Count++;
            }
          });
          // $('.answer').css('display','unset');
          //$('.answer-span').css('display','initial');
          //$('.correct_answer').css('display','initial');
          $('input,.help-box,.input-helpbox .help-box').css('pointer-events', 'none');
          $('input,.options span').css('pointer-events', 'none');
          var percentage = (Correct_Answers_Count * 100) / 20;
          var ImgURL = '';
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

          $(Spaninput).parent().removeClass('bd');
          $(QuestionMarkinput).removeClass('question-mark-bd');
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 5 blanks and boxes before submitting');
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
      var t = new Date().getTime();
      $('.imgBox img').attr("src", 'assets/images/fabulous.gif' + '?' + t);
    }
  }

}
