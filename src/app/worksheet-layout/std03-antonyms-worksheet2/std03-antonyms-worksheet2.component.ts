import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-antonyms-worksheet2',
  templateUrl: './std03-antonyms-worksheet2.component.html',
  styleUrls: ['./std03-antonyms-worksheet2.component.scss']
})
export class Std03AntonymsWorksheet2Component implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background','linear-gradient(#59a7dc 70%,#59a7dc,#fff) fixed');
  }

  ngOnInit() {
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

    $('.Question').each(function () {
      var options = $(this).find('.option');
      $(options).each(function () {
        $(this).click(function () {
          if ($(this).hasClass('click')) {
            options.removeClass('click');
            $(this).removeClass('click');
          }
          else {
            options.removeClass('click');
            $(this).addClass('click');
          }
        });
      });
    })


    $('.button').click(function () {

      if ($('.button').hasClass('playAgain')) {
        window.location.href = window.location.href;
      }
      else {
        var Correct_Answers_Count = 0;
        if ($('.click').length >= 5) {
          var Correct_answers = ["always", "expensive", "shallow", "wide", "wise", "weak", "cry", "true", "sharp", "sweet"];
          var Click;
          var Right_answer;
          $('.Question').each(function (i) {
            Click = $(this).find('.click');
            if (Click.length > 0) {
              if ($(Click).hasClass('wrong-ans')) {
                $(Click).css('background-color', '#c42c2c');

              }
              else {
                Correct_Answers_Count++;
              }
            }
          });
          $('.right-ans').css('background-color', '#2bab3e');
          var percentage = (Correct_Answers_Count * 100) / 10;
          var ImgURL = "";
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

          $('.Question').css('pointer-events', 'none');

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
      var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
        'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
