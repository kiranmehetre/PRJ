import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std03-common-noun-worksheet1',
  templateUrl: './std03-common-noun-worksheet1.component.html',
  styleUrls: ['./std03-common-noun-worksheet1.component.scss']
})
export class Std03CommonNounWorksheet1Component implements OnInit {

  constructor(private renderer: Renderer2,private commonWorksheet: CommonWorksheetService) {
    this.renderer.setStyle(document.body, 'background','linear-gradient(#fbae42 60%,#fbe14c) no-repeat,#fbe14c');
  }

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
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
    var imgUrl = "";
    var img;

    $('.main-question-container img').click(function () {
      img = $(this);
      var imgClassName = $(this).attr('class');
      var checkvalue = imgClassName.indexOf('boy-not');
      if (imgClassName.indexOf('click') > -1 && imgClassName.indexOf('boy-not') < 0) {
        imgUrl = "assets/std03-common-noun-worksheet1/img/" + $(img).attr("data-text") + ".png";
        $(img).attr("src", imgUrl);
        $(img).removeClass('click');

      }
      else {
        imgUrl = "assets/std03-common-noun-worksheet1/img/" + $(img).attr("data-text") + "-green.png";
        $(img).attr("src", imgUrl);
        $(img).addClass('click');
      }
    });

    $('.button').click(function () {
      if ($(this).hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
      else {
        if ($('.click').length >= 8) {
          $('.main-question-container img').each(function () {
            img = $(this);
            var CheckimgClassName = $(this).attr('class');
            if (CheckimgClassName.indexOf('boy-not') < 0) {
              if (CheckimgClassName.indexOf('click') > -1) {

              }
              else {
                if (CheckimgClassName.indexOf('wrong') < 0) {
                  imgUrl = "assets/std03-common-noun-worksheet1/img/" + $(img).attr("data-text") + "-green.png";
                  $(img).attr("src", imgUrl);
                }

              }
            }
          });
          $('.wrong').each(function () {

            img = $(this);
            imgUrl = "assets/std03-common-noun-worksheet1/img/" + $(img).attr("data-text") + "-red.png";
            $(img).attr("src", imgUrl);
            // imgUrl = "url('assets/std03-common-noun-worksheet1/img/" + $(img).attr("data-text") + "-red.png')";
            // $(img).css('content', imgUrl);
          });

          $('.main-question-container img').css('pointer-events', 'none');

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
            $('.result .TextBox h1').text('Please colour at least 8 speech bubbles before submitting');
          }, 500);
        }
      }

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
