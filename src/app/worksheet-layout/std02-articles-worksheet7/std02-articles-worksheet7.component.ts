import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-articles-worksheet7',
  templateUrl: './std02-articles-worksheet7.component.html',
  styleUrls: ['./std02-articles-worksheet7.component.scss']
})
export class Std02ArticlesWorksheet7Component implements OnInit {

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
  var options=$(this).find('.egg');
  $(options).each(function(){
    $(this).click(function(){
      
      if($(this).find('img').hasClass('click')){
        $(this).find('img').attr('src','assets/std02-articles-worksheet7/img/egg.png');
        $(this).find('img').removeClass('click');
        $(this).removeClass('color-white');
        
      }
      else{
        $(options).find('img').removeClass('click');
        $(options).removeClass('color-white');
        $(options).find('img').attr('src','assets/std02-articles-worksheet7/img/egg.png');
        $(this).find('img').addClass('click');
        $(this).find('img').attr('src','assets/std02-articles-worksheet7/img/egg_right.png');
        $(this).addClass('color-white');
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
      if($('.click').length >=4){
        var Correct_answers=["No","Yes","No","No","Yes","No","Yes","Yes"];
        var Correct_Answer_Count=0;
        var Click,span;
        $('.Question').each(function(i){
          Click=$(this).find('.click');
          span=$(Click).siblings('span');
          if($(span).text() !== Correct_answers[i])
          {
            $(span).css('color','#eaeaea');
            $(this).find('.right').attr('src','assets/std02-articles-worksheet7/img/egg_right.png');
            $(this).find('.wrong.click ').attr('src','assets/std02-articles-worksheet7/img/egg_wrong.png');
          }
          else{
            Correct_Answer_Count++;
          }
        });
      


        // $('.click').next().css('color','#eaeaea');
        // var Correct_Answer_Count=$('.right.click').length;
        var percentage=	(Correct_Answer_Count * 100) / 8;
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
      
        $('.egg').css('pointer-events', 'none');
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
          $('.result .TextBox h1').text('Please colour at least 4 eggs before submitting');
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
