import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-comma-worksheet2',
  templateUrl: './std02-comma-worksheet2.component.html',
  styleUrls: ['./std02-comma-worksheet2.component.scss']
})
export class Std02CommaWorksheet2Component implements OnInit {

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

    $('.option').css('cursor','pointer');
		var inputField;
		$('input').click(function(){
			inputField=$(this);
			$('input').parent().removeClass('bd'); 
			$(this).closest('.input-span').addClass('bd'); 
			$(this).val('');
		});
		$('input').attr('readonly','readonly');
		$('.option').click(function(){
			if(inputField !== undefined){
				$(inputField).val($(this).find('span').text().trim());
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
          var inputCount;
          inputCount=$('input[type="text"]').filter(function () {
                            return !! $(this).val();
                        }).length;
						if(inputCount >= 4)
						{
							$('input').parent().removeClass('bd'); 
							$('input').each(function(){
								if($(this).val() !== ","){
									$(this).css({'color':'#ed1a1a'});
									$(this).parent().next().css('display','inline-block');
								}
								else
								{
									Correct_Answers_Count++;
								}
							});
							//$('.answer-span').css('display','inline-block');
							$('.option,input').css('pointer-events','none');
						//	var percentage=	(Correct_Answers_Count * 100) / 12;
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

function setImages() {
    var t = new Date().getTime();
    $('.imgBox img').attr("src", 'assets/images/fabulous.gif' + '?' + t);
}
  }

}
