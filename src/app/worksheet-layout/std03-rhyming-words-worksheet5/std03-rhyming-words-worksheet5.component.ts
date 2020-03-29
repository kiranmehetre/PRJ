import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-rhyming-words-worksheet5',
  templateUrl: './std03-rhyming-words-worksheet5.component.html',
  styleUrls: ['./std03-rhyming-words-worksheet5.component.scss']
})
export class Std03RhymingWordsWorksheet5Component implements OnInit {

   constructor(private renderer: Renderer2,private commonWorksheet: CommonWorksheetService) {
    this.renderer.setStyle(document.body, 'background-color','#bae4f0');
  }

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
    $(document).ready(function () {
      var inputField;
      var inputValue;
      // var ClickAnswer="";
      var clickAnswer = [];
      var Text = "";
      var HelpBox = [];
      var inputs = $('input');
      $(inputs).attr('readonly', 'readonly');
      $(inputs).click(function () {
        inputField = $(this);
        inputValue = $(this).val();
        $(inputs).removeClass('bd');
        $(this).addClass('bd');
        clickAnswer = $.grep(clickAnswer, function (value) {
          return value != inputValue;
        });
        $(".img_container span").filter(function () {
          return $(this).text() === inputValue;
        }).removeClass('click');
        $(this).val("");


      });
      $('.img_container span').click(function () {
        if (inputField !== undefined) {
          Text = $(this).text();
          inputValue = $(inputField).val();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
            $(".img_container span").filter(function () {
              return $(this).text() === inputValue;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (clickAnswer.indexOf(Text) > -1) {
          }
          else {
            clickAnswer = $.grep(clickAnswer, function (value) {
              return value != inputValue;
            });
            $(inputField).val(Text);
            clickAnswer.push(Text);
          }
        }
      });
      $('.option').click(function () {
        // $(this).toggleClass('green');
        $(this).toggleClass('green_color');
      });
      $('.myButton').click(function () {

        if ($('.myButton').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var Correct_answers_count = 0;
          var inputCount = $('input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          if (inputCount >= 4) {
            var Correct_Answers = ["hike", "street", "throat", "fried", "chance", "yawn", "floor", "crate"];
            $(inputs).each(function (i) {
              if ($(this).val() !== Correct_Answers[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).next().css('display', 'block');
              }
              else {
                Correct_answers_count++;
              }
            });
            // $('.option').not('.disabled').css('background-color','#20bb15');
            $('.line').show();
            var percentage = (Correct_answers_count * 100) / 8;
            //console.log(Correct_answers_count);
            //console.log(percentage);
            var DisplayResult = "";
            if (percentage > 80) {
              DisplayResult = '.outstanding';
            }
            else if (percentage > 60) {
              DisplayResult = '.brilliant';
            }
            else if (percentage >= 50) {
              DisplayResult = '.good-work';
            }
            else if (percentage < 50) {
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
              $('.myButton').addClass('playAgain');
              $('.myButton.playAgain').text('solve again');
            }, 500);

            $('.option,input,.img_container span').css('pointer-events', 'none');
            $(inputs).removeClass('bd');
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 4 blanks before submitting');
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
