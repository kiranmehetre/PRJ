import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-noun',
  templateUrl: './noun.component.html',
  styleUrls: ['./noun.component.scss']
})
export class NounComponent implements OnInit {

  constructor() { }

  ngOnInit() {

          window.onload = function () { 
            $('.loadingDiv').hide();
            setImages();
      }
      let theToggle = document.getElementById('toggle');
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
            let newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
            if (hasClass(elem, className)) {
                while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
                    newClass = newClass.replace(' ' + className + ' ', ' ');
                }
                elem.className = newClass.replace(/^\s+|\s+$/g, '');
            }
        }
        // toggleClass
        function toggleClass(elem, className) {
            let newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
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
			      let inputField;
            let inputValue= "";
            let ClickAnswer= [];
            let HelpBox=[];
            let Text="";
            let Correct_Answers_Count=0;
            let inputs=$('.puzzle_container');

            $(inputs).click(function(){
                inputField=$(this);
                $(inputs).removeClass('bd');
                $(this).addClass('bd');
				        inputValue=$(inputField).find('.Answer_Block > span').text().trim();
			        	ClickAnswer = $.grep(ClickAnswer, function(value) {
									return value != inputValue;
                });
                
                $(".Option_Block").filter(function() {
                    return $(this).find('span').text().trim() === inputValue;
                }).removeClass('click');
				        $(inputField).find('.Answer_Block > span').text('');
				        $(inputField).find('.Answer_Block img').css('display','none');
            });

			      $('.Option_Block').click(function(){
                if(inputField !== undefined){
                    let ImgURL=$(this).find('img').attr('src');
                    inputValue=$(inputField).find('.Answer_Block > span').text();

				          	Text=$(this).find('span').text().trim();
                    HelpBox.push(Text);
                    
                    if(HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0){
                      $(".Option_Block").filter(function() {
                        return $(this).find('span').text().trim() === inputValue;
                      }).removeClass('click');
                    }

                    $(this).addClass('click');
                              if(ClickAnswer.indexOf(Text) > -1){

                              }
                              else{
                                  ClickAnswer = $.grep(ClickAnswer, function(value) {
                                                  return value != inputValue;
                                              });
                                  console.log(inputValue);
                                  $(inputField).find('.Answer_Block > span').text(Text);
                                  $(inputField).find('.Answer_Block img').css('display','block');
                                  $(inputField).find('.Answer_Block img').attr('src',ImgURL);
                                  ClickAnswer.push(Text);
                              }
                    }
            });
			
            $('.button').click(function(){
              if($(this).hasClass('playAgain')){
                window.location.href=window.location.href;
              }
              else{
                          let Correct_Answers_Count=0;
                          if($('.click').length >= 3){
                              $(inputs).removeClass('bd');
                              let Correct_Answers=["stamps","books","people","ducks","rabbits","deer"];
                              $(inputs).each(function(i){
                                  let UserAnswer=$(this).find('.Answer_Block > span').text();
                                  if( UserAnswer !== Correct_Answers[i]){
                                      if(UserAnswer !== ""){
                                          $(this).css({'color':'#ed1a1a'});
                                      }
                                      $(this).find('.correct_answer').css('visibility','visible');
                                  }
                                  else{
                                      $(this).addClass('green');
                                      Correct_Answers_Count++;
                                  }
                              });
                              let percentage=	(Correct_Answers_Count * 100) / 6; 
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
                              $('.Option_Block,.puzzle_container').css('pointer-events','none');
                          }
                          else{
                              setTimeout(function(){
                                  $('.result').css('display','flex');
                                  $('.result .TextBox h1').text('Please solve at least 3 questions before submitting');
                              },500);
                          }
                          
                        
                      }
			      });
			
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
