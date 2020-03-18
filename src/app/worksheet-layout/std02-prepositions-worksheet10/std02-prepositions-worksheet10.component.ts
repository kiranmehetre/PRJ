import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-prepositions-worksheet10',
  templateUrl: './std02-prepositions-worksheet10.component.html',
  styleUrls: ['./std02-prepositions-worksheet10.component.scss']
})
export class Std02PrepositionsWorksheet10Component implements OnInit {

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
var clickAnswer=[];
var inputValue;
$( ".main_span" ).each(function( i ) {

$(this).attr('id', 'question' + i);

var id=$(this).attr('id', 'question' + i);
});



$('input').attr('readonly','readonly');

var inputs = document.querySelectorAll('input');

var inputField;
$('input').on('click',function() {
  inputField = $(this); 
  inputValue=$(this).val();
  $(inputs).parent().removeClass('bd');
  $(this).parent().addClass('bd');

  clickAnswer = $.grep(clickAnswer, function(value) {
              return value != inputValue;
            });
  $(".helpbox-ans span").filter(function() {
    return $(this).text() === inputValue;
  }).removeClass('click');
  $(this).val("");


});

var Text = '';
var HelpBox=[];
$('.helpbox-ans').each(function() {
  $(this).on('click',function(event)
  {
    
    if (inputField !== undefined) {
      inputValue=$(inputField).val();
      Text=$(this).text();
      HelpBox.push(Text);
      if(HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0){
        $(".helpbox-ans span").filter(function() {
          return $(this).text() === inputValue;
        }).removeClass('click');
      }
      // $(this).addClass('click');
      $(this).find('span').addClass('click');
    if(clickAnswer.indexOf(Text)>-1)
    {
    }
    else
    {
      clickAnswer = $.grep(clickAnswer, function(value) {
                                return value != inputValue;
                            });
      $(inputField).val(Text);
      clickAnswer.push(Text);
    }
  }
  } );
});



$('.button').click(function () {
    if($(this).hasClass('playAgain')){
      window.location.href=window.location.href;
    }
    else{
        var inputCount=$('input[type="text"]').filter(function () {
                                      return !!$(this).val();
                                  }).length
        var Correct_Answers_Count=0;
       
        var Correct_answer=["to","in","down","at","of","for"];

        if(inputCount >= 3){
          
              var ctr=0;
              $(inputs).parent().removeClass('bd');
              $('.main_span input').each(function(){
                if( $.trim($(this).val().toString()) !== Correct_answer[ctr]){
                  $(this).css(
                    {
                      'color' : '#ed1a1a',
                      'border-color' : '#fff'
                    }
                  );
                  $(this).siblings('.answer').css('display','inline-block');
                }
                else{
                  Correct_Answers_Count++;
                }
                ctr++;
              });
              var percentage=	(Correct_Answers_Count * 100) / 6;
              var ImgURL="";
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
              $('input,.helpbox-ans').css('pointer-events','none');

          }
          else{
              setTimeout(function(){
                $('.result').css('display','flex');
                $('.result .TextBox h1').text('Please solve at least 3 blanks before submitting');
              },500);
          }
            
              $('.result,.close').click(function(){
                $('.result').fadeOut();
                $('.close').show();
              });

      }

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
