import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-proper-nouns-worksheet3',
  templateUrl: './std02-proper-nouns-worksheet3.component.html',
  styleUrls: ['./std02-proper-nouns-worksheet3.component.scss']
})
export class Std02ProperNounsWorksheet3Component implements OnInit {

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
$(document).ready(function(){
  $('.text-container span').click(function(){              
            $(this).toggleClass("underlined");
            var numItems = $(this).parent().find('.underlined').length;
            if(numItems > 3){
                alert('please deselect any one');
                $(this).removeClass('underlined');
            }
        });
  
  $('.button').click(function(){
    if($(this).hasClass('playAgain')){
      window.location.href=window.location.href;
    }
    else{
                var underlinedCount=0;
                $('.text-container').each(function(){
                    if($(this).find('.underlined').length > 0){
                        underlinedCount++;
                    }
                });
      if(underlinedCount >= 4){
                    var Correct_Answers=[["Jane","Gulliver’s Travels"],["English","Maths"],"Legoland",["Rohan","Lenovo"],["Amazon","March"],["Friday","Charlie","David"],"The Arctic Ocean",["Mount Fuji","Japan"]];
                    var Correct_Answers_Count=0;
                    $('.text-container').each(function(i){
                        var isTrue=false;
                        var underlined=$(this).find('.underlined');
                        if(i == 0 || i == 1 || i == 3 || i == 4 || i == 7){
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
                                // $(this).find("span:contains("+Correct_Answers[i][x]+")").addClass('colorgreen');
                                var Answer=$(this).find('span').filter(function () {
                                                return $(this).text() === Correct_Answers[i][x];
                                            });
                                if($(Answer).hasClass('underlined')){
                                    $(Answer).addClass('colorgreen_bordered');
                                }
                                else{
                                    $(Answer).addClass('colorgreen');
                                }
                            }
                        }
                        if(i == 5){
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
                            for(var x=0; x<3; x++){
                                // $(this).find("span:contains("+Correct_Answers[i][x]+")").addClass('colorgreen');
                                var Answer=$(this).find('span').filter(function () {
                                                return $(this).text() === Correct_Answers[i][x];
                                            });
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
                            // $(this).find("span:contains("+Correct_Answers[i]+")").addClass('colorgreen');
                            var Answer=$(this).find('span').filter(function () {
                                            return $(this).text() === Correct_Answers[i];
                                        });
                            if($(Answer).hasClass('underlined')){
                                $(Answer).addClass('colorgreen_bordered');
                            }
                            else{
                                $(Answer).addClass('colorgreen');
                            }
                        }
                    });	
        setTimeout(function(){
          $('.result').css('display','flex');
          $('.result .TextBox').hide();
          $('.fabulous').removeClass('hide');
          $('.result .imgBox').show();
          $('.result').delay(2000).fadeOut('slow');
          $('.close').hide();
        },500);
        setTimeout(function(){
          $('.button').addClass('playAgain');
          $('.button.playAgain').text('solve again');
        },500);
        $('input,.text-container span').css('pointer-events','none');
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
        var t=new Date().getTime();
        $('.imgBox img').attr("src", 'assets/images/fabulous.gif'+'?'+t);
}
  }

}
