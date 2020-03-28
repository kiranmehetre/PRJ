import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std02-conjunctions-worksheet8',
  templateUrl: './std02-conjunctions-worksheet8.component.html',
  styleUrls: ['./std02-conjunctions-worksheet8.component.scss']
})
export class Std02ConjunctionsWorksheet8Component implements OnInit {

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

    function countInArray(array, what) {
      var count = 0;
      for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
          count++;
        }
      }
      return count;
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
      var UsedDataSet = [];
      var Text = "";
      var TextCount = 0;
      var inputs = $('input');
      $(inputs).attr('readonly', 'readonly');

      $(inputs).click(function () {
        inputField = $(this);
        $(inputs).parent().removeClass('bd');
        $(this).parent().addClass('bd');
        inputValue = $(inputField).val();
        if (inputValue == "and" || inputValue == "but" || inputValue == "as") {
          var index = ClickAnswer.indexOf(inputValue);
          if (index > -1) {
            ClickAnswer.splice(index, 1);
          }
          $("[data-set=" + $(inputField).attr('data-set') + "]").removeClass('shadow');
          var usd_data_set = UsedDataSet.indexOf($(inputField).attr('data-set'));
          UsedDataSet.splice(usd_data_set, 1)
        }
        else {
          ClickAnswer = jQuery.grep(ClickAnswer, function (value) {
            return value != inputValue;
          });
          $(".helpbox").filter(function () {
            return $(this).find('span').text() === inputValue;
          }).removeClass('shadow');
        }

        $(this).val("");
      });

      $('.helpbox').click(function () {

        if (inputField !== undefined) {
          Text = $(this).find('span').text();
          inputValue = $(inputField).val();

          if (UsedDataSet.indexOf($(this).attr('data-set')) < 0 || Text == "if" || Text == "when") {
            // $(this).attr('data-text',Text);
            HelpBox.push(Text);

            if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
              if (inputValue == "and" || inputValue == "but" || inputValue == "as") {
                var index = ClickAnswer.indexOf(inputValue);
                if (index > -1) {
                  ClickAnswer.splice(index, 1);
                }
                var checkDatasetValue = $(inputField).attr('data-set');
                $("[data-set=" + $(inputField).attr('data-set') + "]").removeClass('shadow');
                var usd_data_set = UsedDataSet.indexOf($(inputField).attr('data-set'));
                UsedDataSet.splice(usd_data_set, 1)

              }
              else {
                $(".helpbox").filter(function () {
                  return $(this).find('span').text() === inputValue;
                }).removeClass('shadow');
              }
            }
            else {
              if (inputValue == "and" || inputValue == "but" || inputValue == "as") {
                var index = ClickAnswer.indexOf(inputValue);
                if (index > -1) {
                  ClickAnswer.splice(index, 1);
                }
                var checkDatasetValue = $(inputField).attr('data-set');
                $("[data-set=" + $(inputField).attr('data-set') + "]").removeClass('shadow');
                var usd_data_set = UsedDataSet.indexOf($(inputField).attr('data-set'));
                UsedDataSet.splice(usd_data_set, 1)
              }

            }
            $(this).addClass('shadow');
            if (ClickAnswer.indexOf(Text) > -1) {
              if (Text == "and" || Text == 'but' || Text == 'as') {
                
                var TextCount = countInArray(ClickAnswer, Text);
                if (TextCount > 1) {

                }
                else {
                  ClickAnswer = $.grep(ClickAnswer, function (value) {
                    return value != inputValue;
                  });
                  $(inputField).val(Text);
                  $(inputField).attr('data-set', $(this).attr('data-set'));
                  UsedDataSet.push($(this).attr('data-set'));
                  ClickAnswer.push(Text);
                }
              }
            }
            else {
              ClickAnswer = $.grep(ClickAnswer, function (value) {
                return value != inputValue;
              });
              $(inputField).val(Text);
              $(inputField).attr('data-set', $(this).attr('data-set'));
              UsedDataSet.push($(this).attr('data-set'));
              ClickAnswer.push(Text);
            }
          }
        }
      });
      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var Correct_Answers_Count = 0;
          var inputCount = $('input[type="text"]').filter(function () {
            return !!$(this).val();
          }).length;
          if (inputCount >= 4) {
            var Correct_Answers = ["when", "and", "as", "but", "as", "but", "and", "if"];
            $(inputs).each(function (i) {
              if ($(this).val() !== Correct_Answers[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).next().css('display', 'inline');
              }
              else {
                Correct_Answers_Count++;
              }
            });
            $(inputs).parent().removeClass('bd');
            $('input,.Option_Container img,.helpbox').css('pointer-events', 'none');
            // $('.Option_Container').addClass('absolute');var ImgURL="";
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
