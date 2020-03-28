import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-prepositions-worksheet2',
  templateUrl: './std02-prepositions-worksheet2.component.html',
  styleUrls: ['./std02-prepositions-worksheet2.component.scss']
})
export class Std02PrepositionsWorksheet2Component implements OnInit {

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
var ClickAnswer = [];
var HelpBox = [];
var inputValue;
var Correct_Answers_Count = 0;
var percentage = "";
var inputs = $('input');
$(inputs).attr('readonly', 'readonly');
var inputField;
$(inputs).on('click', function () {
  inputField = $(this);
  inputValue = $(this).val();
  $(inputs).removeClass('bd');
  $(this).addClass('bd');
  ClickAnswer = $.grep(ClickAnswer, function (value) {
    return value != inputValue;
  });
  $(".help-box .col-3 span").filter(function () {
    return $(this).text() === inputValue;
  }).removeClass('click');
  $(this).val("");
});
var Text = '';
$('.help-box .col-3').each(function () {
  $(this).on('click', function (event) {
    inputValue = $(inputField).val();
    if (inputField !== undefined) {
      inputValue = $(inputField).val();
      Text = $(this).find('span').text().trim();
      HelpBox.push(Text);
      if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
        $(".help-box .col-3 span").filter(function () {
          return $(this).text() === inputValue;
        }).removeClass('click');
      }
      $(this).find('span').addClass('click');
      if (ClickAnswer.indexOf(Text) > -1) {

      }
      else {
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(inputField).val(Text);
        ClickAnswer.push(Text);
      }
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
    if (inputCount >= 4) {
      $(inputs).removeClass('bd');
      var Correct_Answers = ["over", "across", "around", "next to", "between", "among", "through", "against"];
      $(inputs).each(function (i) {
        if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
          $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
          $(this).closest('.col-11').find('.answer').css('visibility', 'visible');
        }
        else {
          Correct_Answers_Count++;
        }
      });
      var percentage = (Correct_Answers_Count * 100) / 8;
      var DisplayResult="";    
            if(percentage > 80){
                DisplayResult='.outstanding';
            }
            else if(percentage > 60){
                DisplayResult='.brilliant';
            }
            else if(percentage >= 50){
                DisplayResult='.good-work';
            }
            else if(percentage < 50){
                DisplayResult='.keep-practicing';
            }
          
            setTimeout(function(){
                $('.result').css('display','flex');
                $('.result .TextBox').hide();
                $(DisplayResult).removeClass('hide');
                $('.result .imgBox').show();
                $('.result').delay(2000).fadeOut('slow');
                $('.close').hide();
            },500);

            setTimeout(function(){
                $('.button').addClass('playAgain');
                $('.button.playAgain').text('solve again');
            },500);

      // $('.correct-ans span').css('display','inline-block');
      $('input,.help-box').css('pointer-events', 'none');
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
