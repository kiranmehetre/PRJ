import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-compound-words',
  templateUrl: './compound-words.component.html',
  styleUrls: ['./compound-words.component.scss']
})
export class CompoundWordsComponent implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService) {
  }


  ngOnInit() {
 this.commonWorksheet.reuseRoute();



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

    let inputField;
    let clickAnswer = [];
    let inputValue = "";
    let inputs = $('.fish');
    let Text = '';
    let HelpBox = [];
    let HelpboxClick;
    $(inputs).on('click', function () {
        inputField = $(this);
        inputValue = $(inputField).find('img').attr("data-text");        
        if(inputValue !== undefined)
        {
          clickAnswer = $.grep(clickAnswer, function (value) {
            return value != inputValue;
          });
          $(".helpans").filter(function () {
              return $(this).attr('data-help') === inputValue;
          }).removeClass('click bd');        
          $(inputField).closest('.fish-container').find('.hoock-click').removeClass('visible set-answer');
          $(inputField).closest('.fish-container').find('.hoock-click span').text('');
          $(inputField).find('img').removeAttr('data-text');        
          $('.helpans').find('div').removeClass("bd");
          HelpboxClick = undefined;
        }
        else
        {
            if (HelpboxClick !== undefined) {
                Text = $(HelpboxClick).attr('data-help');
                HelpBox.push(Text);
                if (HelpBox.indexOf(inputValue) > -1 && clickAnswer.indexOf(Text) < 0) {
                  $(".helpans").filter(function () {
                      return $(this).attr('data-help') === inputValue;
                  }).removeClass('click');
                }
                $(HelpboxClick).addClass('click');
                if (clickAnswer.indexOf(Text) > -1) {
                }
                else {
                    clickAnswer = $.grep(clickAnswer, function (value) {
                        return value != inputValue;
                    });
                    $(inputField).closest('.fish-container').find('.hoock-click').addClass('visible set-answer');
                    $(inputField).closest('.fish-container').find('.hoock-click span').text(Text);
                    $(inputField).find('img').attr('data-text',Text);
                    clickAnswer.push(Text);
                }
            }
        }
        var clickLen=$('.helpbox-container').find('.click').length;
        //console.log(clickLen)
        if(clickLen==10)
        {
          $('.helpbox-container').addClass('hide');
          $('.Question-container').addClass('margin-top-2');
        }
        else{
          $('.helpbox-container').removeClass('hide');
          $('.Question-container').removeClass('margin-top-2');
        }
    });


  $('.helpans').on('click', function (event) {
          HelpboxClick=$(this);
            $('.helpans').find('div').removeClass("bd");
            $(this).find('div').addClass('bd');          
  });

  $('.button').click(function () {
        if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
        else {
          var Correct_Answers_Count = 0;
          if($('.set-answer').length >= 5) {
            $(inputs).find('img').removeClass("bd");
            var Correct_Answers=["flower","water","bath","stop","tea","jelly","play","thumb","your","grand"];
            $('.hoock-click').each(function(i){
              if($.trim($(this).find('span').text()) !== Correct_Answers[i]){
                $(this).css({'color':'#ed1a1a'});
              }
              else{
                Correct_Answers_Count++;
                $(this).closest('.fish-container').parent().find('.organswer').addClass('correct');
                $(this).closest('.fish-container').addClass('right');
              }
            });
            $('.hoock-click').closest('.fish-container').parent().find('.organswer').not('.correct').addClass('correct_white');
            var percentage=	(Correct_Answers_Count * 100) / 10;
            var DisplayResult="";    
            setTimeout(function(){
              $('.result').css('display','flex');
              $('.result .TextBox').hide();
              $('.fabulous').removeClass('hide');
              $('.result .imgBox').show();
              $('.result').delay(2000).fadeOut('slow');
              $('.close').hide();
                setTimeout(function()
                {
                  $('.right').addClass('slide-out');
                  setTimeout(function()
                  {
                      $('.correct').fadeIn(2000);
                      $('.correct_white').fadeIn(2000);
                  },500);
                
                },2100);
            },500);

            setTimeout(function(){
              $('.button').addClass('playAgain');
              $('.button.playAgain').text('solve again');
            },500);
            $('.fish-container').css('pointer-events', 'none');
          }
          else {
              setTimeout(function () {
                $('.result').css('display', 'flex');
                $('.result .TextBox h1').text('Please join at least 5 hooks and fishes before submitting');
              }, 500);
          }
        }

    });

    $('.result,.close').click(function () {
        $('.result').fadeOut();
        $('.close').show();
    });
    function setImages(){
      var t=new Date().getTime();
      $('.imgBox img').attr("src", 'assets/images/fabulous.gif' + '?' + t);
    }


  }

}
