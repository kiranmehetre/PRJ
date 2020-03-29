import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-compound-words-worksheet6',
  templateUrl: './std02-compound-words-worksheet6.component.html',
  styleUrls: ['./std02-compound-words-worksheet6.component.scss']
})
export class Std02CompoundWordsWorksheet6Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
    const globalThis = this;
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
        var ContentText="";
        var Correct_Answers_Count=0;
        var Allinputs=$('input');
        var AnswerDivInput;
        var inputs=$('.input_div input');
        $(Allinputs).attr('readonly','readonly');
        var QuestionNumber="";

        $(inputs).click(function(){
            inputField=$(this);
            QuestionNumber=$(inputField).closest('.Question_Row').find('.number').text().replace(')','').trim();
            AnswerDivInput=$(this).closest('.Question_Row').find('.Answer_div input');
            $(inputs).removeClass('bd');
            $(this).addClass('bd');
    inputValue=$(inputField).val();
    ClickAnswer = $.grep(ClickAnswer, function(value) {
              return value != inputValue;
            });
    $(".option").filter(function() {
      return $(this).text().trim() === inputValue;
    }).removeClass('click');
    $(this).val("");
            $(AnswerDivInput).val("");
        });
  $('.option').click(function(){
            if(inputField !== undefined){
                inputValue=$(inputField).val();
      Text=$(this).text().trim();
                ContentText=$(inputField).closest('.Question_Row').find('.content').text().trim();
      HelpBox.push(Text);
      if(HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0){
        $(".option").filter(function() {
          return $(this).text().trim() === inputValue;
        }).removeClass('click');
      }
      $(this).addClass('click');
                if(ClickAnswer.indexOf(Text) > -1){

                }
                else{
                    ClickAnswer = $.grep(ClickAnswer, function(value) {
                                    return value != inputValue;
                                });
                    $(inputField).val(Text);
                    ClickAnswer.push(Text);
                    if(QuestionNumber == "1" || QuestionNumber == "2" || QuestionNumber == "5" || QuestionNumber == "7" || QuestionNumber == "8"){
                        $(AnswerDivInput).val(ContentText + Text);
                    }

                    else{
                        $(AnswerDivInput).val(Text + ContentText);
                    }
                }
            }
        });
  
  $('.button').click(function(){
    if($(this).hasClass('playAgain')){
      globalThis.commonWorksheet.reloadComponent();
    }
    else{
      var Correct_Answers_Count=0;
      var inputCount=$('input[type="text"]').filter(function () {
                return !!$(this).val();
              }).length;
      if(inputCount >= 4){
        $(inputs).removeClass('bd');
        var Correct_Answers=["boat","shake","black","sea","market","basket","stick","lace"];
        $(inputs).each(function(i){
          if($.trim($(this).val().toString()) !== Correct_Answers[i]){
                            var AllWrongInputs=$(this).closest('.Question_Row').find('input');
            $(AllWrongInputs).css({'color':'#ed1a1a','border-color':'#000'});
            $(AllWrongInputs).siblings('.correct_answer').css('visibility','visible');
          }
          else{
            Correct_Answers_Count++;
          }
        });
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
        $('input,.option').css('pointer-events','none');
      }
      else{
        setTimeout(function(){
          $('.result').css('display','flex');
          $('.result .TextBox h1').text('Please solve at least 4 blanks before submitting');
        },500);
      }
    }
    $('.result,.close').click(function(){
      $('.result').fadeOut();
      $('.close').show();
    });
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
