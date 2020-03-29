import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-collective-noun-worksheet2',
  templateUrl: './std01-collective-noun-worksheet2.component.html',
  styleUrls: ['./std01-collective-noun-worksheet2.component.scss']
})
export class Std01CollectiveNounWorksheet2Component implements OnInit {

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

    var inputField;
    var clickAnswer = [];
    var inputValue;
    var inputs = $('input');
    $(inputs).on('click', function () {
      inputField = $(this);
      inputValue = $(this).val();
      $(inputs).parent().removeClass("bd");
      $(this).parent().addClass('bd');
      clickAnswer = $.grep(clickAnswer, function (value) {
        return value != inputValue;
      });
      $(".Question_Container .col-4").filter(function () {
        return $(this).find('.alphabet').text().replace(")", "") === inputValue;
      }).removeClass('click');
      $(this).val("");
    });
    $('input').attr('readonly', 'readonly');
    var Text = '';
    var HelpBox = [];
    $('.Question_Container .col-4').on('click', function (event) {
      inputValue = $(inputField).val();
      if (inputField !== undefined) {
        var SetText = $(this).find('.alphabet').text().trim().replace(")", "");
        HelpBox.push(SetText);
        if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(SetText) < 0) {
          $(".Question_Container .col-4").filter(function () {
            return $(this).find('.alphabet').text().replace(")", "") === inputValue;
          }).removeClass('click');
        }
        $(this).addClass('click');
        if (clickAnswer.indexOf(SetText) > -1) {
        }
        else {
          clickAnswer = $.grep(clickAnswer, function (value) {
            return value != inputValue;
          });
          var SetText = $(this).find('.alphabet').text().trim().replace(")", "");
          $(inputField).val(SetText);
          clickAnswer.push(SetText);
        }
      }
    });




    $('.button').click(function () {
      if ($('.button').hasClass('playAgain')) {
        $('input').val('');
        globalThis.commonWorksheet.reloadComponent();

      }
      else {
        var inputCount = $('input[type="text"]').filter(function () {
          return !!$(this).val();
        }).length;
        if (inputCount >= 3) {
          var i = 0;
          var Correct_Answers_Count = 0;
          var Correct_Answers = ["F", "A", "E", "B", "D", "C"];
          $('input').each(function () {
            if ($(this).val() !== Correct_Answers[i]) {
              $(this).css({ 'color': '#ed1a1a' });
              $('.answer' + i).css('display', 'inline-block');
              //Correct_Answers_Count--;
            }
            else {
              Correct_Answers_Count++;
            }
            i++;
          });
          // $('.correct_answer').css('display','inline-block');
          $('input,.Question_Container').css('pointer-events', 'none');
          $('input').parent().removeClass('bd');
          var percentage = (Correct_Answers_Count * 100) / 6;
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
            $('.result .TextBox h1').text('Please solve at least 3 boxes before submitting');
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
