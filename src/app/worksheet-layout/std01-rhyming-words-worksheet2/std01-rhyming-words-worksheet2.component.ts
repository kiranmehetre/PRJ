import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-rhyming-words-worksheet2',
  templateUrl: './std01-rhyming-words-worksheet2.component.html',
  styleUrls: ['./std01-rhyming-words-worksheet2.component.scss']
})
export class Std01RhymingWordsWorksheet2Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

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


    $(document).ready(function () {
      var imgUrl = "";
      var img;

      $('.Main_Container img').click(function () {
        //debugger;
        img = $(this);
        $(img).toggleClass('click');

        var imgClassName = $(this).attr('class');
        if ($(img).hasClass('click')) {
          //imgUrl = "url('assets/std01-rhyming-words-worksheet2/img/" + $(img).attr("data-text") + "-green.png')";
          imgUrl = "assets/std01-rhyming-words-worksheet2/img/" + $(this).attr('data-text') + "-right.png";
          $(img).attr('src', imgUrl);

        }
        else {
          imgUrl = "assets/std01-rhyming-words-worksheet2/img/" + $(img).attr("data-text") + ".png";
          $(img).attr('src', imgUrl);
        }
      });
      $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          if ($('.click').length >= 5) {
            $('.right img').each(function () {
              imgUrl = "assets/std01-rhyming-words-worksheet2/img/" + $(this).attr('data-text') + "-right.png";
              $(this).attr('src', imgUrl);

            });
            $('.wrong img').each(function () {
              imgUrl = "assets/std01-rhyming-words-worksheet2/img/" + $(this).attr('data-text') + "-wrong.png";
              $(this).attr('src', imgUrl);

            });
            // debugger;

            $('img').css('pointer-events', 'none');
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox').hide();
              $('.fabulous').removeClass('hide');
              $('.result .imgBox').show();
              $('.result').delay(2000).fadeOut('slow');
              $('.close').hide();
              setTimeout(function () {
                $('.right img.click').addClass('slide-out');
              }, 2200);
            }, 500);

            setTimeout(function () {
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            }, 500);
          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please colour at least 5 sets of balloons before submitting');
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
      $('.result_imgBox img').each(function (i) {
        var t = new Date().getTime();
        $(this).attr("src", AllImages[i] + '?' + t);
      });
    }
  }

}
