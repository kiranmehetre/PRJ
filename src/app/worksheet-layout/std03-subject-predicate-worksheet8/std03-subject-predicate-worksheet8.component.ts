import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-subject-predicate-worksheet8',
  templateUrl: './std03-subject-predicate-worksheet8.component.html',
  styleUrls: ['./std03-subject-predicate-worksheet8.component.scss']
})
export class Std03SubjectPredicateWorksheet8Component implements OnInit {

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
        var inputField;
        var inputValue="";
        var PrefixClickAnswer=[];
        var PrefixHelpBox=[];
        var RootClickAnswer=[];
        var RootHelpBox=[];
        var Correct_Answers_Count=0;
        var inputs=$('.Answer');
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
                if($(option).parent().hasClass('subject')){
                    inputValue=$(inputField).find('.prefixText').text();
                }
                if($(option).parent().hasClass('predicate')){
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
                    if($(option).parent().hasClass('subject')){
                        $(inputField).find('.prefixText').text(Text);
                    }
                    if($(option).parent().hasClass('predicate')){
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
                $(inputs).each(function(i){
                    if($(this).find('.input_div').text() !== " "){
                        inputCount++;
                    }
                });
                if(inputCount >= 3){
                    $(inputs).removeClass('bd');
                    var input_divs=$('.input_div');
                    var inputArray=[input_divs];
                    var Correct_Answers=[];
                    var subject_Correct_Key_value_Array={"Mom and dad" : "Mom and dad decided to paint the house themselves.",
                    "Moscow" : "Moscow is the capital city of Russia.","Mrs. George" : "Mrs. George planted pink roses in her garden.","Sam and Joe" : "Sam and Joe cycled to school yesterday.","An ugly dragon" : "An ugly dragon hissed at the creature."}
                    Correct_Answers[0]=["Mom and dad decided to paint the house themselves.","Moscow is the capital city of Russia.","Mrs. George planted pink roses in her garden.","Sam and Joe cycled to school yesterday.","An ugly dragon hissed at the creature."];
                    
                    for(var j=0;j<=0;j++){
                        var Wrong_Answers=[];
                        var Remaining_Wrong_Answers=[];
                        var subject_Array=[];
                        var subject_Correct_Array=[];
                        var inputField_Array=[];
                        var inputField_Empty_Array=[];
                        var inputValues=[];
                        $(inputArray[j]).each(function(){
                            if(Correct_Answers[j].indexOf($(this).text()) < 0){
                                if($(this).find('.prefixText').text() !== ""){
                                    subject_Array.push($(this).find('.prefixText').text());
                                    inputField_Array.push($(this));
                                }
                                else{
                                    inputField_Empty_Array.push($(this));
                                }
                            }
                            else
                            {
                                inputValues.push($(this).text());
                                Correct_Answers_Count++;
                            }
                        });
                        Correct_Answers[j].filter(function (el) {
                            if ($.inArray(el, inputValues) == -1) Wrong_Answers.push(el);
                        });
                        for(var i=0; i< inputField_Array.length;i++){
                            var prefixText=$(inputField_Array[i]).find('.prefixText').text();
                            $(inputField_Array[i]).css({'color':'#ed1a1a','border-color':'#000'});
                                $(inputField_Array[i]).siblings('.correct_answer').find('span').text(subject_Correct_Key_value_Array[prefixText]);
                                subject_Correct_Array.push(subject_Correct_Key_value_Array[prefixText]);
                                $(inputField_Array[i]).siblings('.correct_answer').css('display','inline-block');
                        }
                        Wrong_Answers.filter(function (el) {
                            if ($.inArray(el, subject_Correct_Array) == -1) Remaining_Wrong_Answers.push(el);
                        });
                        for(var i=0; i< inputField_Empty_Array.length;i++){
                            $(inputField_Empty_Array[i]).css({'color':'#ed1a1a','border-color':'#000'});
                            $(inputField_Empty_Array[i]).siblings('.correct_answer').find('span').text(Remaining_Wrong_Answers[i]);
                            $(inputField_Empty_Array[i]).siblings('.correct_answer').css('display','inline-block');
                        }
                    }
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
                    $('.Answer,.option').css('pointer-events','none');
                }
                else{
                    setTimeout(function(){
                        $('.result').css('display','flex');
                        $('.result .TextBox h1').text('Please solve at least 3 blanks before submitting');
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
