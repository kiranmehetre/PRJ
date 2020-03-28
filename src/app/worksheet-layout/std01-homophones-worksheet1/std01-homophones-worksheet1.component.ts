import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-homophones-worksheet1',
  templateUrl: './std01-homophones-worksheet1.component.html',
  styleUrls: ['./std01-homophones-worksheet1.component.scss']
})
export class Std01HomophonesWorksheet1Component implements OnInit {

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
    });


    $('.Option_Container').each(function () {
      var options = $(this).find('.option');
      $(options).each(function () {
        $(this).click(function () {
          if ($(this).hasClass('click')) {
            $(this).removeClass('click');
          }
          else {
            $(options).removeClass('click');
            $(this).addClass('click');
          }
        });
      });
    });


    $('.button').click(function () {
      if ($(this).hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
      else {
        if ($('.option.click').length >= 5) {
          var Correct_answers = ["sun", "eye", "bee", "male", "pail", "nun", "deer", "wood", "sea"];
          var Correct_Answers_Count = 0;
          var Click;
          var text;
          $('.Option_Container').each(function (i) {
            Click = $(this).find('.option.click');
            if (Click !== undefined) {
              // debugger;
              var click_text = $(this).find('.option.click').text();
              if (click_text.trim() !== Correct_answers[i]) {
                $(this).find('.option.wrong.click').css('background', '#ab2323');
                $(this).find('.option.right.click').css('background', '#20bb15');
                $(this).find('.option.right').not('click').css('background', '#20bb15');
              }
              else {
                Correct_Answers_Count++;
              }
            }
          });
          var percentage = (Correct_Answers_Count * 100) / 9;
          $('.option').css('pointer-events', 'none');
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
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please colour at least 5 boxes before submitting');
          }, 500);
        }
      }


    });
    $('.result,.close').click(function () {
      $('.result').fadeOut();
      $('.close').show();
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
