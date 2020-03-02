import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-collective-noun-worksheet10',
  templateUrl: './std03-collective-noun-worksheet10.component.html',
  styleUrls: ['./std03-collective-noun-worksheet10.component.scss']
})
export class Std03CollectiveNounWorksheet10Component implements OnInit {

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
      var inputNumber = "";
      var spanNumber = "";
      var Correct_Answers_Count = 0;
      var inputs = $('input');
      $(inputs).attr('readonly', 'readonly');
      $(inputs).css('cursor', 'pointer');

      $(inputs).click(function () {
        inputField = $(this);
        $(inputs).parent().removeClass('bd');
        $(this).parent().addClass('bd');
        inputValue = $(inputField).val();
        debugger;
        inputNumber = $(this).closest('.input-answer').find('.no span').text().trim().replace('.', '');
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $("u").filter(function () {
          return $(this).text() === inputValue;
        }).removeClass('click');
        $(this).val("");
      });
      $('u').click(function () {
        debugger;
        spanNumber = $(this).closest('.question').find('.number span').text().trim().replace(')', '');
        if (inputField !== undefined && spanNumber === inputNumber) {
          inputValue = $(inputField).val();
          Text = $(this).text().trim();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1) {
            $("u").filter(function () {
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
          var Correct_Answers_Count = 0;
          var inputCount = $('input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          if (inputCount >= 10) {
            $(inputs).parent().removeClass('bd');
            var Correct_Answers_Count = 0;
            var Correct_Answers_Collective_Nouns = ["army", "pile", "herd", "pack", "group", "batch", "regiment", "flock", "colony", "shoal"];
            var Correct_Answers_Common_Nouns = ["ants", "papers", "cattle", "cards", "people", "cookies", "soldiers", "pigeons", "bats", "fishes"];

            var ctr = 0;
            $('.collective-noun input').each(function (i) {
              if (Correct_Answers_Collective_Nouns.indexOf($(this).val().toString()) == -1) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).parent().siblings('.answer-div').find('span').text(Correct_Answers_Collective_Nouns[ctr]);
                $(this).parent().siblings('.answer-div').css('display', 'block');
              }
              else {
                Correct_Answers_Count++;
              }
              ctr++;
            });

            var ctr = 0;
            $('.common-noun input').each(function (i) {
              if (Correct_Answers_Common_Nouns.indexOf($(this).val().toString()) == -1) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).parent().siblings('.answer-div').find('span').text(Correct_Answers_Common_Nouns[ctr]);
                $(this).parent().siblings('.answer-div').css('display', 'block');
              }
              else {
                Correct_Answers_Count++;
              }
              ctr++;
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
            $('input,.text-container span').css('pointer-events', 'none');
            setTimeout(function () {
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            }, 500);
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 10 blanks before submitting');
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
