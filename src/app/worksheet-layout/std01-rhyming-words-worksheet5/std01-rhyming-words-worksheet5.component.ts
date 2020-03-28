import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-rhyming-words-worksheet5',
  templateUrl: './std01-rhyming-words-worksheet5.component.html',
  styleUrls: ['./std01-rhyming-words-worksheet5.component.scss']
})
export class Std01RhymingWordsWorksheet5Component implements OnInit {

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
      var Question;
      var QuestionValue = "";
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var Correct_Answers_Count = 0;
      var Questions = $('.Question');
      var AnswerTextArray = [];

      $(Questions).click(function () {
        Question = $(this);
        $(Questions).removeClass('shadow');
        $(this).addClass('shadow');
        QuestionValue = $(Question).attr('data-text');
        //console.log(QuestionValue);
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != QuestionValue;
        });
        $('.Option').each(function () {
          if ($(this).attr('data-text') == QuestionValue) {
            $(this).removeClass('click');
          }
        });
        $(Question).siblings('.Answer_Block').find('img').hide();
        $(Question).siblings('.Answer_Block').find('.Answers_div').hide();
        $(this).attr('data-text', '');
      });
      $('.Option').click(function () {
        AnswerTextArray = [];
        if (Question !== undefined) {
          Text = $(this).attr('data-text').trim();
          QuestionValue = $(Question).attr('data-text');
          HelpBox.push(Text);
          if (HelpBox.indexOf(QuestionValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $('.Option').each(function () {
              if ($(this).attr('data-text') == QuestionValue) {
                $(this).removeClass('click');
              }
            });
          }
          $(this).addClass('click');
          if (ClickAnswer.indexOf(Text) > -1) {

          }
          else {
            ClickAnswer = $.grep(ClickAnswer, function (value) {
              return value != QuestionValue;
            });
            ClickAnswer.push(Text);
            $(this).find('.option_div .option_text').each(function () {
              AnswerTextArray.push($(this).text());
            });
            $(Question).siblings('.Answer_Block').find('.answer_text').each(function (i) {
              $(this).text(AnswerTextArray[i]);
            });
            $(Question).siblings('.Answer_Block').find('img').show();
            $(Question).siblings('.Answer_Block').find('.Answers_div').show();
            $(Question).attr('data-text', Text);

          }
        }
      });

      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var Correct_Answers_Count = 0;
          //console.log($('.click').length);
          if ($('.click').length >= 3) {
            $(Questions).removeClass('shadow');
            var Correct_Answers = ["get", "gap", "fin", "cake", "dot"];
            $(Questions).each(function (i) {
              if ($(this).attr('data-text') !== Correct_Answers[i]) {
                if ($(this).attr('data-text') !== "'") {
                  $(this).siblings().css({ 'color': '#ed1a1a' });
                }
                $(this).siblings('.Answer_Block').find('.Right_Answers').css('display', 'grid');
              }
              else {
                Correct_Answers_Count++;
              }
            });
            var percentage = (Correct_Answers_Count * 100) / 5;
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
            $('.Question,.Option').css('pointer-events', 'none');
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please complete at least 3 chains before submitting');
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
      var AllImages = ['assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
