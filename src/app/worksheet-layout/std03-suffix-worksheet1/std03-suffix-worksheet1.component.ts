import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-suffix-worksheet1',
  templateUrl: './std03-suffix-worksheet1.component.html',
  styleUrls: ['./std03-suffix-worksheet1.component.scss']
})
export class Std03SuffixWorksheet1Component implements OnInit {

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
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    }
    // toggleClass
    function toggleClass(elem, className) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
        if (hasClass(elem, className)) {
            while (newClass.indexOf(" " + className + " ") >= 0) {
                newClass = newClass.replace(" " + className + " ", " ");
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + className;
        }
    }
    theToggle.onclick = function () {
        toggleClass(this, 'on');
        $('.menu-block #menu').show();
        $('#toggle span img').toggleClass('up');
        return false;
    }
    $(document).ready(function(){
        var imgURL="";
        var Question;
        var img;
        $('.Question span,.Question img').click(function(){
            Question=$(this).closest('.Question');
            img=$(Question).find('img');
            $(Question).toggleClass('click');
            if($(Question).hasClass('click')){
                imgURL="assets/std03-suffix-worksheet1/img/"+$(Question).attr('data-text')+"_Click.png";
            }
            else{
                imgURL="assets/std03-suffix-worksheet1/img/"+$(Question).attr('data-text')+".png";
            }
            $(img).attr('src',imgURL);
        });
        
        $('.button').click(function(){
            if($(this).hasClass('playAgain')){
                globalThis.commonWorksheet.reloadComponent();
            }
            else{
                if($('.click').length >= 8){
                    $('.Question ').each(function(){
                        Question=$(this);
                        img=$(Question).find('img');
                        if($(Question).hasClass('wrong')){
                            imgURL="assets/std03-suffix-worksheet1/img/"+$(Question).attr('data-text')+"_Wrong.png";
                        }
                        else{
                            imgURL="assets/std03-suffix-worksheet1/img/"+$(Question).attr('data-text')+"_Click.png";
                        }
                        $(img).attr('src',imgURL);
                    });
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
                    $('.Question,.Question span,.Question img').css('pointer-events','none');
                }
                else{
                    setTimeout(function(){
                        $('.result').css('display','flex');
                        $('.result .TextBox h1').text('Please colour at least 8 bubbles before submitting');
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
        var t=new Date().getTime();
        $('.imgBox img').attr("src", 'assets/images/fabulous.gif' + '?' + t);
    }
  }

}
