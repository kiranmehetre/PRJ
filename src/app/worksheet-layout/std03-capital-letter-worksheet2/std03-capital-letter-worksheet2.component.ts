import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std03-capital-letter-worksheet2',
  templateUrl: './std03-capital-letter-worksheet2.component.html',
  styleUrls: ['./std03-capital-letter-worksheet2.component.scss']
})
export class Std03CapitalLetterWorksheet2Component implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color','#f8f17d');
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
    $(".input-span").each(function (i) {

      $(this).attr('id', 'question' + i);

      var id = $(this).attr('id', 'question' + i);
    });
    var inputField;
    $('input').on('click', function () {
      inputField = $(this);
      $('input').removeClass('bd');
      $(this).addClass('bd');
      $(this).val("");
    });
    var Text = '';

    $('.helpbox-ans ').on('click', function (event) {
      var Text = $(this).text();
      if (inputField !== undefined) {
        var Text = $(this).text();
        $(inputField).val(Text.trim());
      }
    });
    $('.text-container span').not('.input-span').click(function () {
      $(this).toggleClass("underlined");
      var numItems = $(this).parent().find('.underlined').length;
      if (numItems > 4) {
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
        $('.text-container').each(function () {
          if ($(this).find('.underlined').length > 0) {
            underlinedCount++;
          }
        });
        var inputCount = $('input[type="text"]').filter(function () {
          return !!$(this).val();
        }).length;
        if (inputCount >= 5 && underlinedCount >= 5) {
          $('input').each(function () {
            if ($(this).val().toString().trim() !== ".") {
              $(this).css({ 'color': 'red', 'border-color': '#000' });
              $(this).siblings('.answer-span').css('display', 'inline-block');
            }
            else {
              Correct_Answers_Count++;
            }
            i++;
          });

          $('.text-color').each(function (i) {
            if ($(this).hasClass('underlined')) {
              $(this).addClass('correct_bordered');
              $(this).addClass('correct');
            }
            else {
              $(this).addClass('correct1');

            }
          });
          $('.underlined').not('.text-color').css('color', '#ed1a1a');
          // $('.text-color').addClass('correct');
          $('input,.text-container span,.helpbox-ans').css('pointer-events', 'none');
          var percentage = (Correct_Answers_Count * 100) / 20;
          console.log(Correct_Answers_Count);
          console.log(percentage);
          var DisplayResult = "";

          DisplayResult = '.fabulous';
          $('input').removeClass('bd');
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

    $('input').attr('readonly', 'readonly');

    $('.result,.close').click(function () {
      $('.result').fadeOut();
      $('.close').show();
    });
    function setImages() {
      var t = new Date().getTime();
      $('.imgBox img').attr("src", 'assets/images/fabulous.gif' + '?' + t);
    }
  }

}
