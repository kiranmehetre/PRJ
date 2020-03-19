import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-capital-letter-worksheet3',
  templateUrl: './std01-capital-letter-worksheet3.component.html',
  styleUrls: ['./std01-capital-letter-worksheet3.component.scss']
})
export class Std01CapitalLetterWorksheet3Component implements OnInit {

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


    $(".input-span").each(function (i) {

      $(this).attr('id', 'question' + i);

      var id = $(this).attr('id', 'question' + i);
    });
    var inputField;
    $('input').on('click', function () {
      inputField = $(this);
      $('input').parents().removeClass('bd');
      $(this).parents().addClass('bd');
      $(this).val("");
    });
    var Text = '';

    $('.helpbox-ans').on('click', function (event) {
      var Text = $(this).text();
      if (inputField !== undefined) {
        var Text = $(this).text();
        $(inputField).val(Text.trim());
      }
    });
    $('.text-container span').not('.input-span').click(function () {
      $(this).toggleClass("underlined");
      var numItems = $(this).parent().find('.underlined').length;
      if (numItems > 2) {
        alert('please deselect any one');
        $(this).removeClass('underlined');
      }
    });
    $('.button').click(function () {

      if ($('.button').hasClass('playAgain')) {
        window.location.href = window.location.href;
      }
      else {
        var i = 0;
        var underlinedCount = 0;
        var Correct_Answers_Count = 0;
        var inputCount=0;
        $('.text-container').each(function () {
          if ($(this).find('.underlined').length > 0) {
            underlinedCount++;
          }
          if($(this).find('input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length > 0){
            inputCount++;
          }
        });
        $('input').parent().removeClass('bd');
        if (inputCount >= 3 && underlinedCount >= 3) {
          $('input').each(function () {
            if ($(this).val().toString().trim() !== ".") {
              $(this).css({ 'color': 'red', 'border-color': '#000' });
              $(this).parent().next().css('visibility', 'visible');
            }
            else {
              Correct_Answers_Count++;
            }
            i++;
          });

          $('.correct').each(function (i) {
            if ($(this).hasClass('underlined')) {
              $(this).addClass('correct_bordered');
              $(this).addClass('right');
            }
            else {
              $(this).addClass('correct1');
            }
          });

          $('.underlined').not('.text-color').css('color', '#ed1a1a');

          $('input,.text-container span,.helpbox-ans').css('pointer-events', 'none');
          var percentage = (Correct_Answers_Count * 100) / 6;
          console.log(Correct_Answers_Count);
          console.log(percentage);
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
            $('.result .TextBox h1').text('Please solve at least 3 sentences before submitting');
          }, 500);
        }
      }

    });

    $('input').attr('readonly', 'readonly');

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
