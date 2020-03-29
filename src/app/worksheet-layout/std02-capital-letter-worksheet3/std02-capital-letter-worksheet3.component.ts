import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std02-capital-letter-worksheet3',
  templateUrl: './std02-capital-letter-worksheet3.component.html',
  styleUrls: ['./std02-capital-letter-worksheet3.component.scss']
})
export class Std02CapitalLetterWorksheet3Component implements OnInit {

  constructor(private renderer: Renderer2,private commonWorksheet: CommonWorksheetService) {
    this.renderer.setStyle(document.body, 'background-color','#f9d889');
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



    var inputField;

    var inputValue;
    var inputs = $('input');

    $(inputs).on('click', function () {
      inputField = $(this);
      inputValue = $(this).val();
      $(inputs).parent().removeClass("bd");
      $(this).parent().addClass('bd');
      $(this).val("");
    });
    $('input').attr('readonly', 'readonly');
    var Text = '';


      $('.helpbox .col-3').on('click', function (event) {

        inputValue = $(inputField).val();
        if (inputField !== undefined) {
          Text = $(this).text().trim();
          // $(this).addClass('click');
          $(inputField).val(Text);
        }
      });
    
      var options = $('.question').find('.content span:not(.input-span)');
        $(options).click(function () {
          if ($(this).hasClass('underlined')) {
            $(this).removeClass('underlined');
          }
          else {
            var UnderlinedLength = $(this).closest('.content').find('.underlined').length;
            if (UnderlinedLength < 4) {
              $(this).addClass('underlined');
            }
            else {
              alert("please deselect any one")
            }
          }
        });

    $('.button').click(function () {

      if ($(this).hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
      else {
        var ctr = 0;
        var Correct_Answers_Count = 0;
        var inputCount = $('input[type="text"]').filter(function () {
          return !!$(this).val();
        }).length;
        $('.question').each(function () {
          if ($(this).find('.underlined').length > 0) {
            ctr++;
          }
        });
        if (inputCount >= 4 && ctr >= 4) {

          ctr = 0;
          $('.question').each(function () {
            if ($(this).find('.underlined.correct-underline').length > 0) {

              $('.correct-underline').each(function (i) {
                if ($(this).hasClass('underlined')) {
                  $(this).addClass('correct_bordered');
                  $(this).addClass('correct');
                }
                else {
                  $(this).addClass('correct1');
                }
              });

              Correct_Answers_Count++;
            }
          });
          $('.underlined').not('.correct-underline').css('color', '#ed1a1a');
          $('.correct-underline').addClass('correct');
          $('input').each(function (i) {
            if ($(this).val() !== ".") {
              // $(this).parent().siblings('.answer-div').css('display','inline-block');
              $(this).siblings('.answer-div').css('visibility', 'visible');
              $(this).css(
                {
                  'color': '#ed1a1a',
                  'border-color': '#000'
                }
              );
            }
            else {
              Correct_Answers_Count++;
            }
          });
          $(inputs).parent().removeClass("bd");
          $('.helpbox span,input,.question span').css('pointer-events', 'none');
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
