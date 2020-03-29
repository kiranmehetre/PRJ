import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-homophones-worksheet9',
  templateUrl: './std02-homophones-worksheet9.component.html',
  styleUrls: ['./std02-homophones-worksheet9.component.scss']
})
export class Std02HomophonesWorksheet9Component implements OnInit {

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
    $(".puzzle-container div").each(function(i){
      $(this).attr('data-text',$(this).find('span').text());
});

$(".puzzle-container > div").each(function(i){

var CheckAttribute=	$(this).attr('word-click');
if(CheckAttribute==undefined)	
{
$(this).css('pointer-events', 'none');
}

});		




$('.puzzle-container > div').click(function () {
$(this).toggleClass('click');
if($(this).hasClass('click'))
{

var clickHelpbox=$(this).attr('word-click');
var checkHelpBoxText=$(this).attr('data-text');
//checkHelpBoxText=checkHelpBoxText.substring(checkHelpBoxText.length-1,checkHelpBoxText.length);
if(clickHelpbox.indexOf(',')>0)
{
var SplitHelpbox=clickHelpbox.split(',');
var i;
for (i = 0; i < SplitHelpbox.length; ++i) {
$('.'+SplitHelpbox[i]+'_span.'+checkHelpBoxText.toLowerCase().trim()).addClass('word-select');
}
}
else{

var CheckIsThere=$(this).attr('class');
if(clickHelpbox.indexOf('through')>-1 && (CheckIsThere.indexOf('th1') > -1 || CheckIsThere.indexOf('th2') > -1))
{
if(CheckIsThere.indexOf('th1')>-1)
{
$('.helpbox .th1').addClass('word-select');
}
else{
$('.helpbox  .th2').addClass('word-select');
}
}
else if(clickHelpbox.indexOf('wood')>-1 && (CheckIsThere.indexOf('o1') > -1 || CheckIsThere.indexOf('o2') > -1))
{
if(CheckIsThere.indexOf('o1')>-1)
{
$('.helpbox .o1').addClass('word-select');
}
else{
$('.helpbox .o2').addClass('word-select');
}
}
else if(clickHelpbox.indexOf('steel')>-1 && (CheckIsThere.indexOf('e1') > -1 || CheckIsThere.indexOf('e2') > -1))
{
if(CheckIsThere.indexOf('e1')>-1)
{
$('.helpbox .e1').addClass('word-select');
}
else{
$('.helpbox .e2').addClass('word-select');
}
}
else{
$('.'+clickHelpbox+'_span.'+checkHelpBoxText.toLowerCase().trim()).addClass('word-select');
}
}
}
else{
var clickHelpbox=$(this).attr('word-click');
var checkHelpBoxText=$(this).attr('data-text');

if(clickHelpbox.indexOf(',')>0)
{
var SplitHelpbox=clickHelpbox.split(',');
var i;
for (i = 0; i < SplitHelpbox.length; ++i) {
$('.'+SplitHelpbox[i]+'_span.'+checkHelpBoxText.toLowerCase().trim()).removeClass('word-select');
}
}
else{

var CheckIsThere=$(this).attr('class');
if(clickHelpbox.indexOf('through')>-1 && (CheckIsThere.indexOf('th1') > -1 || CheckIsThere.indexOf('th2') > -1))
{
if(CheckIsThere.indexOf('th1')>-1)
{
$('.helpbox .th1').removeClass('word-select');
}
else{
$('.helpbox  .th2').removeClass('word-select');
}
}
else if(clickHelpbox.indexOf('wood')>-1 && (CheckIsThere.indexOf('o1') > -1 || CheckIsThere.indexOf('o2') > -1))
{
if(CheckIsThere.indexOf('o1')>-1)
{
$('.helpbox .o1').removeClass('word-select');
}
else{
$('.helpbox .o2').removeClass('word-select');
}
}
else if(clickHelpbox.indexOf('steel')>-1 && (CheckIsThere.indexOf('e1') > -1 || CheckIsThere.indexOf('e2') > -1))
{
if(CheckIsThere.indexOf('e1')>-1)
{
$('.helpbox .e1').removeClass('word-select');
}
else{
$('.helpbox .e2').removeClass('word-select');
}
}
else{
var chexkkk='.'+clickHelpbox+'.'+checkHelpBoxText;
$('.'+clickHelpbox+'_span.'+checkHelpBoxText).removeClass('word-select');
}
}
}
});
$('.button').click(function () {
if ($('.button').hasClass('playAgain')) {
// alert('click');
globalThis.commonWorksheet.reloadComponent();
}
else {
var inputCount = 0;
for (var j = 0; j <= 9; j++) {
var classNames = ['.threw_span.click','.through_span.click','.board_span.click', '.bored_span.click', '.steal_span.click', '.steel_span.click', '.flour_span.click', '.flower_span.click','.wood_span.click','.would_span.click'];
debugger;
var checkL=$(classNames[j]).length;
if ($(classNames[j]).length > 0) {

inputCount++;
}
}

if (inputCount >= 5) {
$('.letter').css('pointer-events', 'none');
var DisplayResult = "";
DisplayResult = '.fabulous';

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

$('.line').show();
}
else {
setTimeout(function () {
$('.result').css('display', 'flex');
$('.result .TextBox h1').text('Please mark at least 5 words before submitting');
}, 500);
}
}

});
$('.result,.close').click(function () {
$('.result').fadeOut();
$('.close').show();
});
function setImages() {
var AllImages = ['assets/images/fabulous.gif'];
$('.imgBox img').each(function (i) {
var t = new Date().getTime();
$(this).attr("src", AllImages[i] + '?' + t);
});
}
  }


}
