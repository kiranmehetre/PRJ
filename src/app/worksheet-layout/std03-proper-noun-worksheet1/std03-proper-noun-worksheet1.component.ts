import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-proper-noun-worksheet1',
  templateUrl: './std03-proper-noun-worksheet1.component.html',
  styleUrls: ['./std03-proper-noun-worksheet1.component.scss']
})
export class Std03ProperNounWorksheet1Component implements OnInit {

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
    var imgUrl = "";
    var img;

    $('.main-question-container img').click(function () {
      img = $(this);
      var imgClassName = $(this).attr('class');
      if (imgClassName.indexOf('click') > -1) {
        imgUrl = "assets/std03-proper-noun-worksheet1/img/" + $(img).attr("data-text") + ".png";
        $(img).attr('src', imgUrl);
        $(img).removeClass('click');

      }
      else {
        imgUrl = "assets/std03-proper-noun-worksheet1/img/" + $(img).attr("data-text") + "-green.png";
        $(img).attr('src', imgUrl);
        $(img).addClass('click');
      }
    });

    $('.button').click(function () {


      if ($(this).hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
      else {
        if ($('.click').length >= 6) {
          $('.wrong').each(function () {

            img = $(this);
            imgUrl = "assets/std03-proper-noun-worksheet1/img/" + $(img).attr("data-text") + "-red.png";
            $(img).attr('src', imgUrl);
          });

          $('.right').each(function () {
            img = $(this);
            imgUrl = "assets/std03-proper-noun-worksheet1/img/" + $(img).attr("data-text") + "-green.png";
            $(img).attr('src', imgUrl);
          });


          var wrong_click = $('.wrong.click').length;
          var correct_click = $('.right.click').length;
          var Correct_Answers_Count = correct_click - wrong_click;
          var percentage = (Correct_Answers_Count * 100) / 8;
          $('.main-question-container img').css('pointer-events', 'none');

          var DisplayResult = '.fabulous';



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
            $('.result .TextBox h1').text('Please colour at least 6 balloons before submitting');
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
