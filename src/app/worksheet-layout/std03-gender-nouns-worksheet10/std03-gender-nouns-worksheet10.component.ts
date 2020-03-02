import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-gender-nouns-worksheet10',
  templateUrl: './std03-gender-nouns-worksheet10.component.html',
  styleUrls: ['./std03-gender-nouns-worksheet10.component.scss']
})
export class Std03GenderNounsWorksheet10Component implements OnInit {

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
    var text = $('.content').text();
    var $words = text.split(" ");
    var $newText = "";
    $.each($words, function (i, val) {
      $newText = $newText + '<span style="cursor:pointer">' + val + '</span> ';
    })
    $('.content').html($newText);
    var inputField;
    var inputValue;
    var ClickAnswer = [];
    var Text = "";
    var HelpBox = [];
    var inputs = $('input');
    $(inputs).attr('readonly', 'readonly');
    $(inputs).click(function () {
      inputField = $(this);
      inputValue = $(this).val();
      $(inputs).removeClass('bd');
      $(this).addClass('bd');
      ClickAnswer = $.grep(ClickAnswer, function (value) {
        return value != inputValue;
      });
      $(".option").filter(function () {
        return $(this).text() === inputValue;
      }).removeClass('click');
      $(this).val("");
    });
    $('.option').click(function () {
      inputValue = $(inputField).val();
      if (inputField !== undefined) {
        inputValue = $(inputField).val();
        Text = $(this).text().trim();
        HelpBox.push(Text);
        if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
          $(".option").filter(function () {
            return $(this).text() === inputValue;
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
        window.location.href = window.location.href;
      }
      else {
        var inputCount = $('input[type="text"]').filter(function () {
          return !!$(this).val();
        }).length;

        if (inputCount >= 10) {
          $(inputs).removeClass('bd');
          var Correct_Answers_Count = 0;
          var Correct_Answers_Masculine = ["manager", "steward", "salesman", "landlord", "priest"];
          var Correct_Answers_Feminine = ["countess", "heiress", "daughter", "instructress", "mother"];
          var Correct_Answers_Common = ["director", "singer", "child", "parent", "leader"];
          var Correct_Answers_Neuter = ["computer", "story", "soup", "hill", "studio"];
          var Musculine_Answers = [];
          var Feminine_Answers = [];
          var Common_Answers = [];
          var Neuter_Answers = [];
          $('.Answer_Container.one input').each(function (i) {
            if (Correct_Answers_Masculine.indexOf($(this).val().toString()) == -1) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              if ($(this).val() !== "") {
                Correct_Answers_Count--;
              }
            }
            else {
              Musculine_Answers.push($(this).val());
              Correct_Answers_Count++;
            }
          });
          $('.Answer_Container.three input').each(function (i) {
            if (Correct_Answers_Feminine.indexOf($(this).val().toString()) == -1) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
            }
            else {
              Feminine_Answers.push($(this).val());
              Correct_Answers_Count++;
            }
          });
          $('.Answer_Container.two input').each(function (i) {
            if (Correct_Answers_Common.indexOf($(this).val().toString()) == -1) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
            }
            else {
              Common_Answers.push($(this).val());
              Correct_Answers_Count++;
            }
          });
          $('.Answer_Container.four input').each(function (i) {
            if (Correct_Answers_Neuter.indexOf($(this).val().toString()) == -1) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
            }
            else {
              Neuter_Answers.push($(this).val());
              Correct_Answers_Count++;
            }
          });
          var Musculine_Wrong_Answers = [];
          var Feminine_Wrong_Answers = [];
          var Common_Wrong_Answers = [];
          var Neuter_Wrong_Answers = [];

          Correct_Answers_Masculine.filter(function (el) {
            if ($.inArray(el, Musculine_Answers) == -1) Musculine_Wrong_Answers.push(el);
          });
          var ctr = 0;
          $('.Answer_Container.one input').each(function (i) {
            if (Correct_Answers_Masculine.indexOf($(this).val().toString()) == -1) {
              $(this).siblings('.correct_answer').find('span').text(Musculine_Wrong_Answers[ctr]);
              $(this).siblings('.correct_answer').css('display', 'block');
              ctr++;
            }
          });

          Correct_Answers_Feminine.filter(function (el) {
            if ($.inArray(el, Feminine_Answers) == -1) Feminine_Wrong_Answers.push(el);
          });
          var ctr = 0;
          $('.Answer_Container.three input').each(function (i) {
            if (Correct_Answers_Feminine.indexOf($(this).val().toString()) == -1) {
              $(this).siblings('.correct_answer').find('span').text(Feminine_Wrong_Answers[ctr]);
              $(this).siblings('.correct_answer').css('display', 'block');
              ctr++;
            }
          });

          Correct_Answers_Common.filter(function (el) {
            if ($.inArray(el, Common_Answers) == -1) Common_Wrong_Answers.push(el);
          });
          var ctr = 0;
          $('.Answer_Container.two input').each(function (i) {
            if (Correct_Answers_Common.indexOf($(this).val().toString()) == -1) {
              $(this).siblings('.correct_answer').find('span').text(Common_Wrong_Answers[ctr]);
              $(this).siblings('.correct_answer').css('display', 'block');
              ctr++;
            }
          });

          Correct_Answers_Neuter.filter(function (el) {
            if ($.inArray(el, Neuter_Answers) == -1) Neuter_Wrong_Answers.push(el);
          });
          var ctr = 0;
          $('.Answer_Container.four input').each(function (i) {
            if (Correct_Answers_Neuter.indexOf($(this).val().toString()) == -1) {
              $(this).siblings('.correct_answer').find('span').text(Neuter_Wrong_Answers[ctr]);
              $(this).siblings('.correct_answer').css('display', 'block');
              ctr++;
            }
          });
          var percentage = (Correct_Answers_Count * 100) / 20;
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

          $('input,.option').css('pointer-events', 'none');
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 10 blanks before submitting');
          }, 500);
        }
      }

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
