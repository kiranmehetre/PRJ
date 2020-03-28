import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-present-tense-worksheet2',
  templateUrl: './std01-present-tense-worksheet2.component.html',
  styleUrls: ['./std01-present-tense-worksheet2.component.scss']
})
export class Std01PresentTenseWorksheet2Component implements OnInit {

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


    var selectext = false;
    var ctr = 0;
    var spans;
    $('.text-container').each(function () {
      spans = $(this).find('span');
      $(spans).each(function () {
        $(this).click(function () {
          $(this).toggleClass("underlined");
          var numItems = $(this).parent().find('.underlined').length;
          if (numItems > 2) {
            alert("Please deselect any One");
            $(this).toggleClass('underlined');
          }
        });
      });
    });
    $('.button').click(function () {


      if ($(this).hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
      else {
        var underlinedCount=0;
        $('.text-container').each(function(){
          if($(this).find('.underlined').length > 0){
            underlinedCount++;
          }
        });
        if (underlinedCount >= 5) {
          var ClickAnswers;
          $('.right').each(function () {
            if ($(this).hasClass('underlined')) {
              $(this).addClass('correct');
            }
            else {
              $(this).addClass('correct_white');
            }
          });
          $('.underlined').not('.right').css('color', '#ed1a1a');
          // $('.right').addClass('correct');
          var Correct_Answers_Count = $('.correct.underlined').length;
          var Correct_Answers = [["walk"], ["is", "rotates"], ["float"], ["is", "has"], ["see", "is"], ["has"], ["yawn", "are"], ["eat"], ["drink"], ["makes"]];
          //console.log(Correct_Answers_Count);
          var percentage = (Correct_Answers_Count * 100) / 14;
          //console.log(percentage);

          $('.text-container span').css('pointer-events', 'none');

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
            $('.result .TextBox h1').text('Please solve at least 5 sentences before submitting');
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
