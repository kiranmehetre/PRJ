import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-compound-words-worksheet5',
  templateUrl: './std02-compound-words-worksheet5.component.html',
  styleUrls: ['./std02-compound-words-worksheet5.component.scss']
})
export class Std02CompoundWordsWorksheet5Component implements OnInit {

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
var inputField;
var clickAnswer = [];
var inputValue = "";
var inputs = $('.question-left');

$(inputs).on('click', function () {
  inputField = $(this).next();
  inputValue = $(this).next().find('span').text();
  $(inputs).removeClass("bd");
  $(this).addClass('bd');
  clickAnswer = $.grep(clickAnswer, function (value) {
    return value != inputValue;
  });
  $(".bulb-container .col-2 img").filter(function () {
    return $(this).attr('data-text') === inputValue;
  }).removeClass('click');
  $(this).next().find('span').text("");
  $(this).next().removeClass('set_answer vissible');
});
var Text = '';
var HelpBox = [];

$('.bulb-container .col-2 img').each(function () {
  $(this).on('click', function (event) {

    //    Text=$(this).attr('data-text');
    inputValue = $(inputField).find('span').text();
    if (inputField !== undefined) {
      Text = $(this).attr('data-text');
      HelpBox.push(Text);
      if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
        $(".bulb-container .col-2 img").filter(function () {
          return $(this).attr('data-text') === inputValue;
        }).removeClass('click');
      }
      $(this).addClass('click');
      if (clickAnswer.indexOf(Text) > -1) {
      }
      else {
        clickAnswer = $.grep(clickAnswer, function (value) {
          return value != inputValue;
        });
        $(inputField).find('span').text(Text);
        // $(inputField).css('visibility','initial');
        $(inputField).addClass('set_answer vissible')
        //$(inputField).val(Text);
        clickAnswer.push(Text);
      }
    }
  });


});
$('.button').click(function () {

  if($('.button').hasClass('playAgain'))
    {
      globalThis.commonWorksheet.reloadComponent();
    }
    else
    {
      var Correct_Answers_Count = 0;
  if ($('.set_answer').length >= 5) {
    var Correct_answers = ["worm", "wise", "yard", "works", "comb", "quake", "keeper", "doors", "print", "book"];
    $('.question-right').each(function (i) {
      var set_answer = $(this).find('.answer-container span').text().trim();
      if (set_answer !== "") {
        if (set_answer !== Correct_answers[i]) {
          $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
          $(this).next().addClass('answer-display');
        }
        else {
          Correct_Answers_Count++;
          // $(this).css({'font-weight':'bold','color':'#20bb15'})
          $(this).find('img').addClass('bulb-glow');

        }
      }
      else {
        $(this).find('.answer-container span').text(Correct_answers[i]);
      }

    });
    // $('.answer-div').css('display','inline-block');

    var percentage = (Correct_Answers_Count * 100) / 10;
    var DisplayResult="";    
            if(percentage > 80){
                DisplayResult='.outstanding';
            }
            else if(percentage > 60){
                DisplayResult='.brilliant';
            }
            else if(percentage > 50){
                DisplayResult='.good-work';
            }
            else if(percentage <= 50){
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
    
    $(inputs).removeClass("bd");
    $('.question-right').css({ 'visibility': 'visible' });
    $('.question-container,.bulb-container').css('pointer-events', 'none');
  }
  else {
    setTimeout(function () {
      $('.result').css('display', 'flex');
      $('.result .TextBox h1').text('Please solve at least 5 batteries before submitting');
    }, 500);
  }
    }
});

$('.result,.close').click(function () {
  $('.result').fadeOut();
  $('.close').show();
});
function setImages(){
  var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
  'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
  $('.imgBox img').each(function(i){
            var t=new Date().getTime();
            $(this).attr("src", AllImages[i]+'?'+t);
  });
}
  }

}
