import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std02-question-mark-worksheet1',
  templateUrl: './std02-question-mark-worksheet1.component.html',
  styleUrls: ['./std02-question-mark-worksheet1.component.scss']
})
export class Std02QuestionMarkWorksheet1Component implements OnInit {

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
    var Correct_Answers_Count = 0;
    $(".input-span").each(function (i) {

      $(this).attr('id', 'question' + i);

      var id = $(this).attr('id', 'question' + i);
    });
    $('input').attr('readonly', 'readonly');

    var inputs = document.querySelectorAll('input');
    var inputField;

    $('input').on('click', function () {
      inputField = $(this);
      $('.input-span').removeClass('bd');
      $(this).parent().addClass('bd');
      $(this).val("");
    });

    var Text = '';
    $('.helpbox-ans').on('click', function (event) {
      var Text = $(this).text();
      if (inputField !== undefined) {
        var Text = $(this).text();
        $(inputField).val(Text.trim());
      }
    });
    $('.button').click(function () {
      if ($('.button').hasClass('playAgain')) {
        window.location.href = window.location.href;
      }
      else {
        var inputCount = 0;
        $('.question').each(function () {
          if ($(this).find('input').filter(function () { return !!$(this).val(); }).length > 0) {
            inputCount++;
          }
        });
        if (inputCount >= 5) {
          $('.input-span').removeClass('bd');
          $(inputs).each(function (i) {
            if ($.trim($(this).val().toString()) !== "?") {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              $(this).parents().siblings('.correct-answer').css('visibility', 'visible');
            }
            else {
              Correct_Answers_Count++;
            }
          });

          $('input,.helpbox-ans').css('pointer-events', 'none');
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
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 5 boxes before submitting');
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
      $('.imgBox-result img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
