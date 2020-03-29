import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-conjunctions-worksheet9',
  templateUrl: './std03-conjunctions-worksheet9.component.html',
  styleUrls: ['./std03-conjunctions-worksheet9.component.scss']
})
export class Std03ConjunctionsWorksheet9Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
    const globalThis = this;

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
    var ClickAnswer = [];
    var HelpBox = [];
    var inputValue = "";
    var Correct_Answers_Count = 0;
    $(".answer").each(function (i) {
      $(this).attr('id', 'question' + i);
      var id = $(this).attr('id', 'question' + i);
    });
    $('.answer').attr('readonly', 'readonly');
    var inputField;
    $('.answer').on('click', function () {

      inputField = $(this);
      inputValue = $(this).text();
      $('.Question').removeClass('bd');
      $(this).closest('.Question').addClass('bd');
      ClickAnswer = $.grep(ClickAnswer, function (value) {
        return value != inputValue;
      });
      $(".option").filter(function () {
        return $(this).text() === inputValue;
      }).removeClass('click');
      $(this).text("");

    });
    var Text = '';
    // $('td').each(function() {
    $('.option').on('click', function (event) {
      inputValue = $(inputField).text();
      if (inputField !== undefined) {
        inputValue = $(inputField).text();
        Text = $(this).text().trim();
        HelpBox.push(Text);
        if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
          $(".option").filter(function () {
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
          $(inputField).text(Text);
          ClickAnswer.push(Text);
        }
      }
    });
    // });
    $('.button').click(function () {

      if ($(this).hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
      else {
        var Correct_Answers_Count = 0;
        var inputCount = $('.answer').filter(function () {
          return !!$(this).text();
        }).length;

        if (inputCount >= 4) {
          $('.Question').removeClass('bd');
          var Correct_Answers = ["they continued trekking up the hill.", "so the coach selected him for the school team.", "after helping her mom in the garden.", "because they were thirsty.", "you must work hard for it.", "yet she could not find her book.", "but he was still feeling very weak.", "and the pepper please?"];
          $('.answer').each(function (i) {
            if ($.trim($(this).text()) !== Correct_Answers[i]) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              $(this).siblings('.correct_answer').css('display', 'inline-block');
            }
            else {
              Correct_Answers_Count++;
            }
          });
          var percentage = (Correct_Answers_Count * 100) / 8;
          var ImgURL = "";
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

          $('.answer,.option').css('pointer-events', 'none');
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
      var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
        'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
