import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-synonyms-worksheet3',
  templateUrl: './std03-synonyms-worksheet3.component.html',
  styleUrls: ['./std03-synonyms-worksheet3.component.scss']
})
export class Std03SynonymsWorksheet3Component implements OnInit {

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
    
    
    
    $('.option span').click(function () {
        $(this).toggleClass("underlined");
        var numItems = $(this).closest('.question').find('.underlined').length;
        if (numItems > 2) {
            alert('please deselect any one');
            $(this).removeClass('underlined');
        }
    });
    $('.myButton').click(function () {
        if ($('.myButton').hasClass('playAgain')) {
            globalThis.commonWorksheet.reloadComponent();
        }
        else {
            var inputCount = 0;
            $('.question').each(function () {
                var spanCount = 0;
                spanCount = $(this).find('.underlined').length;
                if (spanCount >= 2) {
                    inputCount++;
                }
            });
            if (inputCount >= 5) {
                $('span').css('pointer-events', 'none');
    
                // var Correct_answers_count= $('.underlined.colorgreen').length;
                var Correct_Answers_Count = 0;
                var Correct_Answers = [['come', 'arrive'], ['error', 'mistake'], ['cautious', 'careful'], ['hungry', 'starving'], ['pail', 'bucket'], ['strange', 'odd'], ['rich', 'wealthy'], ['intelligent', 'smart'], ['rubbish', 'garbage'], ['dull', 'boring'],]
                $('.question').each(function (i) {
                    var isTrue = true;
                    var underlined = $(this).find('.option span.underlined');
                    if ($(underlined).length < 2) {
                        isTrue = false;
                    }
                    $(underlined).each(function (j) {
                        if (Correct_Answers[i].indexOf($.trim($(this).text())) < 0) {
                            $(underlined[j]).css('color', 'red');
                            isTrue = false;
                        }
                    });
                    if (isTrue) {
                        Correct_Answers_Count++;
                    }
                    for (var x = 0; x < 2; x++) {
                        var Answer = $(this).find(".option span:contains(" + Correct_Answers[i][x] + ")");
                        if ($(Answer).hasClass('underlined')) {
                            $(Answer).addClass('colorgreen_bordered');
                        }
                        else {
                            $(Answer).addClass('colorgreen');
                        }
                    }
                });
                var percentage = (Correct_Answers_Count * 100) / 10;
                //console.log(Correct_Answers_Count);
                //console.log(percentage);
                var DisplayResult = "";
                if (percentage > 80) {
                    DisplayResult = '.outstanding';
                }
                else if (percentage > 60) {
                    DisplayResult = '.brilliant';
                }
                else if (percentage > 50) {
                    DisplayResult = '.good-work';
                }
                else if (percentage <= 50) {
                    DisplayResult = '.keep-practicing';
                }
    
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
    
            }
            else {
                setTimeout(function () {
                    $('.result').css('display', 'flex');
                    $('.result .TextBox h1').text('Please solve at least 5 sentences before submitting');
                }, 500);
            }
        }
    });
    $('.result,.close').click(function () {
        $('.result').fadeOut();
        $('.close').show();
    });
    
    function setImages() {
        var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
            'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
        $('.imgBox img').each(function (i) {
            var t = new Date().getTime();
            $(this).attr("src", AllImages[i] + '?' + t);
        });
    }
  }

}
