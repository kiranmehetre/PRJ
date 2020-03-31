import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std02-adverbs-worksheet6',
  templateUrl: './std02-adverbs-worksheet6.component.html',
  styleUrls: ['./std02-adverbs-worksheet6.component.scss']
})
export class Std02AdverbsWorksheet6Component implements OnInit {

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

    $('.letter').click(function () {
      $(this).toggleClass('click');
      if ($(this).hasClass('click')) {

        var clickHelpbox = $(this).attr('word-click');
        var checkHelpBoxText = $(this).attr('data-text').toLowerCase().trim();
        if (clickHelpbox.indexOf(',') > 0) {
          var SplitHelpbox = clickHelpbox.split(',');
          var i;
          for (i = 0; i < SplitHelpbox.length; ++i) {
            $('.' + SplitHelpbox[i] + '.' + checkHelpBoxText).addClass('green-color');
          }
        }
        else {

          var CheckIsThere = $(this).attr('class');
          if (clickHelpbox.indexOf('there') > -1 && (CheckIsThere.indexOf('e1') > -1 || CheckIsThere.indexOf('e2') > -1)) {
            if (CheckIsThere.indexOf('e1') > -1) {
              $('.helpbox-div .e1').addClass('green-color');
            }
            else {
              $('.helpbox-div  .e2').addClass('green-color');
            }
          }
          else if (clickHelpbox.indexOf('well') > -1 && (CheckIsThere.indexOf('l1') > -1 || CheckIsThere.indexOf('l2') > -1)) {
            if (CheckIsThere.indexOf('l1') > -1) {
              $('.helpbox-div .l1').addClass('green-color');
            }
            else {
              $('.helpbox-div  .l2').addClass('green-color');
            }
          }
          else {
            $('.' + clickHelpbox + '.' + checkHelpBoxText).addClass('green-color');
          }
        }
      }
      else {
        var clickHelpbox = $(this).attr('word-click');
        var checkHelpBoxText = $(this).attr('data-text').toLowerCase().trim();
        if (clickHelpbox.indexOf(',') > 0) {
          var SplitHelpbox = clickHelpbox.split(',');
          var i;
          for (i = 0; i < SplitHelpbox.length; ++i) {
            $('.' + SplitHelpbox[i] + '.' + checkHelpBoxText).removeClass('green-color');
          }
        }
        else {
          var CheckIsThere = $(this).attr('class');
          if (clickHelpbox.indexOf('there') > -1 && (CheckIsThere.indexOf('e1') > -1 || CheckIsThere.indexOf('e2') > -1)) {
            if (CheckIsThere.indexOf('e1') > -1) {
              $('.helpbox-div .e1').removeClass('green-color');
            }
            else {
              $('.helpbox-div  .e2').removeClass('green-color');
            }
          }
          else if (clickHelpbox.indexOf('well') > -1 && (CheckIsThere.indexOf('l1') > -1 || CheckIsThere.indexOf('l2') > -1)) {
            if (CheckIsThere.indexOf('l1') > -1) {
              $('.helpbox-div .l1').removeClass('green-color');
            }
            else {
              $('.helpbox-div  .l2').removeClass('green-color');
            }
          }
          else {
            $('.' + clickHelpbox + '.' + checkHelpBoxText).removeClass('green-color');
          }
        }
      }
    });
    $('.button').click(function () {
      if ($('.button').hasClass('playAgain')) {
        // alert('click');
        globalThis.commonWorksheet.reloadComponent();
      }
      else {
        var inputCount = 0;
        for (var j = 0; j <= 7; j++) {
          var classNames = ['.first_answer.click', '.second_answer.click', '.third_answer.click', '.fourth_answer.click', '.fifth_answer.click', '.sixth_answer.click', '.seventh_answer.click', '.eighth_answer.click'];
          if ($(classNames[j]).length > 0) {
            inputCount++;
          }
        }
        //console.log(inputCount);

        if (inputCount >= 4) {
          $('.letter').css('pointer-events', 'none');
          var DisplayResult = "";
          DisplayResult = '.fabulous';

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

          $('.line').show();
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please mark at least 4 words before submitting');
          }, 500);
        }
      }

    });
    $('.result,.close').click(function () {
      $('.result').fadeOut();
      $('.close').show();
    });
    function setImages() {
      var t = new Date().getTime();
      $('.imgBox img').attr("src", 'assets/images/fabulous.gif' + '?' + t);
    }
  }

}
