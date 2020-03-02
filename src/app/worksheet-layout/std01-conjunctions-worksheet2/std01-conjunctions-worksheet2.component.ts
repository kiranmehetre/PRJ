import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std01-conjunctions-worksheet2',
  templateUrl: './std01-conjunctions-worksheet2.component.html',
  styleUrls: ['./std01-conjunctions-worksheet2.component.scss']
})
export class Std01ConjunctionsWorksheet2Component implements OnInit {

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

var inputField;
var inputValue;
var Text = "";
var HelpBox = [];
var Correct_Answers_Count = 0;
var inputs = $('input');
var options;
var inputNumber = "";
var optionNumber = "";
var optionClass;
 $('input').attr('readonly', 'readonly');
var inputClass;
$(inputs).click(function () {
  inputField = $(this);
  $(inputs).parent().removeClass('bd');
  $(this).parent().addClass('bd');
  inputClass = $(this).attr('data-text');
  inputValue=$(inputField).val();
  $(inputField).closest('.question').find(".helpans").filter(function() {
    return $(this).find('span').text().trim() === inputValue;
  }).removeClass('click');
  $(this).val("");
});

$('.helpans').each(function () {
  $(this).on('click', function (event) {
  optionClass = $(this).parent().attr('class');
    if (inputField !== undefined && optionClass.indexOf(inputClass) > -1) {
      Text = $(this).text();
      $(inputField).val(Text);
      HelpBox.push(Text);
      //  var Option = $(this).parent();
      //  $(Option).find('span').removeClass('click');
      //  $(this).addClass('click');
      var Option = $(this);
      $(Option).find('span').parents().parents().siblings().removeClass('click');
      $(this).addClass('click')
     
    }
  });
});

$('.button').click(function () {

  if ($('.button').hasClass('playAgain')) {
    window.location.href = window.location.href;
  }
  else {
    var inputCount = $('input[type="text"]').filter(function () {
      return !!$(this).val();
    }).length;
    if (inputCount >= 4) {
      $(inputs).parent().removeClass('bd');
      var Correct_Answers = ["and","or","and","but","because","before","after","and"];
      $(inputs).each(function (i) {
        if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
          $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
          $(this).parents().siblings('.answer-div').css('display', 'inline-block');
        }
        else {
          Correct_Answers_Count++;
        }
      });
      $('input,.helpans').css('pointer-events', 'none');
      var ImgURL = "";
      var percentage = (Correct_Answers_Count * 100) / 8;
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
        $('.result .TextBox h1').text('Please solve at least 4 blanks before submitting');
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
