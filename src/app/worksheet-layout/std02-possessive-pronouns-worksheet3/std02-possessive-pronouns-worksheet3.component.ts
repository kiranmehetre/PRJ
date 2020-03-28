import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std02-possessive-pronouns-worksheet3',
  templateUrl: './std02-possessive-pronouns-worksheet3.component.html',
  styleUrls: ['./std02-possessive-pronouns-worksheet3.component.scss']
})
export class Std02PossessivePronounsWorksheet3Component implements OnInit {

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
    $(".input-span").each(function (i) {
      $(this).attr('id', 'question' + i);

      var id = $(this).attr('id', 'question' + i);
    });



    var inputField;
    var inputClass = "";
    var optionClass = "";
    var inputValue;
    var inputs = $('input');

    $('input').on('click', function () {
      inputField = $(this);
      inputClass = $(this).attr('data-text');
      inputValue = $(inputField).val();
      $(inputs).removeClass('bd');
      $(this).addClass('bd');
      $(this).closest('.Question').find('.helpbox').filter(function () {
        return $(this).text() == inputValue;
      }).removeClass('click');
      $(this).val("");
    });

    $('input').attr('readonly', 'readonly');


    var Text = '';

    $('.helpbox').on('click', function () {
      optionClass = $(this).parent().attr('class');
      if (inputField !== undefined && optionClass.indexOf(inputClass) > -1) {
        var Text = $(this).text();
        inputValue = $(inputField).val();
        $(inputField).closest('.Question').find('.helpbox').filter(function () {
          return $(this).text() == inputValue;
        }).removeClass('click');
        $(this).addClass('click');
        $(inputField).val(Text);
      }
    });



    $('.button').click(function () {
      if ($(this).hasClass('playAgain')) {
        globalThis.commonWorksheet.reloadComponent();
      }
      else {
        var Correct_Answers_Count = 0;
        var inputCount = $('input[type="text"]').filter(function () {
          return !!$(this).val();
        }).length;
        if (inputCount >= 3) {
          $(inputs).removeClass('bd');
          var Correct_Answers = ["theirs", "hers", "ours", "his", "mine", "yours"];
          $(inputs).each(function (i) {
            if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              $(this).siblings('.correct-ans').css('display', 'inline-block');
            }
            else {
              Correct_Answers_Count++;
            }
          });
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
          $('input,.helpbox').css('pointer-events', 'none');
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 3 blanks before submitting');
          }, 500);
        }
      }
      $('.result,.close').click(function () {
        $('.result').fadeOut();
        $('.close').show();
      });
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
