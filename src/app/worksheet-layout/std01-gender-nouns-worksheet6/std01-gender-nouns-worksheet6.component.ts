import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std01-gender-nouns-worksheet6',
  templateUrl: './std01-gender-nouns-worksheet6.component.html',
  styleUrls: ['./std01-gender-nouns-worksheet6.component.scss']
})
export class Std01GenderNounsWorksheet6Component implements OnInit {

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
  $('.puzzle.active').click(function(){
            $(this).toggleClass('click');
            var PuzzleClick=$(this).attr('word-click');
            var PuzzleClickText=$(this).find('span');
            var PuzzleClickArray=PuzzleClick.split(',');
            if(PuzzleClick !== 'queen' && PuzzleClick !== 'sister'){
                if($(this).hasClass('click')){
                    for(var i=0; i < PuzzleClickArray.length;i++){
                        $('.'+PuzzleClickArray[i]).find('div span').filter(function(){
                            return $(this).text().trim() == $(PuzzleClickText).text().toLowerCase();
                        }).addClass('orange');
                    }
                }
                else{
                    for(var i=0; i < PuzzleClickArray.length;i++){
                        $('.'+PuzzleClickArray[i]).find('div span').filter(function(){
                            return $(this).text().trim() == $(PuzzleClickText).text().toLowerCase();
                        }).removeClass('orange');
                    }
                }
            }
            else{
                var ClassText=$(PuzzleClickText).attr('class');
                if($(this).hasClass('click')){
                    for(var i=0; i < PuzzleClickArray.length;i++){
                        if(ClassText === undefined){
                            $('.'+PuzzleClickArray[i]).find('div span').filter(function(){
                                return $(this).text().trim() == $(PuzzleClickText).text().toLowerCase();
                            }).addClass('orange');
                        }
                        else{
                            $('.'+PuzzleClickArray[i]).find('.'+ClassText).addClass('orange');
                        }
                    }
                }
                else{
                    for(var i=0; i < PuzzleClickArray.length;i++){
                        if(ClassText === undefined){
                            $('.'+PuzzleClickArray[i]).find('div span').filter(function(){
                                return $(this).text().trim() == $(PuzzleClickText).text().toLowerCase();
                            }).removeClass('orange');
                        }
                        else{
                            $('.'+PuzzleClickArray[i]).find('.'+ClassText).removeClass('orange');
                        }
                    }
                }
            }
        });
  
  $('.button').click(function(){
    if($(this).hasClass('playAgain')){
      globalThis.commonWorksheet.reloadComponent();
    }
    else{
                var inputCount=0;
                for(var j=0;j<=9;j++){
                    var classNames=['.first.click','.second.click','.third.click','.fourth.click','.fifth.click','.sixth.click','.seventh.click','.eighth.click','.nineth.click','.tenth.click'];
                    if($(classNames[j]).length > 0){
                        inputCount++;
                    }
                }
                //console.log(inputCount);
      if(inputCount >= 5){
        setTimeout(function(){
          $('.result').css('display','flex');
          $('.result .TextBox').hide();
          $('.fabulous').removeClass('hide');
          $('.result .imgBox').show();
          $('.result').delay(2000).fadeOut('slow');
          $('.close').hide();
        },500);
                    $('.line').show();
        setTimeout(function(){
          $('.button').addClass('playAgain');
          $('.button.playAgain').text('solve again');
        },500);
        $('.puzzle.active').css('pointer-events','none');
      }
      else{
        setTimeout(function(){
          $('.result').css('display','flex');
          $('.result .TextBox h1').text('Please marks at least 5 words before submitting');
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
  var t=new Date().getTime();
  $('.imgBox img').attr('src','assets/images/fabulous.gif'+'?'+t);
}
  }

}
