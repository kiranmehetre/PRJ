import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std01-gender-nouns-worksheet10',
  templateUrl: './std01-gender-nouns-worksheet10.component.html',
  styleUrls: ['./std01-gender-nouns-worksheet10.component.scss']
})
export class Std01GenderNounsWorksheet10Component implements OnInit {

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
$(document).ready(function(){
  var Replace_Word;
        var inputValue="";
        var ClickAnswer=[];
  var HelpBox=[];
        var Text="";
        var Correct_Answers_Count=0;
        var Replace_Words=$('.replace_word');

        $(Replace_Words).click(function(){
            Replace_Word=$(this);
            $(Replace_Words).removeClass('green');
            $(this).addClass('green');
    inputValue=$(Replace_Word).text();
    ClickAnswer = $.grep(ClickAnswer, function(value) {
              return value != inputValue;
            });
    $(".option").filter(function() {
      return $(this).text().trim() === inputValue;
    }).removeClass('click');
    $(this).text($(this).attr('data-text'));
            $(Replace_Word).removeClass('blue');
        });
  $('.option').click(function(){
            if(Replace_Word !== undefined){
                inputValue=$(Replace_Word).text();
      Text=$(this).text().trim();
      HelpBox.push(Text);
      if(HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0){
        $(".option").filter(function() {
          return $(this).text().trim() === inputValue;
        }).removeClass('click');
      }
      $(this).addClass('click');
                if(ClickAnswer.indexOf(Text) > -1){

                }
                else{
                    ClickAnswer = $.grep(ClickAnswer, function(value) {
                                    return value != inputValue;
                                });
                    $(Replace_Word).text(Text);
                    ClickAnswer.push(Text);
                    $(Replace_Word).addClass('blue');
                }
            }
        });
  
  $('.button').click(function(){
    if($(this).hasClass('playAgain')){
      window.location.href=window.location.href;
    }
    else{
      var Correct_Answers_Count=0;
      if($('.blue').length >= 4){
        $(Replace_Words).removeClass('green');
        var Correct_Answers=["girl","goddess","king","prince","waiter","bitch","tabby cat","vixen"];
        $(Replace_Words).each(function(i){
          if($.trim($(this).text()) !== Correct_Answers[i]){
            $(this).css({'color':'#ed1a1a'});
            $(this).siblings('.correct_answer').css('visibility','visible');
          }
          else{
            Correct_Answers_Count++;
          }
        });
        var percentage=	(Correct_Answers_Count * 100) / 8;
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
        $('.replace_word,.option').css('pointer-events','none');
      }
      else{
        setTimeout(function(){
          $('.result').css('display','flex');
          $('.result .TextBox h1').text('Please solve at least 4 blanks before submitting');
        },500);
      }
    }
    $('.result,.close').click(function(){
      $('.result').fadeOut();
      $('.close').show();
    });
  });
  
    });
function setImages(){
  var AllImages=['assets/images/keep-practicing.gif','assets/images/outstanding.gif','assets/images/brilliant.gif',
  'assets/images/good-work.gif','assets/images/fabulous.gif'];
  $('.imgBox img').each(function(i){
            var t=new Date().getTime();
            $(this).attr("src", AllImages[i]+'?'+t);
  });
}
  }

}
