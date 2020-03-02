"use strict"
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-rhyming-words-worksheet7',
  templateUrl: './std01-rhyming-words-worksheet7.component.html',
  styleUrls: ['./std01-rhyming-words-worksheet7.component.scss']
})
export class Std01RhymingWordsWorksheet7Component implements OnInit {

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
    var clickAnswer = [];
    var inputValue = "";
    var inputs = $('.engine');
    var Text = '';
    var HelpBox = [];
    $(inputs).on('click', function () {
      inputField = $(this);
      inputValue = $(inputField).parent().find('.answer_img').attr("data-text");
      $(inputs).removeClass("bd");
      $(this).addClass('bd');
      clickAnswer = $.grep(clickAnswer, function (value) {
        return value != inputValue;
      });
      $(".Option img").filter(function () {
        return $(this).attr('data-text') === inputValue;
      }).removeClass('click');
      // $(this).next().find('span').text("");
      $(inputField).parent().find('.answer_img').attr({ "src": Text, "data-text": '' });
      $(this).next().removeClass('set_answer vissible');
    });


    $('.Option img').each(function () {
      $(this).on('click', function (event) {

        //    Text=$(this).attr('data-text');
        inputValue = $(inputField).parent().find('.answer_img').attr("data-text");
        if (inputField !== undefined) {

          Text = $(this).attr('data-text');
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
            $(".Option img").filter(function () {
              return $(this).attr('data-text') === inputValue;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (clickAnswer.indexOf(Text) > -1) {
          }
          else {
            clickAnswer = $.grep(clickAnswer, function (value) {
              return value != inputValue;
            });
            // $(inputField).find('span').text(Text);
            // $(inputField).css('visibility','initial');
            // $(inputField).parent().find('.answer_img').attr("src",Text);
            $(inputField).parent().find('.answer_img').attr({ "src": Text, "data-text": Text });
            $(inputField).parent().find('.answer_img').addClass('set_answer vissible');
            //$(inputField).val(Text);
            clickAnswer.push(Text);
          }
        }
      });


    });
    $('.button').click(function () {
      if ($('.button').hasClass('playAgain')) {
        window.location.href = window.location.href;
      }
      else {
        var Correct_Answers_Count = 0;
        if ($('.set_answer').length >= 3) {
          var Correct_answers = ["option_2", "option_4", "option_5", "option_1", "option_3"];
          $('.Question').each(function (i) {

            var set_answer = $(this).find('.answer_img').attr('data-text');
            if (set_answer !== "" && set_answer !== undefined) {
              if (set_answer.indexOf(Correct_answers[i]) < 0) {
                // $(this).find('.answer_img').addClass('vissible');
                $(this).find('.main-correct-answer').css('display', 'initial');
              }
              else {

                Correct_Answers_Count++;
                // $(this).find('.signal').attr('src', 'assets/std01-rhyming-words-worksheet7/img/green_signal.png');
                // $(this).find('div').addClass('slide-out');
                $(this).find('.signal').addClass('green_signal');
                $(this).find('div').addClass('move_train')
                $(this).find('.answer_img').addClass('vissible');
                // $(this).find('img').addClass('bulb-glow');
              }
            }
            else {
              $(this).find('.answer_img').attr('src', 'assets/std01-rhyming-words-worksheet7/img/' + Correct_answers[i] + '.png');
              // $(this).find('.answer_img').addClass('vissible');
              $(this).find('.main-correct-answer').css('display', 'initial');
            }

          });
          // $('.answer-div').css('display','inline-block');
          $(inputs).removeClass("bd");
          $('.Option_Container img,input').css('pointer-events', 'none');
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
            setTimeout(function () {
              this.green_signal();
            }, 2400);
          }, 500);

         

          setTimeout(function () {
            $('.button').addClass('playAgain');
            $('.button.playAgain').text('solve again');
          }, 500);
          $(inputs).removeClass("bd");
          $('.question-right').css({ 'visibility': 'visible' });
          $('img').css('pointer-events', 'none');
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please join at least 3 wagons before submitting');
          }, 500);
        }
      }

    });

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

  public green_signal() {
    $('.green_signal').attr('src', 'assets/std01-rhyming-words-worksheet7/img/green_signal.png');
    $('.move_train').addClass('slide-out');
  }

}
