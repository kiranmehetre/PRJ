import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-question-mark-worksheet1',
  templateUrl: './std03-question-mark-worksheet1.component.html',
  styleUrls: ['./std03-question-mark-worksheet1.component.scss']
})
export class Std03QuestionMarkWorksheet1Component implements OnInit {

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
    var inputValue;
    //var inputs=$('input');


    var secondinputField;
    var secondinputValue;
    $('input').attr('readonly', 'readonly');
    $('.content > input:first-child').on('click', function () {
      secondinputField = undefined;
      inputField = $(this);
      inputValue = $(this).val();
      $('input').removeClass("bd");
      $('input').parent().removeClass("bd");
      $(this).addClass('bd');

      if (inputValue == "What") {
        var index = clickAnswer.indexOf(inputValue);
        if (index > -1) {
          clickAnswer.splice(index, 1);
        }
        $("[data-text=" + $(inputField).attr('data-text') + "]").removeClass('click');
      }
      else {
        clickAnswer = $.grep(clickAnswer, function (value) {
          return value != inputValue;
        });
        $(".option").filter(function () {
          return $(this).text() === inputValue;
        }).removeClass('click');

      }
      $(this).val("");


    });


    // second input
    $('.input-div input').on('click', function () {
      inputField = undefined;
      secondinputField = $(this);
      secondinputValue = $(this).val();
      $('input').parent().removeClass("bd");
      $(this).parent().addClass('bd');
      $('input').removeClass("bd");
      $(this).val("");
    });


    var Text = '';
    var HelpBox = [];
    $('.Option_Container .option').each(function () {
      $(this).on('click', function (event) {
        inputValue = $(inputField).val();
        if (inputField !== undefined) {
          secondinputField = undefined;
          Text = $(this).text().trim();
          $(inputField).attr('data-text', $(this).attr('data-text'));
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
            if (inputValue == "What") {
              $("[data-text=" + $(inputField).attr('data-text') + "]").removeClass('click');
            }
            else {
              $(".option").filter(function () {
                return $(this).text() === inputValue;
              }).removeClass('click');
            }
          }
          else {
            if (Text == "What") {
              $(".option").filter(function () {
                return $(this).text() === inputValue;
              }).removeClass('click');
            }
          }
          $(this).addClass('click');
          if (clickAnswer.indexOf(Text) > -1) {
            if (Text == "What") {
              var TextCount = countInArray(clickAnswer, Text);
              if (TextCount > 1) {

              }
              else {
                clickAnswer = $.grep(clickAnswer, function (value) {
                  return value != inputValue;
                });
                $(inputField).val(Text);
                clickAnswer.push(Text);
              }
            }
          }
          else {
            clickAnswer = $.grep(clickAnswer, function (value) {
              return value != inputValue;
            });
            $(inputField).val(Text);
            clickAnswer.push(Text);
          }
        }
      });
    });

    var SecodText = "";
    $('.imgBox .option').on('click', function (event) {

      if (secondinputField !== undefined) {
        inputField = undefined;
        SecodText = $(this).text().trim();
        $(secondinputField).val(SecodText);
      }
    });



    $('.button').click(function () {

      if ($('.button').hasClass('playAgain')) {
        window.location.href = window.location.href;
      }
      else {
        var Correct_Answers_Count = 0;
        var FirstinputCount = $('.content > input:first-child').filter(function () {
          return !!$(this).val();
        }).length;
        var SecondinputCount = $('.input-div input').filter(function () {
          return !!$(this).val();
        }).length;
        if (FirstinputCount >= 5 && SecondinputCount >= 5) {
          var Correct_answers = ["When", "Why", "How", "What", "Who", "Whose", "Which", "Whom", "Where", "What"];
          $('.content > input:first-child').each(function (i) {
            if ($(this).val().toString().trim() !== Correct_answers[i]) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              $(this).siblings('.correct_answer').css('display', 'inline-block');
              //Correct_Answers_Count--;
            }
            else {
              Correct_Answers_Count++;
            }
          });
          $('.input-div input').each(function (i) {
            if ($(this).val().toString().trim() !== "?") {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              $(this).siblings('.correct_answer').css('display', 'inline-block');
            }
            else {
              Correct_Answers_Count++;
            }
          });
          $('input,.content > input:first-child,.Option_Container .option,.option').css('pointer-events', 'none');
          $('input').removeClass('bd');
          $('input').parent().removeClass('bd');
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
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 5 blanks and boxes before submitting');
          }, 500);
        }
      }
    });

    $('.result,.close').click(function () {
      $('.result').fadeOut();
      $('.close').show();
    });


    function setImages() {
      var t = new Date().getTime();
      $('.imgBox-result img').attr("src", 'assets/images/fabulous.gif' + '?' + t);
    }
    
    function countInArray(array, what) {
      var count = 0;
      for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
          count++;
        }
      }
      return count;
    }
  }

}
