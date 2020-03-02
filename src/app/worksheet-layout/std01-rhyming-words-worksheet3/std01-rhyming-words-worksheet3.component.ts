import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std01-rhyming-words-worksheet3',
  templateUrl: './std01-rhyming-words-worksheet3.component.html',
  styleUrls: ['./std01-rhyming-words-worksheet3.component.scss']
})
export class Std01RhymingWordsWorksheet3Component implements OnInit {

  constructor() { }

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


    $(document).ready(function () {
      $('.Main_Container img,.Main_Container  span').not('.result img').click(function () {
        // debugger;
        if ($(this).parent().find('img').hasClass('click')) {
          $(this).parent().find('img').removeClass('click');
          $(this).parent().find('img').attr('src', 'assets/std01-rhyming-words-worksheet3/img/tree.png');
        }
        else {
          $(this).parent().find('img').addClass('click');
          $(this).parent().find('img').attr('src', 'assets/std01-rhyming-words-worksheet3/img/right_tree.png');
        }

      });
      $('.button').click(function () {


        if ($('.button').hasClass('playAgain')) {
          window.location.reload();
        }
        else {
          var Correct_Answers_Count = 0;
          if ($('.click').length >= 5) {
            $('img.wrong').attr('src', 'assets/std01-rhyming-words-worksheet3/img/wrong_tree.png');
            $('img.right').attr('src', 'assets/std01-rhyming-words-worksheet3/img/right_tree.png');
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox').hide();
              $('.fabulous').removeClass('hide');
              $('.result .imgBox').show();
              $('.result').delay(2000).fadeOut('slow');
              $('.close').hide();
            }, 500);

            setTimeout(function () {
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            }, 500);
            $('.Main_Container img,span,.tree').css('pointer-events', 'none');

          }
          else {
            setTimeout(function () {
              $('.result').css('display', 'flex');
              $('.result .TextBox h1').text('Please colour at least 5 trees before submitting');
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
