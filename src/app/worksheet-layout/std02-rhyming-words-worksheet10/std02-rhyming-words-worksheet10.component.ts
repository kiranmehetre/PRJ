import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std02-rhyming-words-worksheet10',
  templateUrl: './std02-rhyming-words-worksheet10.component.html',
  styleUrls: ['./std02-rhyming-words-worksheet10.component.scss']
})
export class Std02RhymingWordsWorksheet10Component implements OnInit {

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
    $(document).ready(function () {
      $('.span-container').click(function () {
        $(this).toggleClass('click');
        if ($(this).hasClass('click')) {
          var clickHelpbox = $(this).attr('word-click');
          var checkHelpBoxText = $(this).find('span').text().toLowerCase().trim();
          if (clickHelpbox.indexOf(',') > 0) {
            var SplitHelpbox = clickHelpbox.split(',');
            var i;
            for (i = 0; i < SplitHelpbox.length; ++i) {
              $('.' + SplitHelpbox[i] + '.' + checkHelpBoxText).addClass('green-color');
            }
          }
          else {
            var CheckIsThere = $(this).attr('class');
            $('.' + clickHelpbox + '.' + checkHelpBoxText).addClass('green-color');
          }
        }
        else {
          var clickHelpbox = $(this).attr('word-click');
          var checkHelpBoxText = $(this).find('span').text().toLowerCase().trim();
          if (clickHelpbox.indexOf(',') > 0) {
            var SplitHelpbox = clickHelpbox.split(',');
            var i;
            for (i = 0; i < SplitHelpbox.length; ++i) {
              $('.' + SplitHelpbox[i] + '.' + checkHelpBoxText).removeClass('green-color');
            }
          }
          else {
            var CheckIsThere = $(this).attr('class');
            $('.' + clickHelpbox + '.' + checkHelpBoxText).removeClass('green-color');
          }
        }
      });
      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var inputCount = 0;
          for (var j = 0; j <= 11; j++) {
            var classNames = ['.first.click', '.second.click', '.third.click', '.fourth.click', '.fifth.click', '.sixth.click', '.seventh.click', '.eighth.click', '.nineth.click', '.tenth.click', '.eleventh.click', '.twelveth.click'];
            if ($(classNames[j]).length > 0) {
              inputCount++;
            }
          }
          if (inputCount >= 6) {

            $('.line').show();
            $('.span-container').css('pointer-events', 'none');
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
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please mark at least 6 words before submitting');
            }, 500);
          }
        }

      });

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
