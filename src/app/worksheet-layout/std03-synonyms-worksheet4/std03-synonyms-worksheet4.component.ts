import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-synonyms-worksheet4',
  templateUrl: './std03-synonyms-worksheet4.component.html',
  styleUrls: ['./std03-synonyms-worksheet4.component.scss']
})
export class Std03SynonymsWorksheet4Component implements OnInit {

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
    
    
    var inputField;
    var clickAnswer=[];
    var HelpBox=[];
    var inputValue;
    var smallinputField;
    var smallclickAnswer=[];
    var smallinputValue;
    var Text="";
    var smallText="";
    var firstinputs=$('.input-answer-container div:first-child input');
    var secondInputs=$('.input-answer-container div:last-child input');
    var inputs=$('input');
    $('input').attr('readonly','readonly');
    $(firstinputs).click(function(){
        inputField=$(this);
        smallinputField=$(this).closest('.input-answer-container').find('div:last-child input');
        inputValue=$(this).val();
        smallinputValue=$(smallinputField).val();
        $(firstinputs).removeClass('bd');
        $(this).addClass('bd');
        clickAnswer = $.grep(clickAnswer, function(value) {
                            return value != inputValue;
                        });
        
        $(".col-b .question").filter(function() {
            return $(this).find('.number span').text().replace(')','') === inputValue;
        }).removeClass('click');
        $(".col-c .question").filter(function() {
            return $(this).find('.number span').text().replace(')','') === smallinputValue;
        }).removeClass('click');
        $(this).val("");
        $(smallinputField).val("");
    });
    
    $('.col-b .question').click(function(){
        if(inputField !== undefined){
            Text=$(this).find('.number span').text().replace(')','');
            smallText=$(this).find('.number span').text().replace(')','').toLowerCase();
            inputValue=$(inputField).val();
            smallinputValue=$(smallinputField).val();
            HelpBox.push(Text);
            if(HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0){
                $(".col-b .question").filter(function() {
                    return $(this).find('.number span').text().replace(')','') === inputValue;
                }).removeClass('click');
                $(".col-c .question").filter(function() {
                    return $(this).find('.number span').text().replace(')','') === smallinputValue;
                }).removeClass('click');
            }
            $(this).addClass('click');
            $(".col-c .question").filter(function() {
                return $(this).find('.number span').text().replace(')','') === smallText;
            }).addClass('click');
            if(clickAnswer.indexOf(Text)>-1){
            }
            else{
                clickAnswer = $.grep(clickAnswer, function(value) {
                                return value != inputValue;
                            });
                $(inputField).val(Text);
                $(smallinputField).val(smallText);
                clickAnswer.push(Text);
            }
        }
    });
    
    
    $('.button').click(function(){
    
        
        if($('.button').hasClass('playAgain'))
            {
                window.location.href = window.location.href;
            }
            else
            {
                var Correct_Answers_Count=0;
                var inputCount=$('input[type="text"]').filter(function () {
                                    return !!$(this).val();
                                }).length;
                if(inputCount >= 10){
                    var Correct_Answers=["I","i","F","f","A","a","J","j","C","c","H","h","E","e","B","b","G","g","D","d"];
                    var Inputs=$('input');
                    $(Inputs).each(function(i){
                        if($.trim($(this).val().toString()) !== Correct_Answers[i]){
                            $(this).css({'color':'#ed1a1a'});
                            var Class=$(this).attr('class');
                            $('.answer-container.'+Class).show();
                            $('.main-input-container').css('margin-bottom','70px');
                            $('.heading-container').addClass('margin-top-class');
                        }
                        else{
                            Correct_Answers_Count++;
                        }
                    });
                    $('input,.col-c .question,.col-b .question').css('pointer-events','none');
                    $(inputs).removeClass('bd');
                    var percentage=	(Correct_Answers_Count * 100) / 20;
                    var ImgURL="";
                    var DisplayResult="";    
                    if(percentage > 80){
                        DisplayResult='.outstanding';
                    }
                    else if(percentage > 60){
                        DisplayResult='.brilliant';
                    }
                    else if(percentage > 50){
                        DisplayResult='.good-work';
                    }
                    else if(percentage <= 50){
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
    
                    setTimeout(function(){
                        $('.button').addClass('playAgain');
                        $('.button.playAgain').text('solve again');
                    },500);
                }
                else{
                    setTimeout(function(){
                        $('.result').css('display','flex');
                        $('.result .TextBox h1').text('Please solve at least 5 boxes before submitting');
                    },500);
                }
            }
    });
    $('.result,.close').click(function(){
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
