import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-adjectives-worksheet9',
  templateUrl: './std02-adjectives-worksheet9.component.html',
  styleUrls: ['./std02-adjectives-worksheet9.component.scss']
})
export class Std02AdjectivesWorksheet9Component implements OnInit {

  constructor() { }

  ngOnInit() {
        
	window.onload = function () { 
    $('.loadingDiv').hide()
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
// var clickAnswer="";
var inputValue;
var ClickAnswer = [];
var HelpBox = [];
var Correct_Answers_Count = 0;
 $('input').on('click',function() {
    $('input').parent().removeClass('bd');
    $(this).parent().addClass('bd');
    inputField = $(this); 
    inputValue=$(this).val();

    ClickAnswer = $.grep(ClickAnswer, function (value) {
      return value != inputValue;
    });
    $(".helpbox span").filter(function () {
      return $(this).text() === inputValue;
    }).removeClass('click');
    $(this).val("");

});
$('input').attr('readonly','readonly');
var Text = '';
$('.helpbox span').each(function() {
   $(this).on('click',function(event)
  {
    inputValue=$(inputField).val();
    if (inputField !== undefined) {
    var Text = $(this).text();
    HelpBox.push(Text);
    if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
      $(".helpbox span").filter(function () {
        return $(this).text() === inputValue;
      }).removeClass('click');
    }
    $(this).addClass('click');
    if (ClickAnswer.indexOf(Text) > -1) {

    }
    else {
      ClickAnswer = $.grep(ClickAnswer, function (value) {
        return value != inputValue;
      });
      $(inputField).val(Text);
      ClickAnswer.push(Text);
    }
    // if(clickAnswer.indexOf(Text)>-1)
    // {
    // }
    // else
    // {
    // 	$(inputField).val(Text);
    // 	clickAnswer +=Text;
    // 	clickAnswer=clickAnswer.replace(inputValue, "");
    // }
    
  }
  } );


});


$('.button').click(function () {
  if($('.button').hasClass('playAgain'))
  {
    window.location.href = window.location.href;
  }
  else
  {
    var ctr=0;
   
    $('input').parent().removeClass('bd');
    var Correct_answer;
    Correct_answer=["best","small",["peaceful","beautiful"],"tall","clean",["friendly","helpful"],"exciting","amazing"];
    var inputCount = $('input[type="text"]').filter(function () {
      return !! $(this).val();
    }).length;
    if(inputCount>=5){
      
      $('.question-container > .row > .col-12').each(function(i){
        var inputRow=$(this).find('input');
        if(i == 2 || i == 5){
          var inputRowValues=[];
          var Wrong_Answers=[];
          var inputField_Array=[];
          $(inputRow).each(function(j){
            if(Correct_answer[i].indexOf($(this).val().toString()) < 0){
              inputField_Array.push($(this));
            }
            else
            {
              inputRowValues.push($(this).val());
              Correct_Answers_Count++;
            }
          });
        

          Correct_answer[i].filter(function(el) {
                  if ($.inArray(el, inputRowValues) == -1) Wrong_Answers.push(el);
          });	

          
        
          for(var i=0; i< Wrong_Answers.length;i++){
            $(inputField_Array[i]).css({'color':'#ed1a1a','border-color':'#000'});
            $(inputField_Array[i]).parent().next('.ans-div').find('span').text(Wrong_Answers[i]);
            $(inputField_Array[i]).parent().next('.ans-div').css('display','inline-block');
          }
        }
        else{
          if($.trim($(inputRow).val().toString()) !== Correct_answer[i]){
            $(inputRow).css({'color':'#ed1a1a','border-color':'#000'});
            $(inputRow).closest('.col-12').find('.ans-div').css('display','inline-block');
          }
          else{
            Correct_Answers_Count++;
          }
        }
      });
      // $('.ans-div').css('display','inline-block');
      $('.helpbox span,input').css('pointer-events','none');
              var percentage = (Correct_Answers_Count * 100) / 10;
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
    }
    else{
        setTimeout(function(){
          $('.result').css('display','flex');
          $('.result .TextBox h1').text('Please solve at least 5 blanks before submitting');
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
$('.imgBox img').each(function(i)
{
var t=new Date().getTime();
    $(this).attr("src", AllImages[i]+'?'+t);
});
}
  }

}
