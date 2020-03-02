import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-adjective-worksheet3',
  templateUrl: './std01-adjective-worksheet3.component.html',
  styleUrls: ['./std01-adjective-worksheet3.component.scss']
})
export class Std01AdjectiveWorksheet3Component implements OnInit {

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
			$( ".Question" ).each(function( i ) {
				$(this).attr('id', 'question' + i);
			});
			$('.Question').each(function(){
				var options=$(this).find('.option');
				$(options).each(function(){
					$(this).click(function(){
						$(this).toggleClass('click');
						var parentDiv=$(this).parent().attr('id')
						var questionNumber = parentDiv[parentDiv.length -1];
						var numItems = $('#question'+questionNumber+' .click').length;
						if(numItems>2)
						{
							alert("Please Deselect Ony One");
							$(this).toggleClass('click');
						}
					});
				});
			});
			$('.button').click(function(){
				if($(this).hasClass('playAgain')){
					window.location.href=window.location.href;
				}
				else{
					var Correct_Answers_Count=0;
					var clickCount=0;
					$('.Question').each(function(){
						if($(this).find('.option.click').length >= 2){
							clickCount++;
						}
					});
					if(clickCount >= 3){
						// $('.right-ans').css('background-color','#2bab3e');
						// $('.wrong-ans').css('background-color','#c42c2c');
						$('.Question').each(function(){
							if($(this).find('.right-ans.click').length > 0){
								Correct_Answers_Count++;
							}
						});
						$('.right-ans').css('background-color','#2bab3e');
						$('.wrong-ans.click').css('background-color','#c42c2c')
						var percentage=	(Correct_Answers_Count * 100) / 6;
						var DisplayResult="";
					
							DisplayResult='.fabulous';
						
						setTimeout(function(){
							$('.result').css('display','flex');
							$('.result .TextBox').hide();
							$(DisplayResult).removeClass('hide');
							$('.result .imgBox').show();
							$('.result').delay(2000).fadeOut('slow');
							$('.close').hide();
						},500);
						$('.option').css('pointer-events','none');
						setTimeout(function(){
							$('.button').addClass('playAgain');
							$('.button.playAgain').text('solve again');
						},500);
					}
					else{
						setTimeout(function(){
							$('.result').css('display','flex');
							$('.result .TextBox h1').text('Please colour at least 6 boxes before submitting');
						},500);
					}
					
					$('.result,.close').click(function(){
						$('.result').fadeOut();
						$('.close').show();
					});
				}
			});
			
        });
		function setImages(){
			var AllImages=['assets/images/fabulous.gif'];
			$('.imgBox img').each(function(i){
                var t=new Date().getTime();
                $(this).attr("src", AllImages[i]+'?'+t);
			});
		}

  }

}
