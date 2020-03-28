import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-articles-worksheet8',
  templateUrl: './std02-articles-worksheet8.component.html',
  styleUrls: ['./std02-articles-worksheet8.component.scss']
})
export class Std02ArticlesWorksheet8Component implements OnInit {

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
var HelpBox=[];
var inputField;
var inputValue;
var ClickAnswer=[];
var inputs=$('input');
$(inputs).click(function(){
  inputField=$(this);
  inputValue=$(this).val();
  $(inputs).removeClass("bd");
  $(this).addClass("bd");

  ClickAnswer = $.grep(ClickAnswer, function(value) {
              return value != inputValue;
            });
  $(".Option_Container img").filter(function() {
    return $(this).attr('data-text') === inputValue;
  }).removeClass('blue');
  $(this).val("");
});
$('input').attr('readonly','readonly');
var Text='';
$('.Option_Container img').click(function(){
    inputValue=$(inputField).val();
  if(inputField !== undefined){
    Text=$(this).attr('data-text');
          HelpBox.push(Text);
    if(HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0){
      $(".Option_Container img").filter(function() {
        return $(this).attr('data-text') === inputValue;
      }).removeClass('blue');
    }
    $(this).addClass('blue');
    if(ClickAnswer.indexOf(Text) > -1){
    }
    else{
      ClickAnswer = $.grep(ClickAnswer, function(value) {
                                return value != inputValue;
                            });
      $(inputField).val(Text);
      ClickAnswer.push(Text);
    }
  }
});
$('.button').click(function(){
    if($('.button').hasClass('playAgain'))
    {
      globalThis.commonWorksheet.reloadComponent();
    }
    else
    {
      var Correct_answers_count=0;
      var inputCount=$('input[type="text"]').filter(function () {
                  return !!$(this).val();
                }).length;
      $(inputs).removeClass("bd");					
      if(inputCount>= 5){
        var Correct_answer;
        Correct_answer=["apple","dolphin","shoe","arrow","dress","bus",["picture","witch"],["echo","hill"]];
        $('.Question .content').each(function(i){
        var inputRow=$(this).find('input');
        if(i == 6 || i == 7){
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
              Correct_answers_count++;
            }
          });
         
          Correct_answer[i].filter(function(el) {
                  if ($.inArray(el, inputRowValues) == -1) Wrong_Answers.push(el);
          });

          //console.log(Wrong_Answers.length);
          for(var i=0; i< Wrong_Answers.length;i++){
            $(inputField_Array[i]).css({'color':'#ed1a1a',});
            $(inputField_Array[i]).next('.correct_answer').find('span').text(Wrong_Answers[i]);
            $(inputField_Array[i]).next('.correct_answer').css('display','inline-block');
          }
        }
        else{
          if($.trim($(inputRow).val().toString()) !== Correct_answer[i]){
            $(inputRow).css({'color':'#ed1a1a',});
            $(inputRow).closest('.Question').find('.correct_answer').css('display','inline-block');
          }
          else{
            Correct_answers_count++;
          }
        }
      });







      
        //$('.button,.Option_Container img,input').css('pointer-events','none');
        
        var percentage=	(Correct_answers_count * 100) / 10;
        //console.log(percentage);
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
  $('.imgBox img').each(function(i){
            var t=new Date().getTime();
            $(this).attr("src", AllImages[i]+'?'+t);
  });
}
  }

}
