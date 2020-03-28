import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std01-antonyms-worksheet1',
  templateUrl: './std01-antonyms-worksheet1.component.html',
  styleUrls: ['./std01-antonyms-worksheet1.component.scss']
})
export class Std01AntonymsWorksheet1Component implements OnInit {

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

  $('.question').each(function(){
 var options=$(this).find('.option');
   $(options).each(function(){
   $(this).click(function(){
     if($(this).hasClass('click'))
     {
       $(this).removeClass('click');
     }
     else{
       $(options).removeClass('click');
         $(this).addClass('click');
     }
     
   })
   });
  });
  
});
$('.button').click(function(){
if($('.button').hasClass('playAgain'))
{
 globalThis.commonWorksheet.reloadComponent();
}
else
{
 if($('.click').length >= 4)
 {
   var Correct_answers=["no","girl","out","borrow","go","found","there","night"];
   var Click;
   var correct_Answer_count=0;
   $('.question').each(function(i){
     Click=$(this).find('.click');
     var checkText=$(Click).text().trim();
     if(Click !== undefined ){
       if($(Click).text().trim() == Correct_answers[i])
       {
         $(Click).css('border','3px solid #20bb15');
         correct_Answer_count++;
       }
       else
       {
         $(this).find('.wrong.click').css('background-color','#ab2323');
         $(this).find('.correct').css('background-color','#20bb15');
         //correct_Answer_count--;
       }
     }
     else{
       //$(this).find('.wrong').not('click').css('background-color','#ab2323');
       $(this).find('.correct').not('click').css('background-color','#20bb15');
     }
     
   });

   $('.option').css('pointer-events','none');
   
   // var correct_Answer_count=$('.right.block.click').length;
   var percentage=	(correct_Answer_count * 100) / 8;
   var DisplayResult="";    
   if(percentage > 80)
   {
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
   
 }
 else{
   setTimeout(function(){
               $('.result').css('display','flex');
               $('.result .TextBox h1').text('Please colour at least 4 boxes before submitting');
             },500);
       }
}
});

$('.result,.close').click(function(){
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
