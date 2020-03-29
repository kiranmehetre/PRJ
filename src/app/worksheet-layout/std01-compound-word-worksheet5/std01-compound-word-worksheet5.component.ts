import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-compound-word-worksheet5',
  templateUrl: './std01-compound-word-worksheet5.component.html',
  styleUrls: ['./std01-compound-word-worksheet5.component.scss']
})
export class Std01CompoundWordWorksheet5Component implements OnInit {

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


    $(document).ready(function () {
      var inputField;
      var inputFieldSibling;
      var inputValue;
      var inputParent;
      var Content = [];
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var ContentText = "";
      var Answer = "";
      var Correct_Answers_Count = 0;
      var inputs = $('input');
      $(inputs).attr('readonly', 'readonly');
      $(inputs).css('cursor', 'pointer');

      $('.col-3 input').click(function () {
        inputField = $(this);
        inputFieldSibling = $(this).parent().siblings('.Answer_Input').find('input');
        $(inputs).removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(this).val();

        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $("td").filter(function () {
          return $(this).text() === inputValue;
        }).removeClass('white');
        $(inputField).val("");
        $(inputFieldSibling).val("");
      });
      $('td').click(function () {
        if (inputField !== undefined) {
          inputValue = $(inputField).val();
          inputParent = $(inputField).parent();
          Text = $(this).text();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $("td").filter(function () {
              return $(this).text() === inputValue;
            }).removeClass('white');
          }
          $(this).addClass('white');

          Content = $(inputParent).siblings('.content').text().split(")");
          ContentText = Content[1].substring(1, Content[1].length).trim();
          Answer = ContentText + Text;
          if (ClickAnswer.indexOf(Text) > -1) {
          }
          else {
            ClickAnswer = $.grep(ClickAnswer, function (value) {
              return value != inputValue;
            });
            $(inputField).val(Text);
            $(inputFieldSibling).val(Answer);
            ClickAnswer.push(Text);
          }
        }
      });

      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var inputCount = $('.col-3 input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          if (inputCount >= 5) {
            $(inputs).removeClass('bd');
            var Correct_Answers = ["worm", "box", "time", "food", "shoe", "snake", "walk", "port", "times", "out"];
            $('.col-3 input').each(function (i) {
              if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
                $(this).closest('.Question').find('input').css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).closest('.Question').find('.correct_answer').css({ 'color': '#ed1a1a', 'border-color': '#000', 'display': 'inline-block' });
                // inputField=$(this);
                // inputFieldSibling=$(this).parent().siblings('.Answer_Input').find('input');
                // $(inputField,inputFieldSibling).css({'color':'#ed1a1a','border-color':'#000'});
                // $(inputField,inputFieldSibling).siblings('.correct_answer').css('display','inline-block');
              }
              else {
                Correct_Answers_Count++;
              }
            });
            var percentage = (Correct_Answers_Count * 100) / 10;
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
            $('input,td').css('pointer-events', 'none');
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 5 blanks before submitting');
            }, 500);
          }
        }
      });

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
