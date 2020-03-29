import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-comprehensions-worksheet4',
  templateUrl: './std03-comprehensions-worksheet4.component.html',
  styleUrls: ['./std03-comprehensions-worksheet4.component.scss']
})
export class Std03ComprehensionsWorksheet4Component implements OnInit {

  loadAPI: Promise<any>;constructor(private commonWorksheet: CommonWorksheetService){

    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
  });}
  public loadScript() {
    var dynamicScripts = ["https://code.jquery.com/jquery-3.3.1.min.js", "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"];
    for (var i = 0; i < dynamicScripts.length; i++) {
      let node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
    const globalThis = this;
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
    $(document).ready(function () {
      var BackgroundImagesLandscapeArr = ["url(assets/std03-comprehensions-worksheet4/img/slide1_bg.jpg)", "url(assets/std03-comprehensions-worksheet4/img/slide2_bg.jpg)", "url(assets/std03-comprehensions-worksheet4/img/slide3_bg.jpg)"];
      var BackgroundImagesPortraitArr = ["url(assets/std03-comprehensions-worksheet4/img/slide1_bg_portrait.jpg)", "url(assets/std03-comprehensions-worksheet4/img/slide2_bg_portrait.jpg)", "url(assets/std03-comprehensions-worksheet4/img/slide3_bg_portrait.jpg)"];
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
        ActiveSlideNumber++;
        if (ActiveSlideNumber > 2) {
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
          ActiveSlideNumber = 2;
        }
        $('.bg').css({
          'background': BackgroundImagesArr[ActiveSlideNumber] + ' no-repeat right bottom fixed',
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
        });
      });
      $('.carousel-indicators li').click(function () {
        var ActiveList = $(this).text().trim();
        ActiveSlideNumber = parseInt(ActiveList) - 1;
        $('.bg').css({
          'background': BackgroundImagesArr[ActiveSlideNumber] + ' no-repeat right bottom fixed',
          'background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
        });
      });


      var options = $('.Question_Block.first .option,.Question_Block.second .option,.Question_Block.third .option,.Question_Block.fourth .option,.Question_Block.sixth .option,.Question_Block.eighth .option')
      $(options).click(function () {
        $(this).parent().find('.option').removeClass('click');
        $(this).addClass('click');
      });
      var inputs = $('input');
      var inputField;
      var inputValue;
      var ClickAnswer = [];
      var HelpBox = [];
      var Text = "";
      var inputNumber = "";
      var spanNumber = "";
      $(inputs).attr('readonly', 'readonly');
      $(inputs).click(function () {
        inputField = $(this);
        inputNumber = $(this).closest('.Question_Block').find('.number span').text();
        $(inputs).removeClass('bd');
        $(this).addClass('bd');
        inputValue = $(inputField).val();
        ClickAnswer = $.grep(ClickAnswer, function (value) {
          return value != inputValue;
        });
        $(".helpbox_div").filter(function () {
          return $(this).text().trim() === inputValue;
        }).removeClass('yellow');
        $(this).val("");
      });
      $('.helpbox_div').click(function () {
        if (inputField !== undefined) {
          inputValue = $(inputField).val();
          Text = $(this).text().trim();
          HelpBox.push(Text);
          if (HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0) {
            $(".helpbox_div").filter(function () {
              return $(this).text().trim() === inputValue;
            }).removeClass('yellow');
          }
          $(this).addClass('yellow');
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
      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var QuestionCount = 0;
          $('.Question_Block').not('.fifth,.seventh').each(function () {
            if ($(this).find('.click').length > 0) {
              QuestionCount++;
            }
          });
          if ($('.Question_Block.fifth input').filter(function () { return !!$(this).val(); }).length > 0) {
            QuestionCount++;
          }
          if ($('.Question_Block.seventh input').filter(function () { return !!$(this).val(); }).length > 0) {
            QuestionCount++;
          }
          //console.log(QuestionCount);
          if (QuestionCount >= 4) {
            $(inputs).removeClass('bd');
            var Correct_Answers = ["similarity", "difference"];
            $('.Question_Block.fifth input').each(function (i) {
              if ($.trim($(this).val().toString()) !== Correct_Answers[i]) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
                $(this).siblings('.correct_answer').css('display', 'inline-block');
              }
            });
            var Answers = ["remarked", "replied"];
            var Fifth_Answers = [];
            var Fifth_Wrong_Answers = [];
            $('.Question_Block.seventh input').each(function (i) {
              if (Answers.indexOf($(this).val().toString()) == -1) {
                $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              }
              else {
                Fifth_Answers.push($(this).val());
              }
            });
            Answers.filter(function (el) {
              if ($.inArray(el, Fifth_Answers) == -1) Fifth_Wrong_Answers.push(el);
            });
            var ctr = 0;
            $('.Question_Block.seventh input').each(function (i) {
              if (Answers.indexOf($(this).val().toString()) == -1) {
                $(this).siblings('.correct_answer').find('span').text(Fifth_Wrong_Answers[ctr]);
                $(this).siblings('.correct_answer').css('display', 'inline-block');
                ctr++;
              }
            });
            $('.option.click .alpha').not('.right').css('background', '#bc292a');
            $('.option .alpha.right').css('background', '#20bb15');
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
            $('.option,input,.helpbox_div').css('pointer-events', 'none');
            setTimeout(function () {
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            }, 500);
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please solve at least 4 questions before submitting');
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
      var t = new Date().getTime();
      $('.imgBox img').attr("src", 'assets/images/fabulous.gif' + '?' + t);
    }
  }

}
