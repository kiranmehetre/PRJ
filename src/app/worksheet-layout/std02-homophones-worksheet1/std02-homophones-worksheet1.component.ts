import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-homophones-worksheet1',
  templateUrl: './std02-homophones-worksheet1.component.html',
  styleUrls: ['./std02-homophones-worksheet1.component.scss']
})
export class Std02HomophonesWorksheet1Component implements OnInit {

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
$('.Question').each(function(){
  var options=$(this).find('span');
  $(options).each(function(){
    $(this).click(function(){
      if($(this).hasClass('click'))
      {
        $(options).removeClass('click');
          $(this).removeClass('click');
      }
      else{
          $(options).removeClass('click');
          $(this).addClass('click');
      }
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
      var Correct_Answers_Count=0;
  if($('.click').length > 4 ){
    var Correct_answers=["flower","knight","bee","hare","fowl","one","knot","fairy","bear"];
    var Click;
    $('.Question').each(function(i){
      Click=$(this).find('.click');
      if(Click.length > 0){
        if($(Click).text() !== Correct_answers[i]){
          $(this).find('.wrong.click').addClass('wrong-click');
        }
        else{
          Correct_Answers_Count++;
        }
      }
    });
    $('.answer').css('background-color','#2bab3e');
    var percentage=	(Correct_Answers_Count * 100) / 9;
    var DisplayResult="";    
                DisplayResult='.fabulous';
          
          
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
                  $('.result .TextBox h1').text('Please colour at least 5 boxes before submitting');
                },500);
                }

    }
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
