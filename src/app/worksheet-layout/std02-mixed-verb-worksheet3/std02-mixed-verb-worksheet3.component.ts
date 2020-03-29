import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-mixed-verb-worksheet3',
  templateUrl: './std02-mixed-verb-worksheet3.component.html',
  styleUrls: ['./std02-mixed-verb-worksheet3.component.scss']
})
export class Std02MixedVerbWorksheet3Component implements OnInit {

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
  var Correct_Answers_Count=0;
  var inputs=$('input');
  var inputNumber="";
  var spanNumber="";
  var dataText="";
  $(inputs).attr('readonly','readonly');
$(inputs).css('cursor','pointer');

  $(inputs).click(function(){
      inputField=$(this);
      inputNumber=$(this).parent().siblings('.number').text().trim();
      $(inputs).removeClass('bd');
      $(this).addClass('bd');
inputValue=$(inputField).val();
      dataText="."+$(this).attr('data-text');
      $(dataText+" .content span").filter(function() {
          return $(this).text().trim() === inputValue;
      }).removeClass('underlined');

      ClickAnswer = $.grep(ClickAnswer, function(value) {
        return value != inputValue;
      });
$("u").filter(function() {
return $(this).text().trim() === inputValue;
}).removeClass('underlined');

      $(this).val("");
  });
$('u').click(function(){
      spanNumber=$(this).parent().siblings('.number').text().trim().replace(')','');
      if(inputField !== undefined && spanNumber===inputNumber){
          inputValue=$(inputField).val();
Text=$(this).text().trim();
HelpBox.push(Text);
if(HelpBox.indexOf(inputValue) > -1){
  $("u").filter(function() {
    return $(this).text().trim() === inputValue;
  }).removeClass('underlined');
}
$(this).addClass('underlined');
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
          var Correct_Answers_Count=0;
if($('.tree.left input').filter(function () { return !!$(this).val();}).length >= 4 && $('.tree.right input').filter(function () { return !!$(this).val();}).length >= 4){
$(inputs).removeClass('bd');
var Correct_Answers=["has","is","will","are","shall","have","am","can","won","travelling","open","listening","wake","finished","putting","come"];
$(inputs).each(function(i){
  if($.trim($(this).val().toString()) !== Correct_Answers[i]){
    $(this).css({'color':'#ed1a1a','border-color':'#000'});
    $(this).siblings('.correct_answer').css('visibility','visible');
  }
  else{
                  Correct_Answers_Count++;
              }
});
          $('input,.options span,.content span').css('pointer-events','none');
var percentage=	(Correct_Answers_Count * 100) / 16;
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
  $('.result .TextBox h1').text('Please solve at least 4 blanks in each tree before submitting');
},500);
}
}

});

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
