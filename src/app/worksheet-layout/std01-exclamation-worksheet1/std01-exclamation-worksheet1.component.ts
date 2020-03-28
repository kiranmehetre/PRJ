import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std01-exclamation-worksheet1',
  templateUrl: './std01-exclamation-worksheet1.component.html',
  styleUrls: ['./std01-exclamation-worksheet1.component.scss']
})
export class Std01ExclamationWorksheet1Component implements OnInit {

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

$(".input-span").each(function( i ) {
  $(this).attr('id', 'question' + i);
  var id=$(this).attr('id', 'question' + i);
  });
  $(".text-container").each(function( i ) {
  $(this).attr('id', 'text-container' + i);
  });
  $('input').attr('readonly','readonly');
  var inputField;
  $('input').on('click',function() {
  
    $('input').parent().removeClass('bd');
    $(this).parent().addClass('bd');
    inputField = $(this); 
    $(this).val('');
  
  });
  var Text = '';
  $('.helpbox-container .col-sm-6 div').on('click',function(event)
  {
    if (inputField !== undefined) {
    var Text = $(this).text().trim();
    $(inputField).val(Text);
  }
  });
  
   $('.button').click(function(){
          if($('.button').hasClass('playAgain'))
          {
            globalThis.commonWorksheet.reloadComponent();
          }
          else
          {
            var inputCount=$('input[type="text"]').filter(function () {
                                      return !!$(this).val();
                                  }).length;
            var Correct_Answers=["!","!","!","!","!","!","!","!","!","!","!"];
            var i=0;
            if(inputCount >= 5)
            {
             var Count_correct_answer=0;
              $('input').each(function(){
                  if($(this).val().toString().trim() !== Correct_Answers[i]){
                    $(this).css({'color':'red','border-color':'#000'});
                    var check=$(this).parent().next().attr('class');
                    $(this).parent().parent().find("."+check).css('display','inline-block');
                   
                    }
                    else{
                    Count_correct_answer++;
                    }
                i++;
              });
              $('input').parent().removeClass('bd');
              var percentage=(Count_correct_answer * 100) /11;
              var ImgURL='';
            
              $('input,.helpbox-container,.input-span').css('pointer-events','none');
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
      var AllImages=['assets/images/fabulous.gif'];
        $('.imgBox img').each(function(i){
                  var t=new Date().getTime();
                  $(this).attr("src", AllImages[i]+'?'+t);
        });
  }
  
  }

}
