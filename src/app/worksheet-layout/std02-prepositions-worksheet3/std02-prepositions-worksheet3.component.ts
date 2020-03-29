import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-prepositions-worksheet3',
  templateUrl: './std02-prepositions-worksheet3.component.html',
  styleUrls: ['./std02-prepositions-worksheet3.component.scss']
})
export class Std02PrepositionsWorksheet3Component implements OnInit {

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
    				
			$('.text-container span').click(function(){                
        $(this).toggleClass("underlined");
        var numItems = $(this).parent().find('.underlined').length;
        if(numItems > 2){
            alert('please deselect any one');
            $(this).removeClass('underlined');
        }
    });
$('.button').click(function(){
  if($('.button').hasClass('playAgain'))
  {
    globalThis.commonWorksheet.reloadComponent();
  }
  else
  {
    var underlinedCount=0;
    var Correct_Answers_Count=0;
    $('.question').each(function(){
      if($(this).find('.underlined').length > 0){
        underlinedCount++;
      }
    });
    if(underlinedCount >= 4){
    

      $('.question').each(function(i){
        var isTrue=false;
        var underlined=$(this).find('.underlined');
        if(i == 0){
          $(underlined).each(function(j){
            if($(this).hasClass('right')){
              isTrue=true;
            }
          });
          if(isTrue){
            Correct_Answers_Count++;
          }
        }
        else{
          if(underlined !== undefined){
            if($(underlined).hasClass('right')){
              Correct_Answers_Count++;
            }
          }
        }
      });		
      $('.right').each(function(){
        if($(this).hasClass('underlined')){
          $(this).addClass('correct');
        }
        else{
          $(this).addClass('correct_white');
        }
      });	

      $('.underlined').not('.right').css('color', '#ed1a1a');
      var percentage=	(Correct_Answers_Count * 100) / 8;
      var DisplayResult="";    
      if(percentage > 80)
      {
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
      $('.text-container span').css('pointer-events','none');
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
        $('.result .TextBox h1').text('Please solve at least 4 sentences before submitting');
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
