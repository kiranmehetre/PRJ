import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std02-collective-noun-worksheet2',
  templateUrl: './std02-collective-noun-worksheet2.component.html',
  styleUrls: ['./std02-collective-noun-worksheet2.component.scss']
})
export class Std02CollectiveNounWorksheet2Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
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
    var clickAnswer = [];
    var inputValue;
    var inputs = $('input');
    $(inputs).on('click', function () {
      inputField = $(this);
      inputValue = $(this).val();
      $('input').removeClass('bd');
      $(this).addClass('bd');
      clickAnswer = $.grep(clickAnswer, function (value) {
        return value != inputValue;
      });
      $(".options li").filter(function () {
        return $(this).find('.number').text().replace(')', '') === inputValue;
      }).removeClass('click');
      $(this).val("");
    });
    $('input').attr('readonly', 'readonly');
    var Text = '';
    var HelpBox = [];
    $('.options li span').click(function () {
      if (inputField !== undefined) {
        inputValue = $(inputField).val();
        Text = $(this).parent().find('.number').text().replace(')', '');
        HelpBox.push(Text);
        if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
          $(".options li").filter(function () {
            return $(this).find('.number').text().replace(')', '') === inputValue;
          }).removeClass('click');
        }
        $(this).parent().addClass('click');


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
    //END
    $('.button').click(function () {
      if ($(this).hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
      else {
        var inputCount = $('input[type="text"]').filter(function () {
          return !!$(this).val();
        }).length;
        if (inputCount >= 4) {
          var i = 0;
          var Correct_Answers_Count = 0;
          $('input').removeClass('bd');
          var Correct_Answers = ["3", "5", "7", "1", "8", "2", "6", "4"];
          $('input').each(function () {

            if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
              // $(this).css({'color':'#ed1a1a'});
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });

              $('.ans' + i).css({ 'display': 'initial' });
            }
            else {
              Correct_Answers_Count++;
            }
            i++;
          });
          $('input,.options li span').css('pointer-events', 'none');

          var percentage = (Correct_Answers_Count * 100) / 8;
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
            $('.button').addClass('playAgain');
            $('.button.playAgain').text('solve again');
          }, 500);
        }
        else {
          setTimeout(function () {
            $('.result').css('display', 'flex');
            $('.result .TextBox h1').text('Please solve at least 4 blanks before submitting');
          }, 500);
        }
      }

    });
    $('input').attr('readonly', 'readonly');
    $('.playAgain').click(function () {
      location.reload();
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
