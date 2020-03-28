import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-rhyming-words-worksheet1',
  templateUrl: './std01-rhyming-words-worksheet1.component.html',
  styleUrls: ['./std01-rhyming-words-worksheet1.component.scss']
})
export class Std01RhymingWordsWorksheet1Component implements OnInit {

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


    $(document).ready(function () {
      var imgUrl = "";
      $('.Question-container img').click(function () {
        if ($(this).hasClass('click')) {
          imgUrl = "assets/std01-rhyming-words-worksheet1/img/" + $(this).attr('data-text') + ".png";
          $(this).attr('src', imgUrl);
          $(this).removeClass('click');
        }
        else {
          imgUrl = "assets/std01-rhyming-words-worksheet1/img/" + $(this).attr('data-text') + "-green.png";
          $(this).attr('src', imgUrl);
          $(this).addClass('click');
        }
      });

      $('.button').click(function () {

        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var Correct_Answers_Count = 0;
          if ($('.click').length >= 6) {
            $('img.wrong').each(function () {
              imgUrl = "assets/std01-rhyming-words-worksheet1/img/wrong-" + $(this).attr('data-text') + ".png";
              $(this).attr('src', imgUrl);
            });
            $('img.right').each(function () {
              imgUrl = "assets/std01-rhyming-words-worksheet1/img/" + $(this).attr('data-text') + "-green.png";
              $(this).attr('src', imgUrl);
            });

            $('.Question-container img').css('pointer-events', 'none');

            var DisplayResult = "";
            DisplayResult = '.fabulous';

            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox').hide();
              $(DisplayResult).removeClass('hide');
              $('.result .imgBox').show();
              $('.result').delay(2000).fadeOut('slow');
              $('.close').hide();
              setTimeout(function () { $('img.right.click').addClass('slide-out'); }, 2100);
            }, 500);

            setTimeout(function () {
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            }, 500);

          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please colour at least 6 kites before submitting');
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
      var AllImages = ['assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
