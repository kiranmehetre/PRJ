import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-prefix-worksheet5',
  templateUrl: './std03-prefix-worksheet5.component.html',
  styleUrls: ['./std03-prefix-worksheet5.component.scss']
})
export class Std03PrefixWorksheet5Component implements OnInit {

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
        var inputField;
        var inputValue="";
        var PrefixClickAnswer=[];
        var PrefixHelpBox=[];
        var RootClickAnswer=[];
        var RootHelpBox=[];
        var Correct_Answers_Count=0;
        var inputs=$('.input_Block');
        $(inputs).attr('readonly','readonly');
        $(inputs).css('cursor','pointer');
        var Text='';
        var PrefixText="";
        var RootText="";
        var tmpPrefixText="";
        var tmpRootText="";
        var combineText="";
        var prefixinputValue,rootinputValue;
    
        $(inputs).click(function(){
            inputField=$(this);
            $(inputs).removeClass('bd');
            $(this).addClass('bd');
            // inputValue=$(inputField).text();
            prefixinputValue=$(inputField).find('.prefixText').text();
            rootinputValue=$(inputField).find('.rootText').text();
            PrefixClickAnswer = $.grep(PrefixClickAnswer, function(value) {
                                return value != prefixinputValue;
                            });
            PrefixClickAnswer = $.grep(PrefixClickAnswer, function(value) {
                                return value != rootinputValue;
                            });
            $(".option").filter(function() {
                return $(this).text().trim() === prefixinputValue;
            }).removeClass('click');
            $(".option").filter(function() {
                return $(this).text().trim() === rootinputValue;
            }).removeClass('click');
            $(inputField).attr('data-text','');
            $(inputField).find('.prefixText').text('');
            $(inputField).find('.rootText').text('');
        });
        $('.option').click(function(){
            // debugger;
            var option=$(this);
            if(inputField !== undefined){
                if($(option).parent().hasClass('prefix')){
                    inputValue=$(inputField).find('.prefixText').text();
                }
                if($(option).parent().hasClass('root')){
                    inputValue=$(inputField).find('.rootText').text();
                }
                Text=$(this).text().trim();
                PrefixHelpBox.push(Text);
                if(PrefixHelpBox.indexOf(inputValue) > -1 && PrefixClickAnswer.indexOf(Text) < 0){
                    $(".option").filter(function() {
                        return $(this).text().trim() === inputValue;
                    }).removeClass('click');
                }
                $(this).addClass('click');
                if(PrefixClickAnswer.indexOf(Text) > -1){
    
                }
                else{
                    PrefixClickAnswer = $.grep(PrefixClickAnswer, function(value) {
                                    return value != inputValue;
                                });
                    if($(option).parent().hasClass('prefix')){
                        $(inputField).find('.prefixText').text(Text);
                    }
                    if($(option).parent().hasClass('root')){
                        $(inputField).find('.rootText').text(Text);
                    }
                    PrefixClickAnswer.push(Text);
                }
            }
        });
        
        $('.button').click(function(){
            if($(this).hasClass('playAgain')){
                window.location.href=window.location.href;
            }
            else{
                var Correct_Answers_Count=0;
                var inputCount=0;
                $('.input_Block').each(function(){
                    var input_Block=$(this);
                    if($(input_Block).find('.prefixText').text() != '' && $(input_Block).find('.rootText').text() != ''){
                        inputCount++;
                    }
                });
                if(inputCount >= 4){
                    $(inputs).removeClass('bd');
                    // var PrefixInputs=$('input.indoor');
                    var inputArray=[inputs];
                    var Correct_Answers=[];
                    Correct_Answers[0]=["rethink","prewash","derail","misuse","impolite","uneven","disconnect","indefinite"];
                    
                    for(var j=0;j<=0;j++){
                        var Wrong_Answers=[];
                        var inputField_Array=[];
                        var inputValues=[];
                        $(inputArray[j]).each(function(){
                            var inputTextValue=$(this).find('.prefixText').text() + $(this).find('.rootText').text();
                            if(Correct_Answers[j].indexOf(inputTextValue) < 0){
                                inputField_Array.push($(this));
                            }
                            else
                            {
                                inputValues.push(inputTextValue);
                                Correct_Answers_Count++;
                            }
                        });
                        Correct_Answers[j].filter(function (el) {
                            if ($.inArray(el, inputValues) == -1) Wrong_Answers.push(el);
                        });
                        for(var i=0; i< Wrong_Answers.length;i++){
                            $(inputField_Array[i]).css({'color':'#ed1a1a','border-color':'#000'});
                            $(inputField_Array[i]).find('.correct_answer').find('span').text(Wrong_Answers[i]);
                            $(inputField_Array[i]).find('.correct_answer').css('display','inline-block');
                        }
                    }
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
                    setTimeout(function(){
                        $('.button').addClass('playAgain');
                        $('.button.playAgain').text('solve again');
                    },500);
                    $('input,.option,.input_Block').css('pointer-events','none');
                }
                else{
                    setTimeout(function(){
                        $('.result').css('display','flex');
                        $('.result .TextBox h1').text('Please form at least 4 blanks before submitting');
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
        var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
            'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
        $('.imgBox img').each(function(i){
            var t=new Date().getTime();
            $(this).attr("src", AllImages[i]+'?'+t);
        });
    }
  }

}
