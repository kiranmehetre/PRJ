import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std02-exclamation-worksheet1',
  templateUrl: './std02-exclamation-worksheet1.component.html',
  styleUrls: ['./std02-exclamation-worksheet1.component.scss']
})
export class Std02ExclamationWorksheet1Component implements OnInit {

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
      var Correct_Answers_Count = 0;
      var inputs = $('input');
      $(inputs).attr('readonly', 'readonly');
      $(inputs).css('cursor', 'pointer');

      $(inputs).click(function () {
        inputField = $(this);
        $(inputs).parent().removeClass('bd');
        $(this).parent().addClass('bd');
        inputValue = $(inputField).val();
        $(this).val("");
      });
      $('.helpans').click(function () {
        if (inputField !== undefined) {
          inputValue = $(inputField).val();
          Text = $(this).find('span').text().trim();
          $(inputField).val(Text);
        }
      });

      $('.button').click(function () {

        if ($('.button').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var Correct_Answers_Count = 0;
          var inputCount = 0;
          $('.question').each(function () {
            if ($(this).find('input[type="text"]').filter(function () { return !!$(this).val(); }).length > 0) {
              inputCount++;
              if ($(this).find('input[type="text"]').filter(function () { return $(this).val() == "!"; }).length > 0) {
                Correct_Answers_Count++;
              }
            }
          });
          console.log(Correct_Answers_Count);
          if (inputCount >= 5) {
            $(inputs).parent().removeClass('bd');
            $(inputs).each(function (i) {
              if ($.trim($(this).val().toString()) !== "!") {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).parent().next('.answer').css('display', 'inline-block');
              }
              else {
              }
            });
            $('input,.helpans').css('pointer-events', 'none');
            var percentage = (Correct_Answers_Count * 100) / 10;
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
              $('.result .TextBox h1').text('Please solve at least 5 sentences before submitting');
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
      var AllImages = ['assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
