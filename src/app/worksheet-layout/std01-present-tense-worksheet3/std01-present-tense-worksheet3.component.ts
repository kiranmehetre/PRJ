import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-present-tense-worksheet3',
  templateUrl: './std01-present-tense-worksheet3.component.html',
  styleUrls: ['./std01-present-tense-worksheet3.component.scss']
})
export class Std01PresentTenseWorksheet3Component implements OnInit {

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


    
    $(document).ready(function(){
			$('.option').click(function(){
          if($(this).hasClass('click')){
              $(this).removeClass('click');
          }
          else{
              $(this).parent().find('.option').removeClass("click");
              $(this).addClass('click');
          }
      });
			
			$('.button').click(function(){
				if($(this).hasClass('playAgain')){
					window.location.href=window.location.href;
				}
				else{
					var Correct_Answers_Count=0;
					if($('.click').length >= 4){
						Correct_Answers_Count=$('.correct.click').length;
            $('.correct.click').addClass('colorgreen_bordered');
            $('.correct').not('.click').addClass('colorgreen');
            $('.click').not('.correct').addClass('wrong');
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
						$('input,.option').css('pointer-events','none');
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
