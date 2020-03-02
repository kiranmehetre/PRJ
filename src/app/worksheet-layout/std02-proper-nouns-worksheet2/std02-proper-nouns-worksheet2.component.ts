import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-proper-nouns-worksheet2',
  templateUrl: './std02-proper-nouns-worksheet2.component.html',
  styleUrls: ['./std02-proper-nouns-worksheet2.component.scss']
})
export class Std02ProperNounsWorksheet2Component implements OnInit {

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
$( ".Question" ).each(function(i) {
  $(this).attr('id', 'question' + i);
  var id=$(this).attr('id', 'question' + i);
});

$('input').attr('readonly','readonly');
  var inputs = $('input');
var inputField;     
  var inputClass="";
  var optionClass="";
  var inputValue;
$('.Question input').on('click',function() {
   //  debugger;
inputField = $(this); 
      inputClass=$(this).attr('class');
      inputValue=$(inputField).val();
      $(inputs).removeClass('bd');
      $(this).addClass('bd');
      $(".option span").filter(function() {
          return $(this).text() === inputValue;
      }).removeClass('click');
      $(this).val("");
});

var Text = '';
  var HelpBox=[];
$('.option span').each(function() {
 $(this).on('click',function(event)
{
         // debugger;
          optionClass=$(this).parent().parent().attr('class');
          inputClass=inputClass.replace('bd','').trim();
  if (inputField !== undefined && optionClass.indexOf(inputClass) > -1) {
              inputValue=$(inputField).val();
              Text=$(this).text();
              HelpBox.push(Text);
              if(HelpBox.indexOf(inputValue) > -1){
                  $(".option span").filter(function() {
                      return $(this).text() === inputValue;
                  }).removeClass('click');
              }
              $(this).addClass('click');
              $(inputField).val(Text);
}
} );
});

$('.button').click(function () {
      if($(this).hasClass('playAgain')){
           window.location.href=window.location.href;
          // window.location.reload();
          // $(inputs).val("");
      //    $('.imgBox img').attr('src','');
      }
      else{
          var inputCount=$('input[type="text"]').filter(function () {
                                  return !!$(this).val();
                              }).length;
          var Correct_Answers_Count=0;
         
          $(inputs).removeClass('bd');
          var Correct_answer=["Albert","Monday","July","Brazil","Geography","Nike","Indian Ocean","River Nile"];
          if(inputCount >3){
              var ctr=0;
              $('.Question input').each(function(){
                  if($(this).val().toString().trim() !== Correct_answer[ctr]){
                      $(this).css({'color' : '#ed1a1a'});
                      $(this).siblings('.correct_answer').css('display','inline-block');
                  }
                  else{
                      Correct_Answers_Count++;
                  }
                  ctr++;
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
                  $('.result .imgBox').show();
                  $('.result').delay(2000).fadeOut('slow');
                  $('.close').hide();
                  $(DisplayResult).removeClass('hide');
              },500);
              $('input,.option span').css('pointer-events','none');
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
