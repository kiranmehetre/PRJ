import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std02-common-noun-worksheet4',
  templateUrl: './std02-common-noun-worksheet4.component.html',
  styleUrls: ['./std02-common-noun-worksheet4.component.scss']
})
export class Std02CommonNounWorksheet4Component implements OnInit {

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


    $(".Question").each(function (i) {
      $(this).attr('id', 'question' + i);
      var id = $(this).attr('id', 'question' + i);
    });

    $('input').attr('readonly', 'readonly');




    var inputField;
    var inputValue;
    var ClickAnswer = [];
    var HelpBox = [];
    $('.Question input').on('click', function () {
      inputField = $(this);
      inputValue = $(this).val();
      $('input').removeClass('bd');
      $(this).addClass('bd');

      ClickAnswer = $.grep(ClickAnswer, function (value) {
        return value != inputValue;
      });
      $("td span").filter(function () {
        return $(this).text() === inputValue;
      }).removeClass('yellow');
      $(this).val("");
    });
    var Text = '';
    $('td span').each(function () {
      $(this).on('click', function (event) {
        inputValue = $(inputField).val();
        if (inputField !== undefined) {
          var Text = $(this).text();
          Text = $(this).text().trim();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $("td span").filter(function () {
              return $(this).text() === inputValue;
            }).removeClass('yellow');
          }
          $(this).addClass('yellow');
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

    $('.button').click(function () {

      if ($(this).hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
      else {
        var Correct_answer = ["detective", "architect", "grocer", "plumber", "scientist", "mechanic"];
        var inputCount = $('input[type="text"]').filter(function () {
          return !!$(this).val();
        }).length;
        if (inputCount >= 3) {
          $('input').removeClass('bd');
          var ctr = 0;
          var Correct_Answer_Count = 0;
          $('.Question input').each(function () {
            if ($.trim($(this).val().toString()) !== Correct_answer[ctr]) {
              $(this).css({ 'color': '#ed1a1a' });
              $(this).next().css({ 'display': 'inline-block', 'visibility': 'visible' });

            }
            else {
              Correct_Answer_Count++;
            }
            ctr++;
          });
          $('td span,input').css('pointer-events', 'none');
          var percentage = (Correct_Answer_Count * 100) / 6;
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
            $('.result .TextBox h1').text('Please solve at least 3 blanks before submitting');
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
