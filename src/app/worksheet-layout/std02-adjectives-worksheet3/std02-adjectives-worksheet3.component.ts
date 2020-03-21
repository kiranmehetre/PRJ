import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-std02-adjectives-worksheet3',
  templateUrl: './std02-adjectives-worksheet3.component.html',
  styleUrls: ['./std02-adjectives-worksheet3.component.scss']
})
export class Std02AdjectivesWorksheet3Component implements OnInit {

  constructor() { }

  ngOnInit() {
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
 

  $(".ans-div").each(function (i) {
    $(this).attr('id', 'ans-div' + i);
  });

  $('input').attr('readonly', 'readonly');
  var inputField;
  var inputValue;
  var HelpBox = [];
        var ClickAnswer=[];
  ClickAnswer[0]=[];
  ClickAnswer[1]=[];
  ClickAnswer[2]=[];
  ClickAnswer[3]=[];
  ClickAnswer[4]=[];
  ClickAnswer[5]=[];
  ClickAnswer[6]=[];
  ClickAnswer[7]=[];
  var Text = "";
  var Correct_Answers_Count = 0;
  var inputs = $('input');
  var inputNumber;
  var spanNumber;
  $(inputs).css('cursor', 'pointer');

  $(inputs).click(function () {
            inputField=$(this);
    $(inputs).parent().removeClass('bd');
    $(this).parent().addClass('bd');
    inputValue=$(inputField).val();
    inputNumber = parseInt($(this).closest('.question').find('.number').text().trim().replace(")",""));
    ClickAnswer[inputNumber - 1] = $.grep(ClickAnswer[inputNumber - 1], function(value) {
              return value != inputValue;
            });
    $(this).closest(".question").find(".text-container .col-12 span").filter(function () {
      return $(this).text().trim() === inputValue;
    }).removeClass('underlined');
    $(this).val("");
  });
  $('.text-container .col-12 span').click(function () {
    spanNumber = parseInt($(this).closest('.question').find('.number').text().trim().replace(")",""));
    if (inputField !== undefined && spanNumber === inputNumber) {
                inputValue=$(inputField).val();
      Text = $(this).text().replace('!', '').trim();
      HelpBox.push(Text);
      if(HelpBox.indexOf(inputValue) > -1 && ClickAnswer[inputNumber - 1].indexOf(Text) < 0){
      $(this).closest(".question").find(".text-container .col-12 span").filter(function () {
          return $(this).text().trim() === inputValue;
        }).removeClass('underlined');
      }
      $(this).addClass('underlined');
                if(ClickAnswer[inputNumber - 1].indexOf(Text) > -1){

                }
                else{ClickAnswer[inputNumber - 1]
                    ClickAnswer[inputNumber - 1] = $.grep(ClickAnswer[inputNumber - 1], function(value) {
                                    return value != inputValue;
                                });
                    $(inputField).val(Text);
                    ClickAnswer[inputNumber - 1].push(Text);
                }
    }
        });

  $('.button').click(function () {

    if ($('.button').hasClass('playAgain')) {
      window.location.href = window.location.href;
    }
    else {
      var Correct_Answers_Count = 0;

      var adjetcive_input=$('.adjetcive-input-span input').filter(function () {
          return !! $(this).val();
      }).length;
        var describes_input=$('.describes-input-span input').filter(function () {
          return !! $(this).val();
      }).length;

      if (adjetcive_input >= 4 && describes_input >= 4) {
        $(inputs).parent().removeClass('bd');
        var Correct_Answers = ["narrow", "street", "skinny", ['girl', 'Lisa'], "delicious", "cake", "handsome", "actor", "foolish", "boy", "hungry", "cat", "broken", "chair", "sharp", "knife"];
        $(inputs).each(function (i) {
          if ($.trim($(this).val().toString()) !== '') {
            if (Correct_Answers[i].indexOf($.trim($(this).val().toString())) < 0) {
              $(this).css({ 'color': '#ed1a1a', 'border-color': '#000' });
              $('#ans-div' + i).css('visibility', 'visible');
            }
            else {
              Correct_Answers_Count++;
            }
          }
          else {
            $('#ans-div' + i).css('visibility', 'visible');
          }

        });
        $('input,.options span').css('pointer-events', 'none');
        var percentage = (Correct_Answers_Count * 100) / 16;
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
      
        if(Correct_Answers_Count != 16)
        {
          $('.hide-show').css('visibility','visible');
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
          $('.result .TextBox h1').text('Please solve at least 4 blanks of Adjectives and 4 blanks of Nouns before submitting');
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
