import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-compound-word-worksheet7',
  templateUrl: './std03-compound-word-worksheet7.component.html',
  styleUrls: ['./std03-compound-word-worksheet7.component.scss']
})
export class Std03CompoundWordWorksheet7Component implements OnInit {

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
        $(".option").filter(function () {
          return $(this).find('span').text() === inputValue;
        }).removeClass('click');
        $(this).val("");
      });
      $('.option').click(function () {
        if (inputField !== undefined) {
          inputValue = $(inputField).val();
          Text = $(this).find('span').text();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $(".option").filter(function () {
              return $(this).find('span').text() === inputValue;
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
          var Correct_Answers_Count = 0;
          var inputCount = $('input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          if (inputCount >= 9) {
            $(inputs).removeClass('bd');
            var Correct_Answers_Count = 0;
            var First_Block_Correct_Answers = ["sheet", "room", "time"];
            var First_Block_Answers = [];
            var First_Block_Wrong_Answers = [];
            $('.First_Block input').each(function (i) {
              if (First_Block_Correct_Answers.indexOf($(this).val().toString()) == -1) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              }
              else {
                First_Block_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });
            First_Block_Correct_Answers.filter(function (el) {
              if ($.inArray(el, First_Block_Answers) == -1) First_Block_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.First_Block input').each(function (i) {
              if (First_Block_Correct_Answers.indexOf($(this).val().toString()) == -1) {
                var strClass = $(this).attr('class');
                $(this).siblings('.correct_answer.' + strClass).text(First_Block_Wrong_Answers[ctr]);
                $(this).siblings('.correct_answer.' + strClass).css('display', 'inline-block');
                ctr++;
              }
            });

            var Second_Block_Correct_Answers = ["shell", "shore", "food"];
            var Second_Block_Answers = [];
            var Second_Block_Wrong_Answers = [];
            $('.Second_Block input').each(function (i) {
              if (Second_Block_Correct_Answers.indexOf($(this).val().toString()) == -1) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              }
              else {
                Second_Block_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });
            Second_Block_Correct_Answers.filter(function (el) {
              if ($.inArray(el, Second_Block_Answers) == -1) Second_Block_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.Second_Block input').each(function (i) {
              if (Second_Block_Correct_Answers.indexOf($(this).val().toString()) == -1) {
                var strClass = $(this).attr('class');
                $(this).siblings('.correct_answer.' + strClass).text(Second_Block_Wrong_Answers[ctr]);
                $(this).siblings('.correct_answer.' + strClass).css('display', 'inline-block');
                ctr++;
              }
            });

            var Third_Block_Correct_Answers = ["ground", "developed", "line"];
            var Third_Block_Answers = [];
            var Third_Block_Wrong_Answers = [];
            $('.Third_Block input').each(function (i) {
              if (Third_Block_Correct_Answers.indexOf($(this).val().toString()) == -1) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              }
              else {
                Third_Block_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });
            Third_Block_Correct_Answers.filter(function (el) {
              if ($.inArray(el, Third_Block_Answers) == -1) Third_Block_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.Third_Block input').each(function (i) {
              if (Third_Block_Correct_Answers.indexOf($(this).val().toString()) == -1) {
                var strClass = $(this).attr('class');
                $(this).siblings('.correct_answer.' + strClass).text(Third_Block_Wrong_Answers[ctr]);
                $(this).siblings('.correct_answer.' + strClass).css('display', 'inline-block');
                ctr++;
              }
            });

            var Fourth_Block_Correct_Answers = ["glasses", "light", "burn"];
            var Fourth_Block_Answers = [];
            var Fourth_Block_Wrong_Answers = [];
            $('.Fourth_Block input').each(function (i) {
              if (Fourth_Block_Correct_Answers.indexOf($(this).val().toString()) == -1) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              }
              else {
                Fourth_Block_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });
            Fourth_Block_Correct_Answers.filter(function (el) {
              if ($.inArray(el, Fourth_Block_Answers) == -1) Fourth_Block_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.Fourth_Block input').each(function (i) {
              if (Fourth_Block_Correct_Answers.indexOf($(this).val().toString()) == -1) {
                var strClass = $(this).attr('class');
                $(this).siblings('.correct_answer.' + strClass).text(Fourth_Block_Wrong_Answers[ctr]);
                $(this).siblings('.correct_answer.' + strClass).css('display', 'inline-block');
                ctr++;
              }
            });

            var Fifth_Block_Correct_Answers = ["phones", "ache", "quarters"];
            var Fifth_Block_Answers = [];
            var Fifth_Block_Wrong_Answers = [];
            $('.Fifth_Block input').each(function (i) {
              if (Fifth_Block_Correct_Answers.indexOf($(this).val().toString()) == -1) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              }
              else {
                Fifth_Block_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });
            Fifth_Block_Correct_Answers.filter(function (el) {
              if ($.inArray(el, Fifth_Block_Answers) == -1) Fifth_Block_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.Fifth_Block input').each(function (i) {
              if (Fifth_Block_Correct_Answers.indexOf($(this).val().toString()) == -1) {
                var strClass = $(this).attr('class');
                $(this).siblings('.correct_answer.' + strClass).text(Fifth_Block_Wrong_Answers[ctr]);
                $(this).siblings('.correct_answer.' + strClass).css('display', 'inline-block');
                ctr++;
              }
            });

            var Sixth_Block_Correct_Answers = ["coat", "fall", "drop"];
            var Sixth_Block_Answers = [];
            var Sixth_Block_Wrong_Answers = [];
            $('.Sixth_Block input').each(function (i) {
              if (Sixth_Block_Correct_Answers.indexOf($(this).val().toString()) == -1) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              }
              else {
                Sixth_Block_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });
            Sixth_Block_Correct_Answers.filter(function (el) {
              if ($.inArray(el, Sixth_Block_Answers) == -1) Sixth_Block_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.Sixth_Block input').each(function (i) {
              if (Sixth_Block_Correct_Answers.indexOf($(this).val().toString()) == -1) {
                var strClass = $(this).attr('class');
                $(this).siblings('.correct_answer.' + strClass).text(Sixth_Block_Wrong_Answers[ctr]);
                $(this).siblings('.correct_answer.' + strClass).css('display', 'inline-block');
                ctr++;
              }
            });
            $('input,.option').css('pointer-events', 'none');
            var percentage = (Correct_Answers_Count * 100) / 18;
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

          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 9 blanks before submitting');
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
      $('.imgBox-result img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
