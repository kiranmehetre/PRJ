import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-articles-worksheet2',
  templateUrl: './std02-articles-worksheet2.component.html',
  styleUrls: ['./std02-articles-worksheet2.component.scss']
})
export class Std02ArticlesWorksheet2Component implements OnInit {

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
$( ".Question" ).each(function( i ) {
		
  $(this).attr('id', 'question' + i);
  });
  
  $('.Question').each(function(){
    var options=$(this).find('.option');
    $(options).each(function(){
      $(this).click(function(){
        if($(this).hasClass('click'))
        {
          $(this).find('img').attr('src','assets/std02-articles-worksheet2/img/answer_bg.png');
          options.removeClass('click');
          options.removeClass('img-shadow');
        }
        else
        {
          options.removeClass('click');
          $(this).addClass('click');
          options.removeClass('img-shadow');
          $(this).addClass('img-shadow');
          options.find('img').attr('src','assets/std02-articles-worksheet2/img/answer_bg.png');
          $(this).find('img').attr('src','assets/std02-articles-worksheet2/img/answer_bg_right.png');
        }
      });
    });
  });

  $('.button').click(function () {

    if($('.button').hasClass('playAgain'))
      {
        globalThis.commonWorksheet.reloadComponent();
      }
      else
      {
        if($('.option.click').length >= 4){
          var Correct_answers=["a","an","a","a","an","an","a","an"];
          var Correct_Answer_Count=0;
          var Click;
          var text;
          var span;
          $('.Question').each(function(i){
            Click=$(this).find('.option.click');
            if(Click !== undefined){
              span=$(Click).find('span');
              if($(span).text() !== Correct_answers[i])
              {
                $(this).find('.right img').attr('src','assets/std02-articles-worksheet2/img/answer_bg_right.png');
                $(this).find('.wrong.click img').attr('src','assets/std02-articles-worksheet2/img/answer_bg_wrong.png');
                
              }
              else{
                Correct_Answer_Count++;
              }
            }
            else{
            
            }
          });

          // $('.option.right img').css('content','url(Asset/img/answer_bg_right.png)');
          // $('.option.wrong img').css('content','url(Asset/img/answer_bg_wrong.png)');
          //	$('.option,.button').css('pointer-events','none');
          // var Correct_Answer_Count=$('.right.click').length;
            var ImgURL="";
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
                $('.result .TextBox h1').text('Please colour at least 4 shapes before submitting');
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
    $('.Result_imgBox img').each(function(i){
              var t=new Date().getTime();
              $(this).attr("src", AllImages[i]+'?'+t);
    });
}
  }

}
