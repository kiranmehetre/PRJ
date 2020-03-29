import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-compound-words-worksheet1',
  templateUrl: './std02-compound-words-worksheet1.component.html',
  styleUrls: ['./std02-compound-words-worksheet1.component.scss']
})
export class Std02CompoundWordsWorksheet1Component implements OnInit {

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
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}
theToggle.onclick = function() {
    toggleClass(this, 'on');
    $('.menu-block #menu').show();
    $('#toggle span img').toggleClass('up');
    return false;
}
$('.question').each(function () {
  var options = $(this).find('.box');
  $(options).each(function () {
    $(this).click(function () {
      if ($(this).hasClass('click')) {
        // $(options).removeClass('click img-shadow');
        // $(this).addClass('click img-shadow');
        options.removeClass('click');
        options.removeClass('img-shadow');
      }
      else {
        // $(options).removeClass('click img-shadow');
        // $(this).addClass('click img-shadow');
        options.removeClass('click');
        $(this).addClass('click');
        options.removeClass('img-shadow');
        $(this).addClass('img-shadow');
      }
    });
  });
})

$('.button').click(function () {
  if ($('.button').hasClass('playAgain')) {
    globalThis.commonWorksheet.reloadComponent();
  }
  else {
    if ($('.click').length >= 4) {
      var Correct_answers = ["doughnut", "pineapple", "woodpecker", "softball", "armchair", "footwear", "highway", "supermarket"];
      var Click;
      var Click_Text;

      $('.question').each(function (i) {
        Click = $(this).find('.click');
        if (Click !== undefined) {
          if ($(Click).next().text() == Correct_answers[i]) {
            // $(Click).css('border', '1px solid #fff');
          }
          else {
            $(this).find('.box.click').not('.right').css(
              {
                'background': 'url(assets/std02-compound-words-worksheet1/img/box_bg_wrong.jpg) no-repeat center center',
                'background-size': '100% 100%',
                'border': '0'
              }
            );
            $(this).find('.box.right').css(
              {
                'background': 'url(assets/std02-compound-words-worksheet1/img/box_bg_right.jpg) no-repeat center center', 'background-size': '100% 100%',
                'border': '0'
              }
            )
          }
        }

      });
      var correct_Answer = $('.box.right.click').length;
      var percentage = (correct_Answer * 100) / 8;
      var ImgURL = "";
      var DisplayResult = "";
      if (percentage > 80) {
        DisplayResult = '.outstanding';
      }
      else if (percentage > 60) {
        DisplayResult = '.brilliant';
      }
      else if (percentage >= 50) {
        DisplayResult = '.good-work';
      }
      else if (percentage < 50) {
        DisplayResult = '.keep-practicing';
      }


      $('.Question').css('pointer-events', 'none');
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
        $('.result .TextBox h1').text('Please colour at least 4 boxes before submitting');
      }, 500);
    }
  }
});

function setImages() {
  var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
  'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
  $('.imgBox img').each(function (i) {
    var t = new Date().getTime();
    $(this).attr("src", AllImages[i] + '?' + t);
  });
}
$('.result,.close').click(function () {
  $('.result').fadeOut();
  $('.close').show();
});

  }

}
