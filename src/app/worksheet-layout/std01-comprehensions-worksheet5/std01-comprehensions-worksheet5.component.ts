import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std01-comprehensions-worksheet5',
  templateUrl: './std01-comprehensions-worksheet5.component.html',
  styleUrls: ['./std01-comprehensions-worksheet5.component.scss']
})
export class Std01ComprehensionsWorksheet5Component implements OnInit {

  loadAPI: Promise<any>;
  constructor(private commonWorksheet: CommonWorksheetService){

    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
  });

  }
  public loadScript() {   
        var dynamicScripts = ["https://code.jquery.com/jquery-3.3.1.min.js","https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"];
        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }
}

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
  var BackgroundImagesLandscapeArr=["url(/assets/std01-comprehensions-worksheet5/img/slide1_bg.jpg)","url(/assets/std01-comprehensions-worksheet5/img/slide2_bg.jpg)"];
  var BackgroundImagesPortraitArr=["url(/assets/std01-comprehensions-worksheet5/img/slide1_bg_portrait.jpg)","url(/assets/std01-comprehensions-worksheet5/img/slide2_bg_portrait.jpg)"];
  var BackgroundImagesArr=[];
  var orientation = window.screen.orientation;
  if(orientation.type=="landscape-primary"){
      BackgroundImagesArr=BackgroundImagesLandscapeArr;
  }
  else{
      BackgroundImagesArr=BackgroundImagesPortraitArr;
  }
  var ActiveSlideNumber;
  ActiveSlideNumber=$('li.active').attr('data-slide-to');
  ActiveSlideNumber=parseInt(ActiveSlideNumber);
  $('.carousel-control-next-icon').click(function(){
      ActiveSlideNumber++;
      if(ActiveSlideNumber > 1){
          ActiveSlideNumber=0;
      }
      $('.bg').css({
          'background' : BackgroundImagesArr[ActiveSlideNumber] +' no-repeat right bottom fixed',
          'background-size' : 'cover',
          '-webkit-background-size' : 'cover',
          '-moz-background-size' : 'cover',
      });
  });
  $('.carousel-control-prev-icon').click(function(){
      ActiveSlideNumber--;
      if(ActiveSlideNumber < 0){
          ActiveSlideNumber=1;
      }
      $('.bg').css({
          'background' : BackgroundImagesArr[ActiveSlideNumber] +' no-repeat right bottom fixed',
          'background-size' : 'cover',
          '-webkit-background-size' : 'cover',
          '-moz-background-size' : 'cover',
      });
  });
  $('.carousel-indicators li').click(function(){
      var ActiveList;
      ActiveList=$(this).text().trim();
      ActiveSlideNumber=parseInt(ActiveList)- 1;
      $('.bg').css({
          'background' : BackgroundImagesArr[ActiveSlideNumber] +' no-repeat right bottom fixed',
          'background-size' : 'cover',
          '-webkit-background-size' : 'cover',
          '-moz-background-size' : 'cover',
      });
  });
  
  

  $('.question').each(function(){
var options=$(this).find('.option');
$(options).each(function(){
$(this).click(function(){
  if($(this).hasClass('click'))
  {
    $(this).removeClass('click');
  }
  else{
    $(options).removeClass('click');
      $(this).addClass('click');
  }
  
})
});
});

     $('.question').each(function(){
var options=$(this).find('.helpbox-text');
$(options).each(function(){
$(this).click(function(){
  if($(this).hasClass('click'))
  {
    $(this).removeClass('click');
  }
  else{
    $(options).removeClass('click');
      $(this).addClass('click');
  }
  
})
});
});
  

  $('.button').click(function(){

      if($('.button').hasClass('playAgain'))
{
globalThis.commonWorksheet.reloadComponent();
}
else
{
          var inputCount=0;
      $('.question').each(function(i){
          if($(this).find('.click').length > 0){
              inputCount++;
          }
      });
      //console.log(inputCount)
      if(inputCount >= 3){
          $('.option.click').find('.circle').not('right').addClass('wrong');
          $('.circle.right').addClass('correct');
          $('.helpbox-text.click').not('.right').addClass('wrong_color');
          $('.helpbox-text.right.click').addClass('correct-box');
          $('.helpbox-text.right').not('.click').addClass('correct_white');
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
          $('input,.option,.option-question,.helpbox').css('pointer-events','none');
          setTimeout(function(){
          $('.button').addClass('playAgain');
          $('.button.playAgain').text('solve again');
      },500);
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
      function setImages(){
var AllImages=['assets/images/fabulous.gif'];
$('.imgBox img').each(function(i){
      var t=new Date().getTime();
      $(this).attr("src", AllImages[i]+'?'+t);
});
}
  }

}
