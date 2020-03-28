import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std02-singular-plural-nouns-worksheet1',
  templateUrl: './std02-singular-plural-nouns-worksheet1.component.html',
  styleUrls: ['./std02-singular-plural-nouns-worksheet1.component.scss']
})
export class Std02SingularPluralNounsWorksheet1Component implements OnInit {

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
      var inputValue;
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var Correct_Answers_Count = 0;
      var inputs = $('input');
      $(inputs).attr('readonly', 'readonly');
      $(inputs).css('cursor', 'pointer');

      $(inputs).click(function () {
        inputField = $(this);
        $(inputs).removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(inputField).val();
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".help-box img").filter(function () {
          return $(this).attr('data-text').trim() === inputValue;
        }).removeClass('click');
        $(this).val("");
      });
      $('.help-box img').click(function () {
        if (inputField !== undefined) {
          inputValue = $(inputField).val();
          Text = $(this).attr('data-text').trim();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $(".help-box img").filter(function () {
              return $(this).attr('data-text').trim() === inputValue;
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
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var Correct_Answers_Count = 0;
          var inputCount = $('input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          if (inputCount >= 6) {
            $(inputs).removeClass('bd');
            var SingularInputs = $('.Question_Body > .row > .col-6:nth-child(1) input');
            var PluralInputs = $('.Question_Body > .row > .col-6:nth-child(2) input');
            var inputArray = [SingularInputs, PluralInputs];
            var Correct_Answers = [];
            Correct_Answers[0] = ["dress", "hand", "dinosaur", "bowl", "spoon", "song"];
            Correct_Answers[1] = ["presents", "oxen", "moons", "porches", "mangoes", "toys"];
            for (var j = 0; j <= 1; j++) {
              var Wrong_Answers = [];
              var inputField_Array = [];
              var inputValues = [];
              $(inputArray[j]).each(function () {
                if (Correct_Answers[j].indexOf($(this).val()) < 0) {
                  inputField_Array.push($(this));
                }
                else {
                  inputValues.push($(this).val());
                  Correct_Answers_Count++;
                }
              });
              Correct_Answers[j].filter(function (el) {
                if ($.inArray(el, inputValues) == -1) Wrong_Answers.push(el);
              });
              for (var i = 0; i <= Wrong_Answers.length; i++) {
                $(inputField_Array[i]).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(inputField_Array[i]).siblings('.correct_answer').find('span').text(Wrong_Answers[i]);
                $(inputField_Array[i]).siblings('.correct_answer').css('visibility', 'visible');
              }
            }
            $('input,.help-box img').css('pointer-events', 'none');
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
