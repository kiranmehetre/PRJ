import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-proper-noun-worksheet1',
  templateUrl: './std01-proper-noun-worksheet1.component.html',
  styleUrls: ['./std01-proper-noun-worksheet1.component.scss']
})
export class Std01ProperNounWorksheet1Component implements OnInit {

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
      var inputValue = "";
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var dataText = "";
      var Correct_Answers_Count = 0;
      var inputs = $('span.input');

      $(inputs).click(function () {
        inputField = $(this);
        $(inputs).removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(inputField).attr("data-set");
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".helpbox div").filter(function () {
          return $(this).attr("data-set").trim() === inputValue;
        }).removeClass('click');
        $(inputField).attr("data-set", "");
        $(inputField).find('span').css('visibility', 'hidden');
      });
      $('.helpbox div').click(function () {
        if (inputField !== undefined) {
          inputValue = $(inputField).attr("data-set");
          Text = $(this).text().trim();
          dataText = $(this).attr("data-set");
          HelpBox.push(dataText);
          if (HelpBox.indexOf(dataText) > -1 && ClickAnswer.indexOf(dataText) < 0) {
            $(".helpbox div").filter(function () {
              return $(this).attr("data-set").trim() === inputValue;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (ClickAnswer.indexOf(Text) > -1) {

          }
          else {
            ClickAnswer = $.grep(ClickAnswer, function (value) {
              return value != inputValue;
            });
            $(inputField).find('span').css('visibility', 'visible');
            $(inputField).find("span").text(Text);
            $(inputField).attr("data-set", dataText);
            ClickAnswer.push(dataText);
          }
        }
      });

      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var Correct_Answers_Count = 0;
          var inputCount = $('span.input span').filter(function () {
            return $(this).text() != "X";
          }).length;
          if (inputCount >= 7) {
            $(inputs).removeClass('bd');
            var Correct_Answers = ["J", "B", "C", "T", "L", "M", "B", "B", "A", "W", "T", "U", "D"];
            $(inputs).each(function (i) {
              if ($.trim($(this).find('span').text()) !== Correct_Answers[i]) {
                $(this).addClass('wrong');
                $(this).siblings('.correct_answer').addClass('displayBlock');
              }
            });
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox').hide();
              $('.fabulous').removeClass('hide');
              $('.result .imgBox').show();
              $('.result').delay(2000).fadeOut('slow');
              $('.close').hide();
            }, 500);
            setTimeout(function () {
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            }, 500);
            $('span.input,.helpbox div').css('pointer-events', 'none');
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 7 blanks before submitting');
            }, 500);
          }
        }
        $('.result,.close').click(function () {
          $('.result').fadeOut();
          $('.close').show();
        });
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
