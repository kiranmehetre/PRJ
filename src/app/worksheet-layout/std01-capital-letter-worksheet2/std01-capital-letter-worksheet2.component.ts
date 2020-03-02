import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-capital-letter-worksheet2',
  templateUrl: './std01-capital-letter-worksheet2.component.html',
  styleUrls: ['./std01-capital-letter-worksheet2.component.scss']
})
export class Std01CapitalLetterWorksheet2Component implements OnInit {

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
      $('.content span').click(function () {
        $(this).toggleClass("click");
        var numItems = $(this).parent().find('.click').length;
        if (numItems > 2) {
          alert('please deselect any one');
          $(this).removeClass('click');
        }
      });
      $(inputs).click(function () {
        inputField = $(this);
        $(inputs).parent().removeClass('bd');
        $(this).parent().addClass('bd');
        inputValue = $(inputField).val();
        $(this).val("");
      });
      $('.helpbox .col-3').click(function () {
        if (inputField !== undefined) {
          inputValue = $(inputField).val();
          Text = $(this).find('span').text();
          $(this).find('span').addClass('white');
          $(inputField).val(Text);
        }
      });

      $('.button').click(function () {

        if ($('.button').hasClass('playAgain')) {
          window.location.href = window.location.href;
        }
        else {
          var Correct_Answers_Count = 0;
          var clickCount=0;
          var inputCount = $('input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          $('.content').each(function(i){
            if($(this).find('.click').length > 0){
              clickCount++;
            }
          })
          if (inputCount >= 4 && clickCount >= 4) {
            $(inputs).parent().removeClass('bd');
            $(inputs).each(function (i) {
              if ($.trim($(this).val().toString()) !== ".") {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).parent().siblings('.answer-span').css('display', 'inline-block');
              }
              else {
                Correct_Answers_Count++;
              }
            });

            Correct_Answers_Count = Correct_Answers_Count + $('.right.click').length;
            $('.right.click').addClass('colorgreen_bordered');
            $('.right').not('.click').addClass('colorgreen');
            $('.click').not('.right').css('color', '#ed1a1a');
            $('input,.content span,.helpbox .col-3').css('pointer-events', 'none');
            var DisplayResult = "";

            DisplayResult = '.fabulous';

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
              $('.result .TextBox h1').text('Please solve at least 4 sentences before submitting');
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
      var AllImages = ['assets/images/fabulous.gif'];
      $('.imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
