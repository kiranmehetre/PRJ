import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std02-rhyming-words-worksheet1',
  templateUrl: './std02-rhyming-words-worksheet1.component.html',
  styleUrls: ['./std02-rhyming-words-worksheet1.component.scss']
})
export class Std02RhymingWordsWorksheet1Component implements OnInit {

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
    var petal, img;

    $('.petal-wrapper div').click(function () {
      var petalClass = $(this).attr('class');
      if (petalClass.indexOf('name') > -1) {
        var petalNumber = petalClass.substring(0, 6);
        petal = $(this).closest('.petal-wrapper').find('.' + petalNumber);
      }
      else {
        petal = $(this);
      }
      $(petal).toggleClass('click');
    });

    $('.button').click(function () {
      if ($(this).hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
      else {
        var FlowerClickCount = $('.click').length;
        // $('.petal-wrapper').each(function (i) {
        // 	var ClickCount = $(this).find('div.click').length;
        // 	if (ClickCount > 0) {
        // 		FlowerClickCount++;
        // 	}
        // });
        //console.log(FlowerClickCount);
        if (FlowerClickCount >= 18) {
          $('.wrong-answer').each(function () {
            img = $(this);
            $(img).addClass('wrong');
          });
          $('.correct-answer').each(function () {
            img = $(this);
            $(img).addClass('right');
          });
          $('.click').each(function (i) {
            var ClassDetails = $(this).attr('class');
            var findClasstoSetColor = ClassDetails.substring(0, 6);
            $(this).closest('.petal-wrapper').find('.' + findClasstoSetColor + '-name span').addClass('display-selection');
          });
          $('.Question_Block img').css('pointer-events', 'none');
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
            $('.result .TextBox h1').text('Please colour at least 18 petals before submitting');
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
