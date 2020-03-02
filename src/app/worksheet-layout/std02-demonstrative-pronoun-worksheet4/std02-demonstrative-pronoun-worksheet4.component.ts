import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std02-demonstrative-pronoun-worksheet4',
  templateUrl: './std02-demonstrative-pronoun-worksheet4.component.html',
  styleUrls: ['./std02-demonstrative-pronoun-worksheet4.component.scss']
})
export class Std02DemonstrativePronounWorksheet4Component implements OnInit {

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
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    }
    // toggleClass
    function toggleClass(elem, className) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(" " + className + " ") >= 0 ) {
                newClass = newClass.replace( " " + className + " " , " " );
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + className;
        }
    }
    theToggle.onclick = function() {
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
    $(".question").each(function (i) {
      $(this).attr('id', 'question' + i);
      var id = $(this).attr('id', 'question' + i);

    });
    $(".options").each(function (i) {
      $(this).attr('id', 'helpbox-container' + i);
    });
    $('input').attr('readonly', 'readonly');
    var inputs = $('input');
    $('input').click(function () {
      $('input').removeClass('bd');
      $(this).addClass('bd');
      inputField = $(this);
      QuestionNumber = $(this).closest('.question').attr('id');
      // var OptionNumber = QuestionNumber[QuestionNumber.length -1];
      question_number_check = QuestionNumber;
      // OptionList=$('#helpbox-container'+OptionNumber).text();
      $(inputField).val('');
      $(this).closest('.question').find('.option').removeClass('click');

    });

    $('.option').click(function () {
      if (inputField !== undefined) {

        click_question_number = $(this).closest('.question').attr('id');
        if (click_question_number === question_number_check) {
          $(inputField).val($(this).find('span').text().trim());
          HelpBox.push($(this).find('span').text().trim());
          //var Optionclass=$(this).closest('.helpbox-container').attr('class');
          $(this).closest('.options').find('.option').removeClass('click');
          $(this).addClass('click');
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
        if (inputCount >= 4) {
          $(inputs).removeClass('bd');
          var Correct_Answers = ["That", "Those", "This", "these", "Those", "that", "this", "These"];
          $(inputs).each(function (i) {
            if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              $(this).siblings('.correct-answer').css('visibility', 'visible');
            }
            else {
              Correct_Answers_Count++;
            }
          });
          var percentage = (Correct_Answers_Count * 100) / 8;
          var DisplayResult = "";
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
          $('input,.options').css('pointer-events', 'none');
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 4 blanks before submitting');
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
