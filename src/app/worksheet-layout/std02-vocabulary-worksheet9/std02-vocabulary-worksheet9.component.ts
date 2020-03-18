import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-vocabulary-worksheet9',
  templateUrl: './std02-vocabulary-worksheet9.component.html',
  styleUrls: ['./std02-vocabulary-worksheet9.component.scss']
})
export class Std02VocabularyWorksheet9Component implements OnInit {

  constructor() { }

  ngOnInit() {
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
  var inputField;
        var inputValue;
        var ClickAnswer=[];
  var HelpBox=[];
        var Text="";
        var Correct_Answers_Count=0;
        var inputs=$('.puzzle_container');

        $(inputs).click(function(){
            inputField=$(this);
            $(inputs).removeClass('bd');
            $(this).addClass('bd');
    inputValue=$(inputField).find('.Answer_Block > span').text().trim();
    ClickAnswer = $.grep(ClickAnswer, function(value) {
              return value != inputValue;
            });
            $(".Option_Block").filter(function() {
                return $(this).find('span').text().trim() === inputValue;
            }).removeClass('click');
    $(inputField).find('.Answer_Block > span').text('');
    $(inputField).find('.Answer_Block img').css('display','none');
        });
  $('.Option_Block').click(function(){
            if(inputField !== undefined){
                var ImgURL=$(this).find('img').attr('src');
                inputValue=$(inputField).find('.Answer_Block > span').text();
      Text=$(this).find('span').text().trim();
      HelpBox.push(Text);
      if(HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0){
        $(".Option_Block").filter(function() {
          return $(this).find('span').text().trim() === inputValue;
        }).removeClass('click');
      }
      $(this).addClass('click');
                if(ClickAnswer.indexOf(Text) > -1){

                }
                else{
                    ClickAnswer = $.grep(ClickAnswer, function(value) {
                                    return value != inputValue;
                                });
                    console.log(inputValue);
                    $(inputField).find('.Answer_Block > span').text(Text);
                    $(inputField).find('.Answer_Block img').css('display','block');
                    $(inputField).find('.Answer_Block img').attr('src',ImgURL);
                    ClickAnswer.push(Text);
                }
            }
        });
  
  $('.button').click(function(){
    if($(this).hasClass('playAgain')){
      window.location.href=window.location.href;
    }
    else{
                var Correct_Answers_Count=0;
                if($('.click').length >= 3){
                    $(inputs).removeClass('bd');
                    var Correct_Answers=["soldier","firefighter","chef","magician","nurse","lawyer"];
                    $(inputs).each(function(i){
                        var UserAnswer=$(this).find('.Answer_Block > span').text();
                        if( UserAnswer !== Correct_Answers[i]){
                            if(UserAnswer !== ""){
                                $(this).css({'color':'#ed1a1a'});
                            }
                            $(this).find('.correct_answer').css('visibility','visible');
                        }
                        else{
                            $(this).addClass('green');
                            Correct_Answers_Count++;
                        }
                    });
                    var percentage=	(Correct_Answers_Count * 100) / 6;
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
                    $('.Option_Block,.puzzle_container').css('pointer-events','none');
                }
                else{
                    setTimeout(function(){
                        $('.result').css('display','flex');
                        $('.result .TextBox h1').text('Please solve at least 3 jigsaw pieces before submitting');
                    },500);
                }
                
                $('.result,.close').click(function(){
                    $('.result').fadeOut();
                    $('.close').show();
                });
            }
  });
  
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
