import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-homophones-worksheet2',
  templateUrl: './std01-homophones-worksheet2.component.html',
  styleUrls: ['./std01-homophones-worksheet2.component.scss']
})
export class Std01HomophonesWorksheet2Component implements OnInit {

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


    $('.text-container').click(function () {
      $(this).toggleClass('click');

    });
    $('.button').click(function () {

      if ($(this).hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
      else {
        var Correct_Answers_Count = 0;
        if ($('.click').length >= 3) {
          // var Correct_answers=["to","smile","instruct","whistle","meet","fight","hug","learn"];
          // $('.click').each(function(i){
          // 	if($(this).hasClass('correct'))
          // 	{
          // 		Correct_Answers_Count++;
          // 	}
          // 	else
          // 	{
          // 		Correct_Answers_Count--;
          // 	}
          // });
          // $('.text-container.correct').addClass('right');
          // $('.text-container.wrong-answer').addClass('wrong');
          // $('.button,.text-container').css('pointer-events','none');
          $('.wrong-answer').addClass('wrong');
          $('.correct').addClass('right');
          $('.text-container').css('pointer-events', 'none');

          var wrong_click = $('.wrong-answer.click').length;
          var correct_click = $('.correct.click').length;
          var Correct_Answers_Count = correct_click - wrong_click;

          var percentage = (Correct_Answers_Count * 100) / 5;
          var ResultImages = ["fabulous.png", "great_job.png", "well_done.png", "keep_practising.png"];
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
            $('.result .TextBox h1').text('Please colour at least 5 balls before submitting');
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
      $('.imgBox img').attr('src', 'assets/images/fabulous.gif' + '?' + t)

    }
  }

}
