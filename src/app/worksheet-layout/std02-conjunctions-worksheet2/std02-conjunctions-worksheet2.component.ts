import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std02-conjunctions-worksheet2',
  templateUrl: './std02-conjunctions-worksheet2.component.html',
  styleUrls: ['./std02-conjunctions-worksheet2.component.scss']
})
export class Std02ConjunctionsWorksheet2Component implements OnInit {

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



    var selectext = false;


    $('.col-xs-11 > span').click(function () {
      // selectext=true;
      var click = $(this).parent().attr('id');
      $("#" + click + " span").removeClass("underlined");
      $(this).addClass("underlined");
    });


    $('.button').click(function () {
      if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
      else{
         if($('.underlined').length >= 4)
         {
          var i=0;
            var Correct_Answers=["or","but","and","If","before","so","because","after"];
            $('.Information_Block .col-xs-11').each(function(i){
              var Spans;
              var underlined=$(this).find('.underlined');
              if(underlined !== undefined){
                if(underlined.text() !==Correct_Answers[i] ){
                  $(underlined).css('color','red');
                }
              }
              // $(this).find("span:contains("+Correct_Answers[i]+")").addClass('colorgreen');
              $(this).find('span').filter(function() {
                 return $(this).text() === Correct_Answers[i];
                }).addClass('colorgreen');
            });
        
              var Correct_Answers_Count=$('.underlined.colorgreen').length;
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
              
              $('.col-xs-11').addClass('disabled');
              setTimeout(function(){
                $('.button').addClass('playAgain');
                $('.button.playAgain').text('solve again');
              },500);
         }
         else
         {
          setTimeout(function(){
            $('.result').css('display','flex');
            $('.result .TextBox h1').text('Please solve at least 4 questions before submitting');
          },500);
         }
       }
      });

    $('.result,.close').click(function () {
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
