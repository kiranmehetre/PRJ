import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std02-articles-worksheet9',
  templateUrl: './std02-articles-worksheet9.component.html',
  styleUrls: ['./std02-articles-worksheet9.component.scss']
})
export class Std02ArticlesWorksheet9Component implements OnInit {

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
    var Correct_Answers_Count=0;
		$( ".content" ).each(function( i ) {
			$(this).attr('id', 'question' + i);
			var id=$(this).attr('id', 'question' + i);
		});
		var inputField;
		$('.content input').on('click',function() {
			inputField = $(this); 
			$('input').removeClass('bd');
			$(this).addClass('bd');
			$(this).val('');
		});
		$('input').attr('readonly','readonly');
		var inputs = document.querySelectorAll('input');

	var Text = '';

	$('.option').on('click', function (event) {
			var Text = $(this).text();
			if (inputField !== undefined) {
				var Text = $(this).text();
				$(inputField).val(Text.trim());
			}
		});
	$('.button').click(function(){
		if($('.button').hasClass('playAgain'))
			{
				globalThis.commonWorksheet.reloadComponent();
			}
			else
			{
				var inputCount=0;
				$('.Question').each(function(){
					if($(this).find('input').filter(function () {return !!$(this).val();}).length > 0){
						inputCount++;
					}
				});
				if(inputCount >= 4){
					$('input').removeClass('bd');
					var  Correct_Answers = ["a","an","the","an","the","a","an","the"];
					//console.log('input');
					 //console.log(Correct_Answers);
					
					$('.Question').each(function(i){
						if(i==2){
							var input=$(this).find('input');
							var isTrue=false;
							$(input).each(function(){
								if($(this).val() !== "the"){
									$(this).css({'color':'#ed1a1a','border-color':'#000'});
									$(this).next().css('display','inline-block');
								}
								else{
									isTrue=true
								}
							});
							if(isTrue){
								Correct_Answers_Count++;
							}
						}
						else{
							if($(this).find('input').val() !== Correct_Answers[i]){
								$(this).find('input').css({'color':'#ed1a1a','border-color':'#000'});
							$(this).find('input').next().css('display','inline-block');
							}
							else{
								Correct_Answers_Count++;
							}
						}
					});
					$('input,.option').css('pointer-events','none');
					var percentage = (Correct_Answers_Count * 100) / 8;
						var DisplayResult = "";
						if (percentage > 80) {
							DisplayResult = '.outstanding';
						}
						else if (percentage > 60) {
							DisplayResult = '.brilliant';
						}
						else if (percentage >= 50) {
							DisplayResult = '.good-work';
						}
						else if (percentage < 50) {
							DisplayResult = '.keep-practicing';
						}
						setTimeout(function () {
							$('.result').css('display', 'flex');
							$('.result .TextBox').hide();
							$(DisplayResult).removeClass('hide');
							$('.result .imgBox').show();
							$('.result').delay(2000).fadeOut('slow');
							$('.close').hide();
						}, 500);
						setTimeout(function () {
							$('.button').addClass('playAgain');
							$('.button.playAgain').text('solve again');
						}, 500);
				}
				else{
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
				function setImages() {
          var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
          'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
			$('.imgBox-result img').each(function (i) {
				var t = new Date().getTime();
				$(this).attr("src", AllImages[i] + '?' + t);
			});
		}

  }

}
