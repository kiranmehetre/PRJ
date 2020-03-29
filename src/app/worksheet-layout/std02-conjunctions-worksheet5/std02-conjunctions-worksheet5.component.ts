import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std02-conjunctions-worksheet5',
  templateUrl: './std02-conjunctions-worksheet5.component.html',
  styleUrls: ['./std02-conjunctions-worksheet5.component.scss']
})
export class Std02ConjunctionsWorksheet5Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
    const globalThis = this;
    $('.loadingDiv').hide();
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
      var HelpBox = [];
      var ClickAnswer = [];
      ClickAnswer[0] = [];
      ClickAnswer[1] = [];
      ClickAnswer[2] = [];
      ClickAnswer[3] = [];
      ClickAnswer[4] = [];
      ClickAnswer[5] = [];
      var Text = "";
      var Correct_Answers_Count = 0;
      var inputs = $('input');
      var inputNumber;
      var spanNumber;
      $(inputs).css('cursor', 'pointer');
      $(inputs).attr('readonly', 'readonly');

      $(inputs).click(function () {
        inputField=$(this);
        $(inputs).removeClass('bd');
        $(this).addClass('bd');
        inputValue=$(inputField).val();
        inputNumber = parseInt($(this).closest('.Question').find('.list-item span').text().trim().replace(")",""));
				$(this).closest(".Question").find(".Option").filter(function () {
					return $(this).text().trim() === inputValue;
				}).removeClass('click');
				$(this).val("");
      });
      $('.Option').click(function () {
        if (inputField !== undefined) {
          inputValue = $(inputField).val();
          Text = $(this).text().trim();
          $(this).closest(".Question").find(".Option").filter(function () {
            return $(this).text().trim() === inputValue;
          }).removeClass('click');
          $(this).addClass('click');
            $(inputField).val(Text);
        }
      });

      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var Correct_Answers_Count = 0;
          var inputCount = $('input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          if (inputCount >= 3) {
            $(inputs).removeClass('bd');
            var Correct_Answers = ["or", "but", "after", "and", "because", "so"];
            $(inputs).each(function (i) {
              if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
                $(this).css({ 'color': '#f2cb37', 'border-color': '#000' });
                $(this).siblings('.correct_answer').addClass('display');
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
            $('input,.option').css('pointer-events', 'none');
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 3 sentences before submitting');
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
			var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
				'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }


  }

}
