import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-antonyms-worksheet6',
  templateUrl: './std01-antonyms-worksheet6.component.html',
  styleUrls: ['./std01-antonyms-worksheet6.component.scss']
})
export class Std01AntonymsWorksheet6Component implements OnInit {

  constructor() { }

  ngOnInit() {

        
	window.onload = function () { 
    $('.loadingDiv').hide();
    setImages();
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
var clickAnswer=[];
var inputValue;
var inputs=$('input');

 $(inputs).on('click',function() {
  inputField = $(this);
  inputValue=$(this).val();
  $(inputs).parent().removeClass("bd");
  $(this).parent().addClass('bd');


  clickAnswer = $.grep(clickAnswer, function(value) {
              return value != inputValue;
            });
  $(".helpbox-ans span").filter(function() {
    return $(this).text() === inputValue;
  }).removeClass('click');
  $(this).val("");


});
$('input').attr('readonly','readonly');
var Text = '';
var HelpBox=[];

$('.helpbox-ans span').each(function() {
   $(this).on('click',function(event)
  {
    
    inputValue=$(inputField).val();
    if (inputField !== undefined) {
    Text=$(this).text().trim();
    HelpBox.push(Text);
    if(HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0){
      $(".helpbox-ans span").filter(function() {
        return $(this).text() === inputValue;
      }).removeClass('click');
    }
    $(this).addClass('click');
    if(clickAnswer.indexOf(Text)>-1){
    }
    else{
      clickAnswer = $.grep(clickAnswer, function(value) {
                                return value != inputValue;
                            });
      $(inputField).val(Text);
      clickAnswer.push(Text);
    }
  }
  } );


});





$('.button').click(function(){
if($('.button').hasClass('playAgain'))
    {
      window.location.href = window.location.href;
    }
    else
    {
      var Correct_Answers_Count=0;
      let inputCount=$('input[type="text"]').filter(function () {
        return !!$(this).val();
    }).length;
if(inputCount >= 4){
$(inputs).parent().removeClass("bd");
var Correct_answers=["moon","hot","soft","thin","short","quiet","tiny","pretty"];
$('input').each(function(i){
  if($(this).val() !== Correct_answers[i]){
    $(this).css({'color':'#ed1a1a','border-color':'#000'});
    $(this).parent().next().css('display','block');
    
  }
  else{
    Correct_Answers_Count++;
  }
});
// $('.answer-div').css('display','inline-block');
$('.helpbox-ans,input').css('pointer-events','none');
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
}
else{
setTimeout(function(){
            $('.result').css('display','flex');
            $('.result .TextBox h1').text('Please solve at least 4 blanks before submitting');
          },500);
}
    }

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
