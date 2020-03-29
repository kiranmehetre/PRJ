import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-conjunctions-worksheet5',
  templateUrl: './std03-conjunctions-worksheet5.component.html',
  styleUrls: ['./std03-conjunctions-worksheet5.component.scss']
})
export class Std03ConjunctionsWorksheet5Component implements OnInit {

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
    $(".puzzle-container > div").each(function (i) {

      var CheckAttribute = $(this).attr('word-click');
      if (CheckAttribute == undefined) {
        $(this).css('pointer-events', 'none');
      }

    });
    $('.puzzle-container > div').click(function () {
      $(this).toggleClass('click');
      if ($(this).hasClass('click')) {

        var clickHelpbox = $(this).attr('word-click');
        var checkHelpBoxText = $(this).attr('data-text');
        //checkHelpBoxText=checkHelpBoxText.substring(checkHelpBoxText.length-1,checkHelpBoxText.length);
        if (clickHelpbox.indexOf(',') > 0) {
          var SplitHelpbox = clickHelpbox.split(',');
          var i;
          for (i = 0; i < SplitHelpbox.length; ++i) {
            $('.' + SplitHelpbox[i] + '_span.' + checkHelpBoxText.toLowerCase().trim()).addClass('word-select');
          }
        }
        else {

          var CheckIsThere = $(this).attr('class');
          if (clickHelpbox.indexOf('unless') > -1 && (CheckIsThere.indexOf('s1') > -1 || CheckIsThere.indexOf('s2') > -1)) {
            if (CheckIsThere.indexOf('s1') > -1) {
              $('.option .s1').addClass('word-select');
            }
            else {
              $('.option  .s2').addClass('word-select');
            }
          }
          else if (clickHelpbox.indexOf('before') > -1 && (CheckIsThere.indexOf('e1') > -1 || CheckIsThere.indexOf('e2') > -1)) {
            if (CheckIsThere.indexOf('e1') > -1) {
              $('.option .e1').addClass('word-select');
            }
            else {
              $('.option  .e2').addClass('word-select');
            }
          }
          else if (clickHelpbox.indexOf('although') > -1 && (CheckIsThere.indexOf('ah1') > -1 || CheckIsThere.indexOf('ah2') > -1)) {
            if (CheckIsThere.indexOf('ah1') > -1) {
              $('.option .ah1').addClass('word-select');
            }
            else {
              $('.option .ah2').addClass('word-select');
            }
          }
          else {
            $('.' + clickHelpbox + '_span.' + checkHelpBoxText.toLowerCase().trim()).addClass('word-select');
          }
        }
      }
      else {
        var clickHelpbox = $(this).attr('word-click');
        var checkHelpBoxText = $(this).attr('data-text');

        if (clickHelpbox.indexOf(',') > 0) {
          var SplitHelpbox = clickHelpbox.split(',');
          var i;
          for (i = 0; i < SplitHelpbox.length; ++i) {
            $('.' + SplitHelpbox[i] + '_span.' + checkHelpBoxText.toLowerCase().trim()).removeClass('word-select');
          }
        }
        else {

          var CheckIsThere = $(this).attr('class');
          if (clickHelpbox.indexOf('unless') > -1 && (CheckIsThere.indexOf('s1') > -1 || CheckIsThere.indexOf('s2') > -1)) {
            if (CheckIsThere.indexOf('s1') > -1) {
              $('.option .s1').removeClass('word-select');
            }
            else {
              $('.option  .s2').removeClass('word-select');
            }
          }
          else if (clickHelpbox.indexOf('before') > -1 && (CheckIsThere.indexOf('e1') > -1 || CheckIsThere.indexOf('e2') > -1)) {
            if (CheckIsThere.indexOf('e1') > -1) {
              $('.option .e1').removeClass('word-select');
            }
            else {
              $('.option  .e2').removeClass('word-select');
            }
          }
          else if (clickHelpbox.indexOf('although') > -1 && (CheckIsThere.indexOf('ah1') > -1 || CheckIsThere.indexOf('ah2') > -1)) {
            if (CheckIsThere.indexOf('ah1') > -1) {
              $('.option .ah1').removeClass('word-select');
            }
            else {
              $('.option .ah2').removeClass('word-select');
            }
          }
          else {
            var chexkkk = '.' + clickHelpbox + '.' + checkHelpBoxText;
            $('.' + clickHelpbox + '_span.' + checkHelpBoxText).removeClass('word-select');
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
        for (var j = 0; j <= 9; j++) {
          var classNames = ['.but_span.click', '.before_span.click', '.yet_span.click', '.if_span.click', '.since_span.click', '.although_span.click', '.until_span.click', '.unless_span.click', '.after_span.click', '.and_span.click'];
          // debugger;
          var checkL = $(classNames[j]).length;
          if ($(classNames[j]).length > 0) {

            inputCount++;
          }
        }

        if (inputCount >= 5) {
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
          $('.puzzle-container').css('pointer-events', 'none');
          $(".puzzle-container > div").each(function (i) {

            var CheckAttribute = $(this).attr('word-click');
            if (CheckAttribute == undefined) {

            }
            else {
              $(this).addClass('correct');
            }

          });
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please mark at least 5 words before submitting');
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
