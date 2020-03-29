import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-mixed-noun-worksheet5',
  templateUrl: './std01-mixed-noun-worksheet5.component.html',
  styleUrls: ['./std01-mixed-noun-worksheet5.component.scss']
})
export class Std01MixedNounWorksheet5Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
    const globalThis = this;

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
        $(inputs).parent().removeClass('bd');
        $(this).parent().addClass('bd');
        inputValue = $(inputField).val();
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $("u").filter(function () {
          return $(this).text().trim() === inputValue;
        }).removeClass('click');
        $(this).val("");
      });
      $('u').click(function () {
        if (inputField !== undefined) {
          Text = $(this).text().replace('.', '');
          inputValue = $(inputField).val();

          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $("u").filter(function () {
              return $(this).text().trim() === inputValue;
            }).removeClass('click');
          }
          if (ClickAnswer.indexOf(Text) < 0) {
            $(this).addClass('click');
          }
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
          var inputCount = $('input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          if (inputCount >= 8) {
            $(inputs).removeClass('bd');
            $(inputs).parent().removeClass('bd');
            var Proper_Noun_Correct_Answers = ["The Great Wall", "Aladin", "Wendy", "Japan", "China", "Frankie"];
            var Common_Noun_Correct_Answers = ["carpet", "prize", "game", "chess", "movie", "friends", "land", "sun", "apples", "farm"];
            var Proper_Noun_Answers = [];
            var Common_Noun_Answers = [];
            $('.proper_noun input').each(function (i) {
              if (Proper_Noun_Correct_Answers.indexOf($(this).val().toString()) == -1) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                if ($(this).val() !== "") {
                  Correct_Answers_Count--;
                }
              }
              else {
                Proper_Noun_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });

            $('.common_noun input').each(function (i) {
              if (Common_Noun_Correct_Answers.indexOf($(this).val().toString()) == -1) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                if ($(this).val() !== "") {
                  Correct_Answers_Count--;
                }
              }
              else {
                Common_Noun_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });

            var Proper_Noun_Wrong_Answers = [];
            var Common_Noun_Wrong_Answers = [];

            Proper_Noun_Correct_Answers.filter(function (el) {
              if ($.inArray(el, Proper_Noun_Answers) == -1) Proper_Noun_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.proper_noun input').each(function (i) {
              if (Proper_Noun_Correct_Answers.indexOf($(this).val().toString()) == -1) {
                if (Proper_Noun_Wrong_Answers[ctr] == "The Great Wall") {
                  $(this).parent().siblings('.answer').addClass('wall');
                }
                $(this).parent().siblings('.answer').text(Proper_Noun_Wrong_Answers[ctr]);
                $(this).parent().siblings('.answer').css('display', 'unset');
                ctr++;
              }
            });

            Common_Noun_Correct_Answers.filter(function (el) {
              if ($.inArray(el, Common_Noun_Answers) == -1) Common_Noun_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.common_noun input').each(function (i) {
              if (Common_Noun_Correct_Answers.indexOf($(this).val().toString()) == -1) {
                $(this).parent().siblings('.answer').text(Common_Noun_Wrong_Answers[ctr]);
                $(this).parent().siblings('.answer').css('display', 'unset');
                ctr++;
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
            $('input,.text-container u').css('pointer-events', 'none');

          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 8 blanks before submitting');
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
