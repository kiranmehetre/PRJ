import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std01-conjunctions-worksheet1',
  templateUrl: './std01-conjunctions-worksheet1.component.html',
  styleUrls: ['./std01-conjunctions-worksheet1.component.scss']
})
export class Std01ConjunctionsWorksheet1Component implements OnInit {

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
$(document).ready(function(){
  var imgUrl="";
  $('.text-container').click(function(){
    $(this).toggleClass('click');
    
  });
  $('.button').click(function(){

    if($('.button').hasClass('playAgain'))
    {
      globalThis.commonWorksheet.reloadComponent();
    }
    else
    {
      if($('.click').length >= 3)
      {
        $('.wrong-answer.click').css({"background":"url(assets/std01-conjunctions-worksheet1/img/wrong.png)  no-repeat","background-size":"100%"});
        $('.correct.click').css({"background":"url(assets/std01-conjunctions-worksheet1/img/correct.png)  no-repeat","background-size":"100%"});
        $('.correct').not('.click').css({"background":"url(assets/std01-conjunctions-worksheet1/img/correct.png)  no-repeat","background-size":"100%"});
        $('.text-container').css('pointer-events','none');
        
        var wrong_click=$('.wrong-answer.click').length;
        var correct_click=$('.correct.click').length;
        var Correct_Answers_Count=correct_click-wrong_click;
        var percentage=	(Correct_Answers_Count * 100) / 6;
        setTimeout(function(){
        $('.result').css('display','flex');
        $('.result .TextBox').hide();
        $('.fabulous').removeClass('hide');
        $('.result .imgBox').show();
        $('.result').delay(2000).fadeOut('slow');
        $('.close').hide();
        },500);

      setTimeout(function(){
        $('.button').addClass('playAgain');
        $('.button.playAgain').text('solve again');
      },500);
      
      }
      else{
        setTimeout(function(){
          $('.result').css('display','flex');
          $('.result .TextBox h1').text('Please colour at least 6 circles before submitting');
        },500);
      }
    }
        });
});

$('.result,.close').click(function(){
$('.result').fadeOut();
$('.close').show();
});	
function setImages(){
var AllImages=['assets/images/fabulous.gif'];
  $('.imgBox img').each(function(i){
            var t=new Date().getTime();
            $(this).attr("src", AllImages[i]+'?'+t);
  });
}
  }

}
