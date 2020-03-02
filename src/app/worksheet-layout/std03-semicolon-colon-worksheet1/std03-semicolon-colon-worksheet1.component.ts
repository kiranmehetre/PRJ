import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-semicolon-colon-worksheet1',
  templateUrl: './std03-semicolon-colon-worksheet1.component.html',
  styleUrls: ['./std03-semicolon-colon-worksheet1.component.scss']
})
export class Std03SemicolonColonWorksheet1Component implements OnInit {

  constructor() { }

  ngOnInit() {

    window.onload = function () {
        $('.loadingDiv').hide();
        setImages();
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
        var inputs=$('input');
        $(inputs).attr('readonly','readonly');
        var inputField;
        var Text="";
        $('input').click(function(){
            $(inputs).parent().removeClass('bd');
            inputField=$(this);
            $(this).parent().addClass('bd');
            $(this).val('');
        });
        $('.option').click(function(){
            Text=$(this).find('span').text();
            $(inputField).val(Text);
        });
        $('.button').click(function(){
            if($(this).hasClass('playAgain')){
                window.location.href=window.location.href;
            }
            else{
                var Block1_inputCount=0;
                var Block2_inputCount=0;
                var input;
                var isCorrectAnswer=true;
                var isFill=true;
                var Correct_Answers_Count=0;
                var sentenceCount=0;
                $('.Block-1 .Question').each(function(){
                    input=$(this).find('input');
                    var inputCount=$(input).filter(function () {
                                        return !!$(this).val();
                                    }).length;
                    if(inputCount > 0){
                        sentenceCount++;
                    }
                });
    
                $('.Block-3 .Question').each(function(){
                    input=$(this).find('input');
                    isFill=true;
                    $(input).each(function() {
                        if(($(this).val().toString() === "")) {
                            isFill=false;
                        }
                        else{
                            if(isFill == true){
                                isFill=true;
                            }
                        }
                    });
                    if(isFill === true){
                        // Block2_inputCount++;
                        sentenceCount++;
                    }
                });
                console.log(sentenceCount);
                if(sentenceCount >= 5){
                    $('.Block-1 .Question').each(function(i){
                        if(i==1 || i==4){
                            var input=$(this).find('input');
                            var isTrue=false;
                            $(input).each(function(){
                                if($(this).val().toString() !== ";"){
                                    $(this).css({'color':'#ed1a1a','border-color':'#000'});
                                    $(this).next().css('display','inline-block');
                                }
                                else{
                                    isTrue=true
                                }
                            });
                            if(isTrue){
                                Correct_Answers_Count++;
                            }
                        }
                        else{
                            if($(this).find('input').val().toString() !== ';'){
                                $(this).find('input').css({'color':'#ed1a1a','border-color':'#000'});
                                $(this).find('input').next().css('display','inline-block');
                            }
                            else{
                                Correct_Answers_Count++;
                            }
                        }
                    });
                    $('.Block-3 input').each(function(){
                        if($(this).val().toString() !== ":"){
                            $(this).css('color','#ed1a1a');
                            $(this).next().css('display','inline-block');
                        }
                        else{
                            Correct_Answers_Count++;
                        }
                    });
                    // $('.correct_answer').css('display','inline-block');
                    $('.option,input').css('pointer-events','none');
                    setTimeout(function(){
                        $('.result').css('display','flex');
                        $('.result .TextBox').hide();
                        $('.fabulous').removeClass('hide');
                        $('.result .imgBox').show();
                        $('.result').delay(2000).fadeOut('slow');
                        $('.close').hide();
                    },500);
                    
                    $("*").removeClass('bd');
                    setTimeout(function(){
                        $('.button').addClass('playAgain');
                        $('.button.playAgain').text('solve again');
                    },500);
                }
                else{
                    setTimeout(function(){
                        $('.result').css('display','flex');
                        $('.result .TextBox h1').text('Please solve at least 5 sentences before submitting');
                    },500);
                }
            }   
        });
        $('.result,.close').click(function(){
            $('.result').fadeOut();
            $('.close').show();
        });
    });
    function setImages() {
        var t = new Date().getTime();
        $('.imgBox img').attr("src", 'assets/images/fabulous.gif' + '?' + t);
    }
  }

}
