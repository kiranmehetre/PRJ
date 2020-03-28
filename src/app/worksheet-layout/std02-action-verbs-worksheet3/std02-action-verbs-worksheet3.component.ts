import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-action-verbs-worksheet3',
  templateUrl: './std02-action-verbs-worksheet3.component.html',
  styleUrls: ['./std02-action-verbs-worksheet3.component.scss']
})
export class Std02ActionVerbsWorksheet3Component implements OnInit {

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
var inputField;
var ClickAnswer=[];
var inputValue;
var HelpBox = [];
$('input').click(function(){
  inputField=$(this);
  inputValue=$(this).val();
  $('input').parent().removeClass('bd');
  $(this).parent().addClass('bd');
  ClickAnswer = $.grep(ClickAnswer, function (value) {
    return value != inputValue;
  });
  $(".option").filter(function () {
    return $(this).attr('data-text') === inputValue;
  }).removeClass('click');
  $(this).val("");
});


  $('input').attr('readonly','readonly');



$('.option').each(function(){
  $(this).click(function(){

  inputValue=$(inputField).val();
    var Text=$(this).attr('data-text');
    if(inputField !== undefined){
      
      HelpBox.push(Text);
      if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
        $(".option").filter(function () {
          return $(this).attr('data-text') === inputValue;
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

      //=================
    }
  });
});
$('.button').click(function(){
      if($('.button').hasClass('playAgain'))
      {
        globalThis.commonWorksheet.reloadComponent();
      }
      else
      {
        var Correct_Answers_Count=0;
        let inputCount=$('input[type="text"]').filter(function () {
          return !! $(this).val();
      }).length;
      if(inputCount >= 4)
      {
        var Correct_answers=["6","3","8","1","7","4","2","5"];
        $('input').each(function(i){
          if($(this).val() !== Correct_answers[i]){
            $(this).css({'color':'#ed1a1a','border-color':'#000'});
            $(this).parent().prev().css('display','inline-block');
          }
          else{
            Correct_Answers_Count++;
          }
        });
        
          var percentage = (Correct_Answers_Count * 100) / 8;
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
              $('.result').delay(2500).fadeOut('slow');
              $('.close').hide();
          },500);

          setTimeout(function(){
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
          },500);

          $('.option,input').css('pointer-events','none');
          $('input').parent().removeClass('bd');
        }
        else
        {
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
