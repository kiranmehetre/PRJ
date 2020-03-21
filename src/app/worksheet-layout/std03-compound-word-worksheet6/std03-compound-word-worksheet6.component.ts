import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-compound-word-worksheet6',
  templateUrl: './std03-compound-word-worksheet6.component.html',
  styleUrls: ['./std03-compound-word-worksheet6.component.scss']
})
export class Std03CompoundWordWorksheet6Component implements OnInit {

  constructor() { }

  ngOnInit() {
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
      var Text = "";
      var Correct_Answers_Count = 0;
      var inputs = $('.input');
      $('input').attr('readonly', 'readonly');
      $(inputs).click(function () {
        inputField = $(this);
        $(inputs).removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(inputField).find('input').val();
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".helpbox").filter(function () {
          return $(this).find('span').not('.correct-answer span').text().trim() === inputValue;
        }).removeClass('click');
        $(this).find('input').val("");;
        $(this).parent().find('.answer-shape > span').text("");
      });
      $('.helpbox').click(function () {
        if (inputField !== undefined) {
          inputValue = $(inputField).find('input').val();;
          Text = $(this).find('span').not('.correct-answer span').text().trim();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $(".helpbox").filter(function () {
              return $(this).find('span').not('.correct-answer span').text().trim() === inputValue;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (ClickAnswer.indexOf(Text) > -1) {

          }
          else {
            // debugger;
            var checkClass = $(inputField).attr('class');
            ClickAnswer = $.grep(ClickAnswer, function (value) {
              return value != inputValue;
            });
            $(inputField).find('input').val(Text);
            var second_shape = $(inputField).parent().find('.answer-shape > span').attr('data-text');
            if (checkClass.indexOf('second-shape') > -1) {
              $(inputField).parent().find('.answer-shape > span').text(second_shape + Text);
            }
            else {
              $(inputField).parent().find('.answer-shape > span').text(Text + second_shape);
            }
            ClickAnswer.push(Text);
          }
        }
      });

      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var Correct_Answers_Count = 0;
          var inputCount = $('input').filter(function () {
            return !!$(this).val();
          }).length;
          console.log(inputCount);
          if (inputCount >= 5) {
            $(inputs).removeClass('bd');
            var Correct_Answers = ["woodcutter", "staircase", "grassland", "rattlesnake", "jackpot", "overflow", "eyesight", "somebody", "daylight", "bathtub"];
            $(inputs).each(function (i) {
              var answerText = $(this).closest('.question-container').find('.answer-shape > span').text();
              var checkText = $.trim($(this).find('span').text());
              if ($.trim(answerText) !== Correct_Answers[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).closest('.question-container').find('.correct-answer').css('visibility', 'visible');
              }
              else {
                Correct_Answers_Count++;
              }
            });
            var Correct_Answer = ["cutter", "case", "land", "snake", "pot", "over", "eye", "some", "day", "bath"];
            $(inputs).each(function (i) {
              var ShortanswerText = $(this).find('input').val().toString();
              if ($.trim(ShortanswerText) !== Correct_Answer[i]) {
                $(this).find('input').css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).find('.correct-answer').css('visibility', 'visible');
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

            $('.question-container,.helpbox-container').css('pointer-events', 'none');
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 5 blanks before submitting');
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
      var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
        'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
