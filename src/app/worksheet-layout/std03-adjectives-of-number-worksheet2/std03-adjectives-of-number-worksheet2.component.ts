import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-adjectives-of-number-worksheet2',
  templateUrl: './std03-adjectives-of-number-worksheet2.component.html',
  styleUrls: ['./std03-adjectives-of-number-worksheet2.component.scss']
})
export class Std03AdjectivesOfNumberWorksheet2Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
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
    var OptionList = "";
    var QuestionNumber = "";
    var inputValue;
    var question_number_check;
    var click_question_number;
    var HelpBox = [];
    var ImgURL = "";
    $(".content").each(function (i) {
      $(this).attr('id', 'question' + i);
      var id = $(this).attr('id', 'question' + i);

    });
    $(".options").each(function (i) {
      $(this).attr('id', 'options-container' + i);
    });
    $('input').attr('readonly', 'readonly');

    $('input').click(function () {
      $('input').removeClass('bd');
      $(this).addClass('bd');
      inputField = $(this);
      inputValue=$(inputField).val();
      QuestionNumber = $(this).parent().parent().attr('id');
      //console.log(QuestionNumber);
      var OptionNumber = QuestionNumber[QuestionNumber.length - 1];
      question_number_check = QuestionNumber;
      OptionList = $('#options-container' + OptionNumber).text();
      $(this).closest('.Question').find('.option span').filter(function(){
          return $(this).text().trim() === inputValue;
      }).removeClass('click');
      $(this).val("");
    });

    $('.option').click(function () {
      if (inputField !== undefined) {

        click_question_number = $(this).parent().parent().attr('id');
        if (OptionList.indexOf($(this).text()) > -1 && click_question_number === question_number_check) {
          $(inputField).val($(this).text().replace('[', "").replace("]", "").trim());
          var Option = $(this).parent().parent().attr('id');
          $('#' + Option).find('.option span').removeClass('click');
          $(this).find('span').addClass('click');
        }
      }
    });
    $('.myButton').click(function () {


      if ($('.myButton').hasClass('playAgain')) {
        globalThis.commonWorksheet.reloadComponent();
      }
      else {
        $('input').removeClass('bd');
        var i = 0;
        var Correct_answers_count = 0;
        var Correct_answers = ["five", "two", "six", "many", "several", "eighth", "Thirty", "tenth", "first", "five"];
        var inputCount = $('input').filter(function () {
          return !!$(this).val();
        }).length;
        if (inputCount >= 5) {
          $('input').each(function () {
            if ($(this).val() !== Correct_answers[i]) {
              $(this).css({ 'color': '#ed1a1a' });
              $(this).siblings('.correct_answer').css('display', 'block');
            }
            else {
              Correct_answers_count++;
            }
            i++;
          });

          var percentage = (Correct_answers_count * 100) / 10;
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
            $('.result .TextBox h1').text('Please solve at least 5 blanks before submitting');
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
