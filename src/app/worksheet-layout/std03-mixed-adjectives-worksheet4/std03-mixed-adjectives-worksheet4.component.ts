import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-mixed-adjectives-worksheet4',
  templateUrl: './std03-mixed-adjectives-worksheet4.component.html',
  styleUrls: ['./std03-mixed-adjectives-worksheet4.component.scss']
})
export class Std03MixedAdjectivesWorksheet4Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
     $('.loadingDiv').hide();
      setImages();
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
      var inputNumber = "";
      var spanNumber = "";
      var Text = "";
      var Correct_Answers_Count = 0;
      var inputs = $('input');
      $(inputs).attr('readonly', 'readonly');
      $(inputs).css('cursor', 'pointer');

      $(inputs).click(function () {
        inputField = $(this);
        $(inputs).removeClass('bd');
        $(this).addClass('bd');
        inputNumber = $(this).closest('.Question_RoW').find('.number').text();
        inputValue = $(inputField).val();
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".underlined").filter(function () {
          return $(this).text().trim() === inputValue;
        }).removeClass('click');
        $(this).val("");
      });
      $('.underlined').click(function () {
        spanNumber = $(this).closest('.Question_RoW').find('.number').text();
        if (inputField !== undefined && spanNumber == inputNumber) {
          inputValue = $(inputField).val();
          Text = $(this).text().trim();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $(".underlined").filter(function () {
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
      var i = 0;

      $('.myButton').click(function () {

        if ($('.myButton').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var Correct_Answers_Count = 0;
          var AdjectiveinputCount = $('.Answer.Adjective input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          var NouninputCount = $('.Answer.Noun input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          var correct = 0;
          var underlinedCount = 0;
          if (AdjectiveinputCount >= 5 && NouninputCount >= 5) {
            $(inputs).removeClass('bd');
            var Correct_Answers_Adjectives = ["scary", "rainy", "straw", "thick", "red", "rectangular", "enough", "simple", "valuable", "playful"];
            $('.Answer.Adjective input').each(function (i) {
              if ($.trim($(this).val().toString()) !== Correct_Answers_Adjectives[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).siblings('.correct_answer').css('display', 'block');
              }
              else {
                Correct_Answers_Count++;
              }
            });
            var Correct_Answers_Nouns = ["stories", "day", "hat", "milkshake", "bicycle", "box", "juice", "language", "metal", "puppy"];
            $('.Answer.Noun input').each(function (i) {
              if ($.trim($(this).val().toString()) !== Correct_Answers_Nouns[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).siblings('.correct_answer').css('display', 'block');
              }
              else {
                Correct_Answers_Count++;
              }
            });
            var percentage = (Correct_Answers_Count * 100) / 20;
            //console.log(Correct_Answers_Count);
            //console.log(percentage);
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
            $('input,.content span,.underlined').css('pointer-events', 'none');
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 5 blanks of Adjective and 5 blanks of Nouns before submitting');
            }, 500);
          }

          $('.result,.close').click(function () {
            $('.result').fadeOut();
            $('.close').show();
          });
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
  }

}
