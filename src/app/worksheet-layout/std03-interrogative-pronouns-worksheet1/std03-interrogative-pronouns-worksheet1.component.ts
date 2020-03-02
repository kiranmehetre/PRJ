import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-interrogative-pronouns-worksheet1',
  templateUrl: './std03-interrogative-pronouns-worksheet1.component.html',
  styleUrls: ['./std03-interrogative-pronouns-worksheet1.component.scss']
})
export class Std03InterrogativePronounsWorksheet1Component implements OnInit {

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
    $(document).ready(function () {
      var inputField;
      var inputValue;
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var TextCount = 0;
      var inputs = $('input');
      $(inputs).attr('readonly', 'readonly');

      $(inputs).click(function () {
        inputField = $(this);
        $(inputs).removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(inputField).val();
        if (inputValue == "What") {
          var index = ClickAnswer.indexOf(inputValue);
          if (index > -1) {
            ClickAnswer.splice(index, 1);
          }
          $("[data-set=" + $(inputField).attr('data-set') + "]").removeClass('shadow');
        }
        else {
          ClickAnswer = $.grep(ClickAnswer, function (value) {
            return value != inputValue;
          });
          $(".options img").filter(function () {
            return $(this).attr('data-text') === inputValue;
          }).removeClass('shadow');
        }

        $(this).val("");
      });

      $('.options img').click(function () {
        if (inputField !== undefined) {
          Text = $(this).attr('data-text');
          inputValue = $(inputField).val();
          $(inputField).attr('data-set', $(this).attr('data-set'));
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            if (inputValue == "What") {
              $(".options img").filter(function () {
                return $(this).attr('data-set') === $(inputField).attr('data-set');
              }).removeClass('shadow');
            }
            else {
              $(".options img").filter(function () {
                return $(this).attr('data-text') === inputValue;
              }).removeClass('shadow');
            }
          }
          else {
            if (inputValue == "What") {
              $("[data-set" + $(inputField).attr('data-set') + "]").removeClass('shadow');
            }
          }


          // if(HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0){
          //     if(inputValue == "What"){
          //         $("[data-set="+$(inputField).attr('data-set')+"]").removeClass('shadow');
          //     }
          //     else{
          //         $(".options img").filter(function() {
          //             return $(this).attr('data-text') === inputValue;
          //         }).removeClass('shadow');
          //     }
          // }
          // else{
          //     if(Text == "What"){
          //         $(".options img").filter(function() {
          //             return $(this).attr('data-text') === inputValue;
          //         }).removeClass('shadow');
          //     }
          // }

          $(this).addClass('shadow');
          if (ClickAnswer.indexOf(Text) > -1) {
            if (Text == "What") {
              var TextCount = countInArray(ClickAnswer, Text);
              if (TextCount > 1) {

              }
              else {
                ClickAnswer = $.grep(ClickAnswer, function (value) {
                  return value != inputValue;
                });
                $(inputField).val(Text);
                ClickAnswer.push(Text);
              }
            }
            // if(Text=="Who"){
            //     TextCount=ClickAnswer.split(Text).length-1;
            //     if(TextCount > 1){

            //     }
            //     else{
            //         ClickAnswer = $.grep(ClickAnswer, function(value) {
            //                         return value != inputValue;
            //                     });
            //         $(inputField).val(Text);
            //         ClickAnswer.push(Text);
            //     }
            // }

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
          var Correct_Answers_Count = 0;
          var inputCount = $('input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          if (inputCount >= 5) {
            var Correct_Answers = ["Who", "Which", "When", "How", "Where", "Whom", "Whose", "What", "Why", "What"];
            $(inputs).each(function (i) {
              if ($(this).val() !== Correct_Answers[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).siblings('.correct_answer').css('display', 'inline-block');
              }
              else {
                Correct_Answers_Count++;
              }
            });
            $(inputs).removeClass('bd');
            // $('.Option_Container').addClass('absolute');var ImgURL="";
            var percentage = (Correct_Answers_Count * 100) / 10;
            var ImgURL = "";
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

            $('input,.Option_Container img').css('pointer-events', 'none')
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 5 blanks before submitting');
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
