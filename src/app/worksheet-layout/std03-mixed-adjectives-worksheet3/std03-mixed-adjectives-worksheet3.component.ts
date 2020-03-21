import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-mixed-adjectives-worksheet3',
  templateUrl: './std03-mixed-adjectives-worksheet3.component.html',
  styleUrls: ['./std03-mixed-adjectives-worksheet3.component.scss']
})
export class Std03MixedAdjectivesWorksheet3Component implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color','#22a650');
  }

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
          var Correct_Answers_Feelings = ["thankful", "splendid", "confused", "elated"];
          var Correct_Answers_Shape = ["curved", "oval", "broad", "triangular"];
          var Correct_Answers_Size = ["miniature", "chubby", "gigantic", "massive"];
          var Correct_Answers_Taste = ["sticky", "bland", "juicy", "greasy"];
          var Correct_Answers_Colour = ["yellow", "reddish", "violet", "golden"];
          var Feelings_Answers = [];
          var Shape_Answers = [];
          var Size_Answers = [];
          var Taste_Answers = [];
          var Colour_Answers = [];
          $('.feeling input').each(function (i) {
            if (Correct_Answers_Feelings.indexOf($(this).val().toString()) == -1) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
            }
            else {
              Feelings_Answers.push($(this).val());
              Correct_Answers_Count++;
            }
          });
          $('.shape input').each(function (i) {
            if (Correct_Answers_Shape.indexOf($(this).val().toString()) == -1) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
            }
            else {
              Shape_Answers.push($(this).val());
              Correct_Answers_Count++;
            }
          });
          $('.size input').each(function (i) {
            if (Correct_Answers_Size.indexOf($(this).val().toString()) == -1) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
            }
            else {
              Size_Answers.push($(this).val());
              Correct_Answers_Count++;
            }
          });
          $('.taste_touch input').each(function (i) {
            if (Correct_Answers_Taste.indexOf($(this).val().toString()) == -1) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
            }
            else {
              Taste_Answers.push($(this).val());
              Correct_Answers_Count++;
            }
          });
          $('.colour input').each(function (i) {
            if (Correct_Answers_Colour.indexOf($(this).val().toString()) == -1) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
            }
            else {
              Colour_Answers.push($(this).val());
              Correct_Answers_Count++;
            }
          });
          var Feelings_Wrong_Answers = [];
          var Shape_Wrong_Answers = [];
          var Size_Wrong_Answers = [];
          var Taste_Wrong_Answers = [];
          var Colour_Wrong_Answers = [];

          Correct_Answers_Feelings.filter(function (el) {
            if ($.inArray(el, Feelings_Answers) == -1) Feelings_Wrong_Answers.push(el);
          });
          var ctr = 0;
          $('.feeling input').each(function (i) {
            if (Correct_Answers_Feelings.indexOf($(this).val().toString()) == -1) {
              $(this).siblings('.correct_answer').find('span').text(Feelings_Wrong_Answers[ctr]);
              $(this).siblings('.correct_answer').css('display', 'block');
              ctr++;
            }
          });

          Correct_Answers_Shape.filter(function (el) {
            if ($.inArray(el, Shape_Answers) == -1) Shape_Wrong_Answers.push(el);
          });
          var ctr = 0;
          $('.shape input').each(function (i) {
            if (Correct_Answers_Shape.indexOf($(this).val().toString()) == -1) {
              $(this).siblings('.correct_answer').find('span').text(Shape_Wrong_Answers[ctr]);
              $(this).siblings('.correct_answer').css('display', 'block');
              ctr++;
            }
          });

          Correct_Answers_Size.filter(function (el) {
            if ($.inArray(el, Size_Answers) == -1) Size_Wrong_Answers.push(el);
          });
          var ctr = 0;
          $('.size input').each(function (i) {
            if (Correct_Answers_Size.indexOf($(this).val().toString()) == -1) {
              $(this).siblings('.correct_answer').find('span').text(Size_Wrong_Answers[ctr]);
              $(this).siblings('.correct_answer').css('display', 'block');
              ctr++;
            }
          });

          Correct_Answers_Taste.filter(function (el) {
            if ($.inArray(el, Taste_Answers) == -1) Taste_Wrong_Answers.push(el);
          });
          var ctr = 0;
          $('.taste_touch input').each(function (i) {
            if (Correct_Answers_Taste.indexOf($(this).val().toString()) == -1) {
              $(this).siblings('.correct_answer').find('span').text(Taste_Wrong_Answers[ctr]);
              $(this).siblings('.correct_answer').css('display', 'block');
              ctr++;
            }
          });

          Correct_Answers_Colour.filter(function (el) {
            if ($.inArray(el, Colour_Answers) == -1) Colour_Wrong_Answers.push(el);
          });
          var ctr = 0;
          $('.colour input').each(function (i) {
            if (Correct_Answers_Colour.indexOf($(this).val().toString()) == -1) {
              $(this).siblings('.correct_answer').find('span').text(Colour_Wrong_Answers[ctr]);
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
