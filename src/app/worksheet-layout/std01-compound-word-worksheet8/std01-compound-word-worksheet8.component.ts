import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-compound-word-worksheet8',
  templateUrl: './std01-compound-word-worksheet8.component.html',
  styleUrls: ['./std01-compound-word-worksheet8.component.scss']
})
export class Std01CompoundWordWorksheet8Component implements OnInit {

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
      var inputValue;
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var Correct_Answers_Count = 0;
      var inputs = $('.heart-click');
      // $(inputs).attr('readonly','readonly');
      // $(inputs).css('cursor','pointer');

      $(inputs).click(function () {
        inputField = $(this);
        $(inputs).closest('.heart-container').removeClass('bd');
        $(this).closest('.heart-container').addClass('bd');
        inputValue = $(inputField).closest('.question-container').find('.text-container span').attr('SetText');
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".helpbox").filter(function () {

          return $(this).find('span').text().trim() === inputValue;
        }).removeClass('click');
        var initialText = $(this).closest('.heart-container').find('.text-container span').attr('data-text');
        $(this).closest('.heart-container').find('.text-container span').text(initialText);
        $(this).closest('.heart-container').find('.text-container span').attr('SetText', '');
        $(this).closest('.heart-container').find('.right-heart').addClass('hidden');
        $(this).closest('.heart-container').find('.text-container').removeClass('w-100 text-center setAnswer');
        // $(this).closest('.heart-container').find('.text-container span').removeClass('setAnswer');
      });
      $('.helpbox').click(function () {
        if (inputField !== undefined) {
          inputValue = $(inputField).closest('.question-container').find('.text-container span').attr('SetText');
          Text = $(this).find('span').text();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $(".helpbox").filter(function () {
              return $(this).find('span').text().trim() === inputValue;
            }).removeClass('click');
          }
          $(this).addClass('click');
          if (ClickAnswer.indexOf(Text) > -1) {

          }
          else {
            ClickAnswer = $.grep(ClickAnswer, function (value) {
              return value != inputValue;
            });
            var heartText = $(inputField).parent().find('.text-container span').attr('data-text');
            $(inputField).parent().find('.text-container').addClass('w-100 text-center setAnswer');
            $(inputField).parent().find('.text-container span').text(heartText + Text);
            $(inputField).parent().find('.text-container span').attr('SetText', Text);
            // $(inputField).parent().find('.text-container span').addClass('setAnswer');
            $(inputField).parent().find('.right-heart').addClass('visible');
            $(inputField).parent().find('.right-heart').removeClass('hidden');
            ClickAnswer.push(Text);
          }
        }
      });

      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var Correct_Answers_Count = 0;
          var inputCount = $('.setAnswer').length;
          if (inputCount >= 5) {
            $(inputs).closest('.heart-container').removeClass('bd');
            var Correct_Answers = ["breakfast", "bedroom", "inside", "sailboat", "pancake", "toothpaste", "fishbowl", "nothing", "goldfish", "sunrise"];
            $('.text-container span').each(function (i) {
              if ($.trim($(this).text()) !== Correct_Answers[i]) {
                $(this).css({ 'color': '#fcc900', 'border-color': '#000' });
                $(this).closest('.heart-container').find('.correct-answer').css('visibility', 'visible');
              }
              else {
                Correct_Answers_Count++;
                $(this).closest('.heart-container').find('.full-heart-container').addClass('heart-beat');
                $(this).closest('.heart-container').find('.gray-heart-container').addClass('heart-beat');
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
            $('.heart-container , .helpbox-container').css('pointer-events', 'none');
            setTimeout(function () {
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            }, 500);
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 5 hearts before submitting');
            }, 500);
          }
        }


        $('.result,.close').click(function () {
          $('.result').fadeOut();
          $('.close').show();
        });
      });

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
