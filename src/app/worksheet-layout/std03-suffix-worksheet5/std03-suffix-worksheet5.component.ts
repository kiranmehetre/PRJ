import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-suffix-worksheet5',
  templateUrl: './std03-suffix-worksheet5.component.html',
  styleUrls: ['./std03-suffix-worksheet5.component.scss']
})
export class Std03SuffixWorksheet5Component implements OnInit {

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
    
    $(document).ready(function(){
        var inputField;
        var Text="";
        var Content="";
        var Correct_Answers_Count=0;
        var inputs=$('input');
        $(inputs).attr('readonly','readonly');
        $(inputs).css('cursor','pointer');
    
        $(inputs).click(function(){
            inputField=$(this);
            $(inputs).removeClass('bd');
            $(this).addClass('bd');
            $(this).val("");
        });
        $('.helpbox-ans').click(function(){
            if(inputField !== undefined){
                Content=$(inputField).closest('.question').find('.text-container span').text().trim();
                Text=$(this).text().trim();
                $(inputField).val(Content+Text);
            }
        });
        
        $('.button').click(function(){
            if($(this).hasClass('playAgain')){
                window.location.href=window.location.href;
            }
            else{
                var Correct_Answers_Count=0;
                var inputCount=$('input[type="text"]').filter(function () {
                    return !!$(this).val();
                                }).length;
                if(inputCount >= 8){
                    $(inputs).removeClass('bd');
                    var Correct_Answers=[["performer"],["wonderful"],["wealthy"],["freely"],["worthy","worthless"],["moveable","moveless"],["lightly","lighten","lighter"],["sickly","sicken","sicker","sickness"],["jobless"],["honestly","honesty"],["agreeable"],["peaceful","peaceable"],["teacher","teachable"],["greatly","greater"],["foolishly","foolishness"],["golden"]];
                    $(inputs).each(function(i){
                        if(Correct_Answers[i].indexOf($.trim($(this).val().toString())) < 0){
                            $(this).css({'color':'#ed1a1a','border-color':'#000'});
                            $(this).parent().siblings('.correct-answer').css('visibility','visible');
                        }
                        else{
                            Correct_Answers_Count++;
                        }
                    });
                    var percentage=	(Correct_Answers_Count * 100) / 16;
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
                    $('input,.helpbox-ans').css('pointer-events','none');
                }
                else{
                    setTimeout(function(){
                        $('.result').css('display','flex');
                        $('.result .TextBox h1').text('Please solve at least 8 blanks before submitting.');
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
