import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-past-tense-worksheet2',
  templateUrl: './std01-past-tense-worksheet2.component.html',
  styleUrls: ['./std01-past-tense-worksheet2.component.scss']
})
export class Std01PastTenseWorksheet2Component implements OnInit {

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

    var selectext = false;
    var Correct_Answers_Count = 0;
    $(".Question .col-10").each(function (i) {
      $(this).attr('id', 'question' + i);
    });
    $('.Question .col-10 span').click(function () {
      selectext = true;
      if ($(this).hasClass('underlined')) {
        var click = $(this).parent().attr('id');
        $("#" + click + " span").removeClass("underlined");
      }
      else {
        var click = $(this).parent().attr('id');
        $("#" + click + " span").removeClass("underlined");
        $(this).addClass("underlined");
      }

    });


    $('.button').click(function () {
      if ($('.button').hasClass('playAgain')) {
        window.location.href = window.location.href;
      }
      else {
        var ClickCount = $('span.underlined').length;
        var Correct_Answer_Count = 0;
        if (ClickCount < 4) {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 4 sentences before submitting');
          }, 500);
        }
        else {

          $('.correct').each(function () {
            if ($(this).hasClass('underlined')) {
              $(this).addClass('click-correct');
            }
            else {
              $(this).addClass('correct_white');
            }
          });
          $('.underlined').not('.correct').css('color', '#ed1a1a');
          var Correct_Answer_Count = $('.underlined.correct').length;
          var percentage = (Correct_Answer_Count * 100) / 8;
          $('.Question .col-10 span').css("pointer-events", "none");
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
