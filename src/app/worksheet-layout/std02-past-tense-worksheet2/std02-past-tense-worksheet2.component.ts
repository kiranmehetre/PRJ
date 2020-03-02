import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-past-tense-worksheet2',
  templateUrl: './std02-past-tense-worksheet2.component.html',
  styleUrls: ['./std02-past-tense-worksheet2.component.scss']
})
export class Std02PastTenseWorksheet2Component implements OnInit {

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
    
			$('.options').each(function(){
				var options=$(this).find('.option span');
					$(options).each(function(){
					$(this).click(function(){
						if($(this).hasClass('underlined'))
						{
							$(this).removeClass('underlined');
						}
						else{
							$(options).removeClass('underlined');
							  $(this).addClass('underlined');
						}
						
					})
					});
			   });

				$('.button').click(function(){
					if($('.button').hasClass('playAgain'))
					{
						window.location.href = window.location.href;
					}
					else
					{
						
						var underlinedCount=$('.underlined').length;
						if(underlinedCount >= 4){
						
							$('.right').each(function(){
								if($(this).hasClass('underlined')){
									$(this).addClass('correct');
								}
								else{
									$(this).addClass('correct_white');
								}
							});
								$('.underlined').not('.right').css('color', '#ed1a1a');
							var Correct_Answers_Count=$('.underlined.right').length;
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
							$('.options').css('pointer-events','none');
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
