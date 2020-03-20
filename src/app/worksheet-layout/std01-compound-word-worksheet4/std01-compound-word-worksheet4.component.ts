import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-compound-word-worksheet4',
  templateUrl: './std01-compound-word-worksheet4.component.html',
  styleUrls: ['./std01-compound-word-worksheet4.component.scss']
})
export class Std01CompoundWordWorksheet4Component implements OnInit {

  constructor() { }

  ngOnInit() {

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
      var inputFieldSibling;
      var inputValue;
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var ContentText = "";
      var Answer = "";
      var inputs = $('.span-input1 input');
      var secondInputs = $('.span-input2 input');
      $(inputs).attr('readonly', 'readonly');
      $(secondInputs).css('pointer-events', 'none');
      $(inputs).css('cursor', 'pointer');
      var inputParent;
      var textValue;

      $(inputs).click(function () {
        inputField = $(this);
        inputParent = $(inputField).parents().eq(3);
        inputFieldSibling = $(inputParent).find('.span-input2 input');
        $(inputs).removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(inputField).val();
        $(this).val("");
        $(inputFieldSibling).val("");
      });
      $('.option').click(function () {
        if (inputField !== undefined) {
          inputValue = $(inputField).val();
          Text = $(this).find('.helpbox-ans-text span').text().trim();
          ContentText = $(inputParent).find('.content').text();
          Answer = Text + ContentText;
          $(inputField).val(Text);
          $(inputFieldSibling).val(Answer);
        }
      });

      $('.button').click(function () {

        if ($('.button').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var Correct_Answers_Count = 0;
          var inputCount = $(inputs).filter(function () {
            return !!$(this).val();
          }).length;
          if (inputCount >= 5) {
            $(inputs).removeClass('bd');
            var Correct_Answers = [["rain", "snow"], "snow", "sun", "snow", "rain", "sun", "snow", "rain", "sun", "sun"];
            $(inputs).each(function (i) {
              if (Correct_Answers[i].indexOf($(this).val().toString()) < 0) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).parents().eq(1).siblings('.correct-ans1').css('display', 'inline-block');
                $(this).parents().eq(3).find('.span-input2 input').css({ 'color': '#ed1a1a', 'border-color': '#fff' });
                $(this).parents().eq(3).find('.correct-ans2').css('display', 'inline-block');
              }
              else {
                if ($(this).val() !== "") {
                  Correct_Answers_Count++;
                }
                else {
                  $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                  $(this).parents().eq(1).siblings('.correct-ans1').css('display', 'inline-block');
                  $(this).parents().eq(3).find('.span-input2 input').css({ 'color': '#ed1a1a', 'border-color': '#fff' });
                  $(this).parents().eq(3).find('.correct-ans2').css('display', 'inline-block');
                }
              }
            });
            $('input,.option').css('pointer-events', 'none');
            var percentage = (Correct_Answers_Count * 100) / 10;
            console.log(percentage);
            console.log(Correct_Answers_Count);
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
  }

}
