import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-degress-of-comparison-worksheet2',
  templateUrl: './std03-degress-of-comparison-worksheet2.component.html',
  styleUrls: ['./std03-degress-of-comparison-worksheet2.component.scss']
})
export class Std03DegressOfComparisonWorksheet2Component implements OnInit {

  constructor() { }

  ngOnInit() {
     $('.loadingDiv').hide();
      setImages();
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
    var inputField;
    var clickAnswer = [];
    var HelpBox = [];
    var inputValue;
    var smallinputField;
    var smallclickAnswer = [];
    var smallinputValue;
    var Text = "";
    var smallText = "";
    var imgUrl = "";
    var firstinputs = $('.input_Block.uppercase input');
    var secondInputs = $('.input_Block.lowercase input');
    var inputs = $('input');
    $('input').attr('readonly', 'readonly');
    $(firstinputs).click(function () {
      inputField = $(this);
      smallinputField = $(this).closest('.Answer_Block').find('.input_Block.lowercase input');
      inputValue = $(this).val();
      smallinputValue = $(smallinputField).val();
      $('.input_Block img').attr('src', 'assets/std03-degress-of-comparison-worksheet2/img/input_bg.png');
      $(this).closest('.Answer_Block').find('.input_Block img').attr('src', 'assets/std03-degress-of-comparison-worksheet2/img/input_bg_click.png');
      clickAnswer = $.grep(clickAnswer, function (value) {
        return value != inputValue;
      });

      $(".Column_B .Question_Row").filter(function () {
        return $(this).find('.alpha').text() === inputValue;
      }).removeClass('click');
      $(".Column_C .Question_Row").filter(function () {
        return $(this).find('.alpha').text() === smallinputValue;
      }).removeClass('click');
      $(this).val("");
      $(smallinputField).val("");
    });

    $('.Column_B .Question_Row,.Column_C .Question_Row').click(function () {
      if (inputField !== undefined) {
        Text = $(this).find('.alpha').text();
        smallText = $(this).find('.alpha').text();
        inputValue = $(inputField).val();
        smallinputValue = $(smallinputField).val();
        HelpBox.push(Text);
        if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
          $(".Column_B .Question_Row").filter(function () {
            return $(this).find('.alpha').text() === inputValue;
          }).removeClass('click');
          $(".Column_C .Question_Row").filter(function () {
            return $(this).find('.alpha').text() === smallinputValue;
          }).removeClass('click');
        }
        $(".Column_B .Question_Row").filter(function () {
          return $(this).find('.alpha').text().replace(')', '') === smallText;
        }).addClass('click');
        $(".Column_C .Question_Row").filter(function () {
          return $(this).find('.alpha').text().replace(')', '') === smallText;
        }).addClass('click');
        if (clickAnswer.indexOf(Text) > -1) {
        }
        else {
          clickAnswer = $.grep(clickAnswer, function (value) {
            return value != inputValue;
          });
          $(inputField).val(Text);
          $(smallinputField).val(smallText);
          clickAnswer.push(Text);
        }
      }
    });

    $('.button').click(function () {


      if ($('.button').hasClass('playAgain')) {
        window.location.href = window.location.href;
      }
      else {
        var Correct_Answers_Count = 0;
        var isTrue = false;
        var inputCount = $('input[type="text"]').filter(function () {
          return !!$(this).val();
        }).length;
        if (inputCount >= 10) {
          var Correct_Answers = ["d", "d", "i", "i", "f", "f", "h", "h", "b", "b", "g", "g", "j", "j", "c", "c", "a", "a", "e", "e"];
          var Inputs = $('input');
          $(Inputs).each(function (i) {
            if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
              $(this).css({ 'color': '#ed1a1a' });
              $(this).siblings('.correct_answer').css('display', 'block');
              isTrue = true;
            }
            else {
              Correct_Answers_Count++;
            }
          });
          $('input,.Column_B .Question_Row,.Column_C .Question_Row').css('pointer-events', 'none');
          $('.input_Block').removeClass('bg');
          if (isTrue) {
            $('.btn-row').addClass('top_margin');
          }
          $('.input_Block img').attr('src', 'assets/std03-degress-of-comparison-worksheet2/img/input_bg.png');
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
            $('.result .TextBox h1').text('Please solve at least 5 shapes before submitting');
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
