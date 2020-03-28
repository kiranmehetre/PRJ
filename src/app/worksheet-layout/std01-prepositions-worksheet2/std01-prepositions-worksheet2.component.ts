import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std01-prepositions-worksheet2',
  templateUrl: './std01-prepositions-worksheet2.component.html',
  styleUrls: ['./std01-prepositions-worksheet2.component.scss']
})
export class Std01PrepositionsWorksheet2Component implements OnInit {

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
  var Correct_Answers_Count = 0;
  $( ".Question .col-9" ).each(function( i ) {
    $(this).attr('id', 'question' + i);
  });
  var selectext=false;
  $('.Question .col-9 span').click(function () {
    selectext=true;
    if($(this).hasClass('underlined')){
      var click=$(this).parent().attr('id');
      $("#"+click+" span").removeClass("underlined");
    }
    else{
      var click=$(this).parent().attr('id');
      $("#"+click+" span").removeClass("underlined");
      $(this).addClass("underlined");
    }
  });
    
    
    $('.button').click(function () {
      if($('.button').hasClass('playAgain'))
      {
        globalThis.commonWorksheet.reloadComponent();
      }
      else
      {
        var ClickCount=$('span.underlined').length;
        if(ClickCount < 5)
        {
          setTimeout(function(){
          $('.result').css('display','flex');
          $('.result .TextBox h1').text('Please solve at least 5 sentences before submitting');
          },500);
        }
        else
        {
          // var i=0;
          // var Correct_Answers=["from","into","in","behind","under","against","among","along","to","beside"];
          // $('.Question').each(function(i){
          // 	var underlined=$(this).find('.underlined');
          // 	if(underlined !== undefined){
          // 		if(underlined.text() !==Correct_Answers[i] ){
          // 			$(underlined).css('color','red');
          // 		}
          // 		else{
          // 			Correct_Answers_Count++;
          // 		}
          // 		$(this).find("span:contains("+Correct_Answers[i]+")").filter(function(){
          //         return $(this).text() === Correct_Answers[i];}).addClass('underlined');
          // 	}
          // });
          $('.right').each(function(){
            if($(this).hasClass('underlined')){
              $(this).addClass('correct');
            }
            else{
              $(this).addClass('correct_white');
            }
          });
          $('.underlined').not('.right').css('color', '#ed1a1a');
          var Correct_Answers_Count=$('.underlined.right').length;
          var percentage=	(Correct_Answers_Count * 100) / 10;
          $('.Question .col-9 span').css('pointer-events','none');
          var DisplayResult="";    
          if(percentage > 80)
          {
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
        }
      }
    });
});
$('.result,.close').click(function(){
$('.result').fadeOut();
$('.close').show();
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
