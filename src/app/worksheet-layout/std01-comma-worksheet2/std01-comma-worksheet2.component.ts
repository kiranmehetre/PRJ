import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-comma-worksheet2',
  templateUrl: './std01-comma-worksheet2.component.html',
  styleUrls: ['./std01-comma-worksheet2.component.scss']
})
export class Std01CommaWorksheet2Component implements OnInit {

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
    $('input').each(function (i) {

      $(this).attr('id', 'question' + i);

      var id = $(this).attr('id', 'question' + i);
    });
    $('input').attr('readonly', 'readonly');

    var inputs = document.querySelectorAll('input');
    var inputField;

    $('input').on('click', function () {
      inputField = $(this);
      $('input').removeClass('bd');
      $(this).addClass('bd');
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
        if (inputCount >= 4) {

          $('input').removeClass('bd');

          var Correct_Answers = [",", ",", ",", ",", ",", ",", ",", ","];
          console.log('input');
          console.log(Correct_Answers);

          $('.question').each(function (i) {
            if (i == 6 || i == 7) {
              var input = $(this).find('input');
              var isTrue = false;
              $(input).each(function () {
                if ($(this).val() !== ",") {
                  $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                  // $(this).parents().siblings('.answer-span').css('display','inline-block');
                  $(this).siblings('.correct-answer').css('visibility', 'visible');
                }
                else {
                  isTrue = true
                }
              });
              if (isTrue) {
                Correct_Answers_Count++;
              }
            }
            else {
              if ($(this).find('input').val() !== Correct_Answers[i]) {
                $(this).find('input').css({ 'color': '#ed1a1a', 'border-color': '#000' });

                $(this).find('input').siblings('.correct-answer').css('visibility', 'visible');
              }
              else {
                Correct_Answers_Count++;
              }
            }
          });
          $('input,.helpbox-ans').css('pointer-events', 'none');
          var percentage = (Correct_Answers_Count * 100) / 8;
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
            $('.result .TextBox h1').text('Please solve at least 4 sentences before submitting');
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

}
