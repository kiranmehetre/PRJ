import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-singular-plural-nouns-worksheet8',
  templateUrl: './std03-singular-plural-nouns-worksheet8.component.html',
  styleUrls: ['./std03-singular-plural-nouns-worksheet8.component.scss']
})
export class Std03SingularPluralNounsWorksheet8Component implements OnInit {

   constructor(private renderer: Renderer2,private commonWorksheet: CommonWorksheetService) {
    this.renderer.setStyle(document.body, 'background-color','#12533f');
  }

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
    $(document).ready(function () {
      var inputField;
      var inputValue = "";
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var OriginalText = "";
      var appendChar = "";
      var inputs = $('input');
      var lastLetterY = ["fairy", "fly", "lady", "jelly", "factory"];
      var lastLetterF = ["wolf", "loaf", "elf", "scarf", "calf"];
      $(inputs).attr('readonly', 'readonly');

      $(inputs).click(function () {
        inputField = $(this);
        $(inputs).removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(inputField).attr('data-text');
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".option").filter(function () {
          return $(this).text() === inputValue;
        }).removeClass('click');
        $(this).val("");
        $(this).attr('data-text', '');
      });

      $('.option').click(function () {
        if (inputField !== undefined) {
          Text = $(this).text();
          inputValue = $(inputField).attr('data-text');
          OriginalText = Text;
          HelpBox.push(OriginalText);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(OriginalText) < 0) {
            $(".option").filter(function () {
              return $(this).text() === inputValue;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (ClickAnswer.indexOf(Text) > -1) {

          }
          else {
            appendChar = $(inputField).parent().parent().attr('data-text');
            if (appendChar == "ves") {
              if (lastLetterF.indexOf(Text) > -1) {
                Text = Text.substring(0, (Text.length - 1));
              }
            }
            else if (appendChar == "ies") {
              if (lastLetterY.indexOf(Text) > -1) {
                Text = Text.substring(0, (Text.length - 1));
              }
            }
            $(inputField).val(Text + appendChar);
            $(inputField).attr('data-text', OriginalText);

            ClickAnswer = $.grep(ClickAnswer, function (value) {
              return value != inputValue;
            });
            ClickAnswer.push(OriginalText);
          }
        }
      });

      $('.button').click(function () {

        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var Correct_Answers_Count = 0;
          var inputCount = $('input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          if (inputCount >= 10) {
            var Correct_Answers_First_Block = ["balloons", "lamps", "monkeys", "essays", "buckets"];
            var Correct_Answers_Second_Block = ["witches", "peaches", "buffaloes", "wrenches", "topazes"];
            var Correct_Answers_Third_Block = ["fairies", "flies", "ladies", "jellies", "factories"];
            var Correct_Answers_Fourth_Block = ["wolves", "loaves", "elves", "scarves", "calves"];

            var First_Block_Answers = [];
            var Second_Block_Answers = [];
            var Third_Block_Answers = [];
            var Fourth_Block_Answers = [];

            $('.Block.one input').each(function (i) {
              if (Correct_Answers_First_Block.indexOf($(this).val().toString()) < 0) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).addClass('left');
              }
              else {
                First_Block_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });
            $('.Block.two input').each(function (i) {
              if (Correct_Answers_Second_Block.indexOf($(this).val().toString()) < 0) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).addClass('left');
              }
              else {
                Second_Block_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });
            $('.Block.three input').each(function (i) {
              if (Correct_Answers_Third_Block.indexOf($(this).val().toString()) < 0) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).addClass('left');
              }
              else {
                Third_Block_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });
            $('.Block.four input').each(function (i) {
              if (Correct_Answers_Fourth_Block.indexOf($(this).val().toString()) < 0) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).addClass('left');
              }
              else {
                Fourth_Block_Answers.push($(this).val());
                Correct_Answers_Count++;
              }
            });
            var First_Block_Wrong_Answers = [];
            var Second_Block_Wrong_Answers = [];
            var Third_Block_Wrong_Answers = [];
            var Fourth_Block_Wrong_Answers = [];

            Correct_Answers_First_Block.filter(function (el) {
              if ($.inArray(el, First_Block_Answers) == -1) First_Block_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.Block.one input').each(function (i) {
              if (Correct_Answers_First_Block.indexOf($(this).val().toString()) == -1) {
                $(this).siblings('.correct_answer').text(First_Block_Wrong_Answers[ctr]);
                $(this).siblings('.correct_answer').css('display', 'inline-block');
                ctr++;
              }
            });

            Correct_Answers_Second_Block.filter(function (el) {
              if ($.inArray(el, Second_Block_Answers) == -1) Second_Block_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.Block.two input').each(function (i) {
              if (Correct_Answers_Second_Block.indexOf($(this).val().toString()) == -1) {
                $(this).siblings('.correct_answer').text(Second_Block_Wrong_Answers[ctr]);
                $(this).siblings('.correct_answer').css('display', 'inline-block');
                ctr++;
              }
            });

            Correct_Answers_Third_Block.filter(function (el) {
              if ($.inArray(el, Third_Block_Answers) == -1) Third_Block_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.Block.three input').each(function (i) {
              if (Correct_Answers_Third_Block.indexOf($(this).val().toString()) == -1) {
                $(this).siblings('.correct_answer').text(Third_Block_Wrong_Answers[ctr]);
                $(this).siblings('.correct_answer').css('display', 'inline-block');
                ctr++;
              }
            });

            Correct_Answers_Fourth_Block.filter(function (el) {
              if ($.inArray(el, Fourth_Block_Answers) == -1) Fourth_Block_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.Block.four input').each(function (i) {
              if (Correct_Answers_Fourth_Block.indexOf($(this).val().toString()) == -1) {
                $(this).siblings('.correct_answer').text(Fourth_Block_Wrong_Answers[ctr]);
                $(this).siblings('.correct_answer').css('display', 'inline-block');
                ctr++;
              }
            });
            //console.log(Correct_Answers_Count);
            $('input,.option').css('pointer-events', 'none');
            var percentage = (Correct_Answers_Count * 100) / 20;
            var ImgURL = "";
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
            $(inputs).removeClass('bd');
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
              $('.result .TextBox h1').text('Please solve at least 10 blanks before submitting');
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
