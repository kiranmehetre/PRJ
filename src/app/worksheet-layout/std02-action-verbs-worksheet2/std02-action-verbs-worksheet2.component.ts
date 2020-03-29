import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-action-verbs-worksheet2',
  templateUrl: './std02-action-verbs-worksheet2.component.html',
  styleUrls: ['./std02-action-verbs-worksheet2.component.scss']
})
export class Std02ActionVerbsWorksheet2Component implements OnInit {

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
  var inputValue="";
  var ClickAnswer=[];
var HelpBox=[];
  var Text="";
  var Correct_Answers_Count=0;
$('.text-container span').click(function(){
      // if($(this).hasClass('underlined')){
      //     $(this).removeClass('underlined');
      // }
      // else{
      //     $(this).parent().find('span').removeClass("underlined");
      //     $(this).addClass('underlined');
      // }
                    
      $(this).toggleClass("underlined");
      var numItems = $(this).parent().find('.underlined').length;
      if(numItems > 2){
          alert('please deselect any one');
          $(this).removeClass('underlined');
      }
  });
 
$('.button').click(function(){
if($(this).hasClass('playAgain')){
globalThis.commonWorksheet.reloadComponent();
}
else{
var Correct_Answers_Count=0;
          var clickCount=0;
          $('.question').each(function(){
              if($(this).find('.underlined').length > 0){
                  clickCount++;
              }
          });
if(clickCount >= 4){
  var Correct_Answers=["sniffs","writes","sprays","return",["saw","swimming"],"memorized","floats","entertained"];
              $('.question').each(function(i){
                  var isTrue=false;
                  var underlined=$(this).find('.underlined');
                  if(i == 4){
                      $(underlined).each(function(j){
                          if(Correct_Answers[i].indexOf($(this).text()) < 0 ){
                              $(underlined[j]).css('color','red');
                          }
                          else{
                              isTrue=true;
                          }
                      });
                      if(isTrue){
                          Correct_Answers_Count++;
                      }
                      for(var x=0; x<2; x++){
                          var Answer=$(this).find("span:contains("+Correct_Answers[i][x]+")");
                          if($(Answer).hasClass('underlined')){
                              $(Answer).addClass('colorgreen_bordered');
                          }
                          else{
                              $(Answer).addClass('colorgreen');
                          }
                      }
                  }
                  else{
                      if(underlined !== undefined){
                          if(underlined.text() !==Correct_Answers[i] ){
                              $(underlined).css('color','red');
                          }
                          else{
                              Correct_Answers_Count++;
                          }
                      }
                      var Answer=$(this).find("span:contains("+Correct_Answers[i]+")");
                      if($(Answer).hasClass('underlined')){
                          $(Answer).addClass('colorgreen_bordered');
                      }
                      else{
                          $(Answer).addClass('colorgreen');
                      }
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
  $('.text-container span').css('pointer-events','none');
}
else{
  setTimeout(function(){
    $('.result').css('display','flex');
    $('.result .TextBox h1').text('Please solve at least 4 sentences before submitting');
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
