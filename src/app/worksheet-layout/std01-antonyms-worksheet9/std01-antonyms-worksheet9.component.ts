import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-antonyms-worksheet9',
  templateUrl: './std01-antonyms-worksheet9.component.html',
  styleUrls: ['./std01-antonyms-worksheet9.component.scss']
})
export class Std01AntonymsWorksheet9Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
    const globalThis = this;


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

      $('input').on('click', function () {
        inputField = $(this);
        inputValue = $(this).val();
        $('*').removeClass('bd');
        $(this).parent().addClass('bd');
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".picture div").filter(function () {
          return $(this).text() === inputValue;
        }).removeClass('white');
        $(this).val("");

      });

      var Text = '';

      $('.picture').each(function () {
        $(this).on('click', function (event) {
          inputValue = $(inputField).val();
          if (inputField !== undefined) {
            inputValue = $(inputField).val();
            Text = $(this).text().trim();
            HelpBox.push(Text);
            if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
              $(".picture div").filter(function () {
                return $(this).text() === inputValue;
              }).removeClass('white');
            }
            $(this).find('div').addClass('white');
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
      });

      $('.option.green').click(function () {
        $(this).toggleClass('puzzle_click');
      });

      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var DisplayResult = "";
          var Correct_Answers_Count = 0;
          var inputCount = $('input[type="text"]').filter(function () {
            return !!$(this).val();	
          }).length;
          if (inputCount >= 4) {
            $('*').removeClass('bd');
            var Correct_Answers = ["difficult", "low", "wrong", "lose", "dark", "last", "different", "south"];
            $(inputs).each(function (i) {
              if ($(this).val() !== Correct_Answers[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#fff' });
                $(this).parents().siblings('.answer').css('display', 'block');
              }
              else {
                Correct_Answers_Count++;
              }
            });
            var percentage = (Correct_Answers_Count * 100) / 8;
            var ImgURL = "";
            if (percentage > 80) {
              DisplayResult = '.outstanding';
            }
            else if (percentage > 60) {
              DisplayResult = '.brilliant';
            }
            else if (percentage >= 50) {
              DisplayResult = '.good-work';
            }
            else if (percentage < 50) {
              DisplayResult = '.keep-practicing';
            }
            $('.line').show();
            setTimeout(function () {
              $('.result').css('display', 'flex');
              // $('.result .Text').css('content',ImgURL);
              $('.result .TextBox').hide();
              $(DisplayResult).removeClass('hide');
              $('.result .imgBox').show();
              $('.result').delay(2500).fadeOut('slow');
              $('.close').hide();
            }, 500);
            $('.option,input,.helpbox-container').css('pointer-events', 'none');
            setTimeout(function () {
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            }, 500);
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 4 blanks before submitting');
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
        $(this).attr('src', AllImages[i]);
      });
    }
  }

}
