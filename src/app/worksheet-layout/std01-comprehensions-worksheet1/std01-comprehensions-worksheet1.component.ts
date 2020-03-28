import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std01-comprehensions-worksheet1',
  templateUrl: './std01-comprehensions-worksheet1.component.html',
  styleUrls: ['./std01-comprehensions-worksheet1.component.scss']
})
export class Std01ComprehensionsWorksheet1Component implements OnInit {
  loadAPI: Promise<any>;
  constructor(private commonWorksheet: CommonWorksheetService){

    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
  });

  }
  public loadScript() {   
        var dynamicScripts = ["https://code.jquery.com/jquery-3.3.1.min.js","https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"];
        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }
}

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

  var BackgroundImagesLandscapeArr = ["url(/assets/std01-comprehensions-worksheet1/img/slide1_bg.jpg)", "url(/assets/std01-comprehensions-worksheet1/img/slide2_bg.jpg)"];
  var BackgroundImagesPortraitArr = ["url(/assets/std01-comprehensions-worksheet1/img/slide1_bg_portrait.jpg)", "url(/assets/std01-comprehensions-worksheet1/img/slide2_bg_portrait.jpg)"];
  var BackgroundImagesArr = [];
  var orientation = window.screen.orientation;
  if (orientation.type == "landscape-primary") {
      BackgroundImagesArr = BackgroundImagesLandscapeArr;
  }
  else {
      BackgroundImagesArr = BackgroundImagesPortraitArr;
  }
  var ActiveSlideNumber;
   ActiveSlideNumber = $('li.active').attr('data-slide-to');
  ActiveSlideNumber = parseInt(ActiveSlideNumber);
  $('.carousel-control-next-icon').click(function () {
    // debugger;
      ActiveSlideNumber++;
      if (ActiveSlideNumber > 1) {
          ActiveSlideNumber = 0;
      }
      $('.bg').css({
          'background': BackgroundImagesArr[ActiveSlideNumber] + ' no-repeat right bottom fixed',
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
      });
  });
  $('.carousel-control-prev-icon').click(function () {
      ActiveSlideNumber--;
      if (ActiveSlideNumber < 0) {
          ActiveSlideNumber = 1;
      }
      $('.bg').css({
          'background': BackgroundImagesArr[ActiveSlideNumber] + ' no-repeat right bottom fixed',
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
      });
  });
  $('.carousel-indicators li').click(function () {
      var ActiveList;
      ActiveList = $(this).text().trim();
      ActiveSlideNumber = parseInt(ActiveList)-1;
      $('.bg').css({
          'background': BackgroundImagesArr[ActiveSlideNumber] + ' no-repeat right bottom fixed',
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
      });
  });

  var inputField;
  var inputValue;
  var ClickAnswer = [];
  var HelpBox = [];
  var Text = "";
  var Correct_Answers_Count = 0;
  var inputs = $('input');
  var inputNumber = "";
  var optionNumber = "";
  $(inputs).attr('readonly', 'readonly');
  $(inputs).css('cursor', 'pointer');

  $(inputs).click(function () {
      inputField = $(this);
      $(inputs).parent().removeClass('bd');
      $(this).parent().addClass('bd');
      inputValue = $(inputField).val();
      ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
      });
      $(".question.one .option,.question.five .option,.second .helpbox-container .col-6 div").filter(function () {
          return $(this).text().trim() === inputValue;
      }).removeClass('click');
      $(this).val("");
      inputNumber = $(this).closest('.question').find('.number').text().trim();
  });
  $('.question.one .option,.question.five .option,.second .helpbox-container .col-6 div').click(function () {
      optionNumber = $(this).closest('.question').find('.number').text().trim();
      if (inputField !== undefined && inputNumber == optionNumber) {
          inputValue = $(inputField).val();
          Text = $(this).text().trim();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
              $(".question.one .option,.question.five .option,.second .helpbox-container .col-6 div").filter(function () {
                  return $(this).text().trim() === inputValue;
              }).removeClass('click');
          }
          $(this).addClass('click');
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
  $('.option-question').click(function () {
      $(this).closest('.question').find('.option-question').removeClass('green');
      $(this).addClass('green');
  });

  $('.button').click(function () {
      if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
      else {
          var inputCount = 0;
          $('.question').each(function (i) {
              if (i >= 1 && i <= 3) {
                  if ($(this).find('.green').length > 0) {
                      inputCount++;
                  }
              }
              else {
                  if ($(this).find('input').filter(function () { return !!$(this).val(); }).length > 0) {
                      inputCount++;
                  }
              }
          });
          //console.log(inputCount);
          if (inputCount >= 3) {
              var Correct_Answers_Count = 0;
              $(inputs).parent().removeClass('bd');
              var Correct_Answers = ["on", "on", "at", "in", "in", "on", "in", "at"];
              var SingleInputs_Correct_Answers = ["big", "bananas"];
              var singleInputs = $('.question.one input,.question.five input');
              $(singleInputs).each(function (i) {
                  if ($.trim($(this).val().toString()) !== SingleInputs_Correct_Answers[i]) {
                      $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                      $(this).parent().siblings('.answer').addClass('inlineBlock');
                  }
              });
              $('.option-question.green .circle').not('.correct').css('background-color', '#ab2323');
              $('.option-question .circle.correct').css('background-color', '#20bb15');

              var Correct_Answerss = [["joy", "toy"], ["dig", "pig"], ["lay", "way"]];

              $('.second .shift-bottom').each(function (i) {
                  var inputRowValues = [];
                  var Wrong_Answers = [];
                  var inputField_Array = [];
                  var inputRow = $(this).find('input');
                  $(inputRow).each(function (j) {
                      if (Correct_Answerss[i].indexOf($(this).val().toString()) < 0) {
                          inputField_Array.push($(this));
                      }
                      else {
                          inputRowValues.push($(this).val());
                      }
                  });
                  // jQuery.grep(Correct_Answers[i], function (el) {
                  //     if (jQuery.inArray(el, inputRowValues) == -1) Wrong_Answers.push(el);
                  // });
                  Correct_Answerss[i].filter(function(el) {
                      if ($.inArray(el, inputRowValues) == -1) Wrong_Answers.push(el);
              });	
                  for (var i = 0; i <= Wrong_Answers.length; i++) {
                      $(inputField_Array[i]).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                      $(inputField_Array[i]).parent().siblings('.second .answer-div').find('span').text(Wrong_Answers[i]);
                      $(inputField_Array[i]).parent().siblings('.second .answer-div').css('display', 'block');
                  }
              });

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


              $('input,.option,.option-question,.second .helpbox-container .col-6 div, .second .helpbox-container .col-sm-4 div').css('pointer-events', 'none');
          }
          else {
              setTimeout(function () {
                  $('.result').css('display', 'flex');
                  $('.result .TextBox h1').text('Please solve at least 3 questions before submitting');
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
