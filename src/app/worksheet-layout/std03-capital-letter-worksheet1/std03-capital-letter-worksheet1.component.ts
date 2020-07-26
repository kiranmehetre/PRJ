import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-capital-letter-worksheet1',
  templateUrl: './std03-capital-letter-worksheet1.component.html',
  styleUrls: ['./std03-capital-letter-worksheet1.component.scss']
})
export class Std03CapitalLetterWorksheet1Component implements OnInit {

  constructor(private renderer: Renderer2,private commonWorksheet: CommonWorksheetService) {
    this.renderer.setStyle(document.body, 'background-color','#aee1f4');
  }

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
    const globalThis = this;
    window.onload = function () {
     
    }
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
      if (numItems > 4) {
        alert('please deselect any one');
        $(this).removeClass('underlined');
      }
    });

    $('.button').click(function () {

      if ($(this).hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
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
        $('input').parent().removeClass('bd');
        var inputCount = $('input').filter(function () {
          return !!$(this).val();
        }).length;
        if (inputCount >= 5 && underlinedCount >= 5) {
          $('input').each(function () {
            if ($(this).val().toString().trim() !== ".") {
              $(this).css({ 'color': 'red', 'border-color': '#000' });
              $(this).parent().next().css('display', 'inline-block');
            }
            else {
              Correct_Answers_Count++;
            }
            i++;
          });
          // $('.text-container').each(function () {
          // 	if ($(this).find('.underlined.text-color').length > 0) {
          // 		Correct_Answers_Count++;
          // 	}
          // });
          // $('.text-color').addClass('correct');


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
          // $('.text-color').addClass('correct');
          $('input,.text-container span,.helpbox-ans').css('pointer-events', 'none');
          var percentage = (Correct_Answers_Count * 100) / 20;
          //console.log(Correct_Answers_Count);
          //console.log(percentage);
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
