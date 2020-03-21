import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-adverbs-worksheet1',
  templateUrl: './std03-adverbs-worksheet1.component.html',
  styleUrls: ['./std03-adverbs-worksheet1.component.scss']
})
export class Std03AdverbsWorksheet1Component implements OnInit {

  constructor() { }

  ngOnInit() {

     $('.loadingDiv').hide();
      setImages();
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
    
    
    
    var imgURL="";
    $(document).ready(function(){
        $('.picture').click(function(){
            $(this).toggleClass('click');
            var dataText=$(this).attr('data-text');
            if($(this).hasClass('click')){
                imgURL="assets/std03-adverbs-worksheet1/img/"+dataText+"-right.png";
            }
            else{
                imgURL="assets/std03-adverbs-worksheet1/img/"+dataText+".png";
            }
            $(this).find('img').attr('src',imgURL);
        });
        
        $('.button').click(function(){
            if($(this).hasClass('playAgain')){
                window.location.href=window.location.href;
            }
            else{
                if($('.click').length >= 6){
                    $('.picture').each(function(){
                        var dataText=$(this).attr('data-text');
                        if($(this).hasClass('wrong')){
                            imgURL="assets/std03-adverbs-worksheet1/img/"+dataText+"-wrong.png";
                        }
                        else{
                            imgURL="assets/std03-adverbs-worksheet1/img/"+dataText+"-right.png";
                        }
                        $(this).find('img').attr('src',imgURL);
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
                    $('input,.picture').css('pointer-events','none');
                }
                else{
                    setTimeout(function(){
                        $('.result').css('display','flex');
                        $('.result .TextBox h1').text('Please colour at least 6 crayons before submitting');
                    },500);
                }
            }
            $('.result,.close').click(function(){
                $('.result').fadeOut();
                $('.close').show();
            });
        });
        
    });
    function setImages() {
        var t = new Date().getTime();
        $('.imgBox img').attr("src", 'assets/images/fabulous.gif' + '?' + t);
    }
  }

}
