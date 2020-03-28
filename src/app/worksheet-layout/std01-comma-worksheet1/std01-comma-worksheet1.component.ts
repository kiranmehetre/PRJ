import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-comma-worksheet1',
  templateUrl: './std01-comma-worksheet1.component.html',
  styleUrls: ['./std01-comma-worksheet1.component.scss']
})
export class Std01CommaWorksheet1Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();


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
        $(this).val("");
      });
      $('.helpbox .col-3').click(function () {
        if (inputField !== undefined) {
          inputValue = $(inputField).val();
          Text = $(this).text().trim();
          $(inputField).val(Text);
        }
      });

      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var Correct_Answers_Count = 0;
          var inputCount = 0;
          $('.question-container > .row').each(function () {
            if ($(this).find('input').filter(function () { return !!$(this).val(); }).length > 0) {
              inputCount++;
            }
          });
          if (inputCount >= 4) {
            $(inputs).parent().removeClass('bd');
            $('.text-container').each(function (i) {
              var input = $(this).find('input');
              var isTrue = false;
              $(input).each(function () {
                if ($.trim($(this).val().toString()) !== ",") {
                  $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                  $(this).parent().prev('.answer-span').css('display', 'inline-block');
                }
                else {
                  isTrue = true;
                }
              });
              if (isTrue) {
                Correct_Answers_Count++;
              }
            });
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
            $('input,.helpbox .col-3').css('pointer-events', 'none');
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

          $('.result,.close').click(function () {
            $('.result').fadeOut();
            $('.close').show();
          });
        }
      });

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
