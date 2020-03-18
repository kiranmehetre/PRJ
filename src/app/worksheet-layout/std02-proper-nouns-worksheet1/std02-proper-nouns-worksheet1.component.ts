import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-proper-nouns-worksheet1',
  templateUrl: './std02-proper-nouns-worksheet1.component.html',
  styleUrls: ['./std02-proper-nouns-worksheet1.component.scss']
})
export class Std02ProperNounsWorksheet1Component implements OnInit {

  constructor() { }

  ngOnInit() {
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
var imgUrl="";
$('.Main_Container img').click(function(){
    if($(this).hasClass('click')){
        imgUrl="assets/std02-proper-nouns-worksheet1/img/"+$(this).attr('data-text')+".png";
        $(this).attr('src',imgUrl);
        $(this).removeClass('click');
    }
    else{
        imgUrl="assets/std02-proper-nouns-worksheet1/img/"+$(this).attr('data-text')+"_click.png";
        $(this).attr('src',imgUrl);
        $(this).addClass('click');
    }
});
$('.button').click(function(){
    if($(this).hasClass('playAgain')){
        window.location.href=window.location.href;
    }
    else{
        if($('.click').length >= 6){
            var Click;
            var Correct_Answers_Count=0;
            $('.Main_Container img').each(function(){
                if($(this).is('.wrong')){
                    var img="assets/std02-proper-nouns-worksheet1/img/"+$(this).attr('data-text')+'_wrong.png';
                    $(this).attr('src',img);
                }
                if($(this).is('.right')){
                    var img="assets/std02-proper-nouns-worksheet1/img/"+$(this).attr('data-text')+'_click.png';
                    $(this).attr('src',img);
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
            $('.Main_Container img').css('pointer-events','none');
            setTimeout(function(){
                $('.button').addClass('playAgain');
                $('.button.playAgain').text('solve again');
            },500);
        }
        else{
            setTimeout(function(){
                $('.result').css('display','flex');
                $('.result .TextBox h1').text('Please colour at least 6 pumpkins before submitting');
            },500);
        }
    
        $('.result,.close').click(function(){
            $('.result').fadeOut();
            $('.close').show();
        });
    }

});
function setImages(){
var t=new Date().getTime();
$('.imgBox img').attr('src','assets/images/fabulous.gif'+'?'+t);
}

  }

}
