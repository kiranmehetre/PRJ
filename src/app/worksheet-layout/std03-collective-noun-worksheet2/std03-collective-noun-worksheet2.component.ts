import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-collective-noun-worksheet2',
  templateUrl: './std03-collective-noun-worksheet2.component.html',
  styleUrls: ['./std03-collective-noun-worksheet2.component.scss']
})
export class Std03CollectiveNounWorksheet2Component implements OnInit {

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
    $(document).ready(function () {
      var inputField;
      var inputValue;
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var Correct_Answers_Count = 0;
      var inputs = $('input');
      $(inputs).attr('readonly', 'readonly');
      $(inputs).css('cursor', 'pointer');

      $(inputs).click(function () {
        inputField = $(this);
        inputValue = $(inputField).val();
        $(inputs).removeClass('bd');
        $(this).addClass('bd');

        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".Option").filter(function () {
          return $(this).find(".alphabet").text().replace(")", "") === inputValue;
        }).removeClass('white');
        $(this).val("");

      });
      $('.Option').click(function () {
        if (inputField !== undefined) {
          inputValue = $(inputField).val();
          Text = $(this).find('.alphabet').text().replace(")", "");
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $(".Option").filter(function () {
              return $(this).find(".alphabet").text().replace(")", "") === inputValue;
            }).removeClass('white');
          }
          $(this).addClass('white');
          if (ClickAnswer.indexOf(Text) > -1) {
          }
          else {
            ClickAnswer = $.grep(ClickAnswer, function (value) {
              return value != inputValue;
            });
            $(inputField).val(Text);
            ClickAnswer.push(Text);
          }
        }
      });

      $('.button').click(function () {


        if ($('.button').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var inputCount = $('input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          if (inputCount >= 5) {
            $(inputs).removeClass('bd');
            var Correct_Answers = ["G", "J", "E", "B", "I", "A", "D", "F", "H", "C"];
            $('input').each(function (i) {

              var inputClass = "";
              if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {

                var check = i;
                // inputClass = $(this).attr('class');
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                // $('.right-ans.'+inputClass).find('span').css('display','inline-block');
                //$('.right-ans').css('display', 'inline-block');
                $('.number' + i).css('visibility', 'visible');
              }
              else {
                $('.number' + i).css('visibility', 'visible');
                $('.number' + i).css('visibility', 'hidden');
                Correct_Answers_Count++;
              }
            });
            var ImgURL = "";
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

            $('input,.Option').css('pointer-events', 'none');

            setTimeout(function () {
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            }, 500);
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 5 boxes before submitting');
            }, 500);
          }
        }
      });

    });

    $('.result,.close').click(function () {
      $('.result').fadeOut();
      $('.close').show();
    })
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
