import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std02-question-mark-worksheet3',
  templateUrl: './std02-question-mark-worksheet3.component.html',
  styleUrls: ['./std02-question-mark-worksheet3.component.scss']
})
export class Std02QuestionMarkWorksheet3Component implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background','url(assets/std02-question-mark-worksheet3/img/bg.jpg) no-repeat center bottom fixed');
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
    var Spaninput = $('.input_div.rectangle input');
    var QuestionMarkinput = $('.input_div.circle input');
    $(Spaninput).click(function () {
      inputField = $(this);
      inputValue = $(this).val();
      $(Spaninput).removeClass('bd');
      $(this).addClass('bd');
      ClickAnswer = $.grep(ClickAnswer, function (value) {
        return value != inputValue;
      });
      $(".options.text_block .option").filter(function () {
        return $(this).text().trim() === inputValue;
      }).removeClass('click');
      $(this).val("");
    });
    $(QuestionMarkinput).click(function () {
      QuestionMarkInputField = $(this);
      $(QuestionMarkinput).parent().removeClass('bd');
      $(this).parent().addClass('bd');
      $(this).val("");
    });
    $('.options.text_block .option').click(function () {

      if (inputField !== undefined) {
        //$(inputField).val($(this).text());
        inputValue = $(inputField).val();
        var Text = $(this).text().trim();
        HelpBox.push(Text);
        if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
          $(".options.text_block .option").filter(function () {
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

    $('.options.symbol .option').click(function () {
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
        var inputRectangleCount = $('.input_div.rectangle input').filter(function () {
          return !!$(this).val();
        }).length;
        var inputCircleCount = $('.input_div.circle input').filter(function () {
          return !!$(this).val();
        }).length;
        if (inputRectangleCount >= 4 && inputCircleCount >= 4) {
          var Correct_answers = ["Which", "How", "Where", "Who", "Why", "When", "What", "Whom"];
          $('.input_div.rectangle input').each(function (i) {
            if ($(this).val() !== Correct_answers[i]) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              $(this).siblings('.correct_answer').css('visibility', 'visible');
            }
            else {
              Correct_Answers_Count++;
            }
          });
          $('.input_div.circle input').each(function (i) {
            if ($(this).val() !== "?") {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              $(this).siblings('.correct_answer').css('visibility', 'visible');
            }
            else {
              Correct_Answers_Count++;
            }
          });
          // $('.answer').css('display','unset');
          //$('.answer-span').css('display','initial');
          //$('.correct_answer').css('display','initial');
          $('input,.option').css('pointer-events', 'none');
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
          $('*').removeClass('bd');
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 4 blanks and 4 circles before submitting');
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
      var AllImages = ['assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
