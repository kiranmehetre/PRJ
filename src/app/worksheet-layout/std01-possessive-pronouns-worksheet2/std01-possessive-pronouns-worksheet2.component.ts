import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std01-possessive-pronouns-worksheet2',
  templateUrl: './std01-possessive-pronouns-worksheet2.component.html',
  styleUrls: ['./std01-possessive-pronouns-worksheet2.component.scss']
})
export class Std01PossessivePronounsWorksheet2Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
        
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
$(document).ready(function () {
  var inputField;
  var inputValue ;
  var inputClass = "";
  var OptionClass="";
  var ClickAnswer = "";
  var Text = "";
  var HelpBox = [];
  var inputs = $('input');
  var Correct_Answers_Count = 0;
  var optionClass;
  $(inputs).attr('readonly', 'readonly');

  $(inputs).click(function () {
          inputField = $(this);
          $(inputs).removeClass('bd');
          $(this).addClass('bd');
          inputClass = $(this).attr('data-text');
          inputValue = $(inputField).val();
          $(inputField).closest('.question').find(".helpbox-container span").filter(function () {
                  return $(this).text().trim() === inputValue;
          }).removeClass('click');
          $(this).val("");
  });

  $('.helpbox-container span').each(function () {
          $(this).on('click', function (event) {
                  optionClass = $(this).parent().attr('class');
                  if (inputField !== undefined && optionClass.indexOf(inputClass) > -1) {
                          Text = $(this).text();
                          $(inputField).val(Text);
                          HelpBox.push(Text);
                          var Option = $(this).parent();
                          $(Option).find('span').removeClass('click');
                          $(this).addClass('click');
                  }
          });
  });

  $('.button').click(function () {
          if ($('.button').hasClass('playAgain')) {
                  globalThis.commonWorksheet.reloadComponent();
          }
          else {
                  var inputCount = $('input[type="text"]').filter(function () {
                          return !!$(this).val();
                  }).length;
                  if (inputCount >= 3) {
                          $(inputs).removeClass('bd');
                          var Correct_Answers = ["mine", "yours", "his", "hers", "theirs", "ours"];
                          $(inputs).each(function (i) {
                                  if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
                                          $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                                          $(this).parents().prev('.correct-ans,.correct-ans5').css({'visibility':'visible','display':'inline-block'});
                                  }
                                  else {
                                          Correct_Answers_Count++;
                                  }
                          });
                          var ImgURL = "";
                          $('input,.helpbox-container span').css('pointer-events', 'none');
                          var percentage = (Correct_Answers_Count * 100) / 6;
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
                  }
                  else {
                          setTimeout(function () {
                                  $('.result').css('display', 'flex');
                                  $('.result .TextBox h1').text('Please solve at least 3 blanks before submitting');
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
  var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
          'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
  $('.imgBox img').each(function (i) {
          var t = new Date().getTime();
          $(this).attr("src", AllImages[i] + '?' + t);
  });
}
  }

}
