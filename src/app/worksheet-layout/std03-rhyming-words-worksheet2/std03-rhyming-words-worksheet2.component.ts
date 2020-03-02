import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-rhyming-words-worksheet2',
  templateUrl: './std03-rhyming-words-worksheet2.component.html',
  styleUrls: ['./std03-rhyming-words-worksheet2.component.scss']
})
export class Std03RhymingWordsWorksheet2Component implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color','#acd9e6');
  }

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
    $(document).ready(function () {
      var inputField;
      var inputValue;
      var ClickAnswer = "";
      var Text = "";
      var clickAnswer = [];
      var HelpBox = [];
      $('input').attr('readonly', 'readonly');
      $('input').click(function () {
        $('input').parent().removeClass('bd');
        inputField = $(this);
        inputValue = $(this).val();
        $(this).parent().addClass('bd');
        clickAnswer = $.grep(clickAnswer, function (value) {
          return value != inputValue;
        });
        $(".Option").filter(function () {
          var contentText = $(this).find('.Alpha').text();
          var contentinputValue = inputValue;
          return $(this).find('.Alpha').text().replace(")", "") === inputValue;
        }).removeClass('click');
        $(this).val("");
      });
      $('.Option').click(function () {
        if (inputField !== undefined) {
          Text = $(this).find('.Alpha').text().replace(")", "");
          inputValue = $(inputField).val();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
            $(".Option").filter(function () {
              return $(this).find('.Alpha').text().replace(")", "") === inputValue;
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
      $('.button').click(function () {

        if ($('.button').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var Correct_answers_count = 0;
          var inputCount = $('input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          if (inputCount >= 4) {
            var Correct_Answers = ["G", "D", "B", "A", "H", "E", "C", "F"];
            $('input').each(function (i) {
              if ($(this).val() !== Correct_Answers[i]) {
                if ($(this).val() !== "") {
                  $(this).css('color', '#ed1a1a');
                  // $(this).parent().css('border-color','#ed1a1a');
                }
                $(this).parent().next().css('display', 'block');
              }
              else {
                Correct_answers_count++;
              }
            });

            $('input,.Option').css('pointer-events', 'none');
            var percentage = (Correct_answers_count * 100) / 8;
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
            $('input').parent().removeClass('bd');
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
              $('.result .TextBox h1').text('Please solve at least 4 boxes before submitting');
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
