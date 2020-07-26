import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';
@Component({
  selector: 'app-std02-adjectives-worksheet8',
  templateUrl: './std02-adjectives-worksheet8.component.html',
  styleUrls: ['./std02-adjectives-worksheet8.component.scss']
})
export class Std02AdjectivesWorksheet8Component implements OnInit {

  constructor(private commonWorksheet: CommonWorksheetService){}

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
    const globalThis = this;
    $('.loadingDiv').hide();
    window.onload = function () { 
    
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
  
    var inputField;
          var inputValue;
          var ClickAnswer=[];
    var HelpBox=[];
          var Text="";
          var Correct_Answers_Count=0;
          var inputs=$('input');
          $(inputs).attr('readonly','readonly');
    $(inputs).css('cursor','pointer');
  
          $(inputs).click(function(){
              inputField=$(this);
              $(inputs).removeClass('bd');
              $(this).addClass('bd');
              inputValue=$(inputField).val();
              ClickAnswer = $.grep(ClickAnswer, function(value) {
                        return value != inputValue;
                      });
              $(".feather").filter(function() {
                return $(this).text().trim() === inputValue;
              }).removeClass('click');
              $(this).val("");
          });
    $('.feather').click(function(){
              if(inputField !== undefined){
                  inputValue=$(inputField).val();
        Text=$(this).text().trim();
        HelpBox.push(Text);
        if(HelpBox.indexOf(inputValue) > -1 && ClickAnswer.indexOf(Text) < 0){
          $(".feather").filter(function() {
            return $(this).text().trim() === inputValue;
          }).removeClass('click');
        }
        $(this).addClass('click');
                  if(ClickAnswer.indexOf(Text) > -1){
  
                  }
                  else{
                      ClickAnswer = $.grep(ClickAnswer, function(value) {
                                      return value != inputValue;
                                  });
                      $(inputField).val(Text);
                      ClickAnswer.push(Text);
                  }
              }
          });
    
    $('.button').click(function(){
      if ($('.button').hasClass('playAgain')) {
          globalThis.commonWorksheet.reloadComponent();
        }
      else{
        var Correct_Answers_Count=0;
        var inputCount=$('input[type="text"]').filter(function () {
                  return !!$(this).val();
                }).length;
        if(inputCount >= 8){
          $(inputs).removeClass('bd');
          var Correct_Answers=[["rusty",["old","new"]],["modern","expensive"],["favourite","sugary"],["light","white"],["big",["old","new"]],["colourful","dirty"],["cold","icy"],["hot","electric"]];
                  
                      $('.Question_Row').each(function(i){
                          var inputRowValues=[];
                          var Wrong_Answers=[];
                          var inputField_Array=[];
                          var inputRow=$(this).find('input');
                          var isNotDone=true;
                          var WrongAnswer="";
                          if(i == 0 || i == 4){
                              $(inputRow).each(function(j){
                                  if(($(this).val() == "old" || $(this).val() == "new") && isNotDone){
                                      if(Correct_Answers[i][1].indexOf($(this).val().toString()) < 0){
                                          inputField_Array.push($(this));
                                      }
                                      else
                                      {
                                          inputRowValues.push($(this).val());
                                          Correct_Answers_Count++;
                                      }
                                      isNotDone=false;
                                  }
                                  else{
                                      if(Correct_Answers[i].indexOf($(this).val().toString()) < 0){
                                          inputField_Array.push($(this));
                                      }
                                      else
                                      {
                                          inputRowValues.push($(this).val());
                                          Correct_Answers_Count++;
                                      }
                                  }
                              
                              });
                             
  
                              Correct_Answers[i].filter(function(el) {
                                if ($.inArray(el, inputRowValues) == -1) Wrong_Answers.push(el);
                               });		
                              //console.log(Wrong_Answers);
                              for(var i=0; i< Wrong_Answers.length;i++){
                                  $(inputField_Array[i]).css({'color':'#ed1a1a','border-color':'#000'});
                                  if(Wrong_Answers[i] == "old,new"){
                                      WrongAnswer="old / new"
                                  }
                                  else{
                                      WrongAnswer=Wrong_Answers[i];
                                  }
                                  $(inputField_Array[i]).next().find('span').text(WrongAnswer);
                                  $(inputField_Array[i]).next().css('display','inline-block');
                              }
                          }
                          else{
                              $(inputRow).each(function(j){
                                  if(Correct_Answers[i].indexOf($(this).val().toString()) < 0){
                                      inputField_Array.push($(this));
                                  }
                                  else
                                  {
                                      inputRowValues.push($(this).val());
                                      Correct_Answers_Count++;
                                  }
                              });
  
                              Correct_Answers[i].filter(function(el) {
                                if ($.inArray(el, inputRowValues) == -1) Wrong_Answers.push(el);
                               });	
  
                              for(var i=0; i< Wrong_Answers.length;i++){
                                  $(inputField_Array[i]).css({'color':'#ed1a1a','border-color':'#000'});
                                  $(inputField_Array[i]).next().find('span').text(Wrong_Answers[i]);
                                  $(inputField_Array[i]).next().css('display','inline-block');
                              }
                          }
                      });
          var percentage=	(Correct_Answers_Count * 100) / 16;
          var DisplayResult="";
          if(percentage > 80){
            DisplayResult='.outstanding';
          }
          else if(percentage > 60){
            DisplayResult='.brilliant';
          }
          else if(percentage > 50){
            DisplayResult='.good-work';
          }
          else if(percentage <= 50){
            DisplayResult='.keep-practicing';
          }
          setTimeout(function(){
            $('.result').css('display','flex');
            $('.result .TextBox').hide();
            $(DisplayResult).removeClass('hide');
            $('.result .imgBox').show();
            $('.result').delay(2000).fadeOut('slow');
            $('.close').hide();
          },500);
          setTimeout(function(){
            $('.button').addClass('playAgain');
            $('.button.playAgain').text('solve again');
          },500);
          $('input,.feather').css('pointer-events','none');
        }
        else{
          setTimeout(function(){
            $('.result').css('display','flex');
            $('.result .TextBox h1').text('Please solve at least 8 blanks before submitting');
          },500);
        }
      }
      $('.result,.close').click(function(){
        $('.result').fadeOut();
        $('.close').show();
      });
    });
    
      
  function setImages(){
  var AllImages = ['assets/images/keep-practicing.gif', 'assets/images/outstanding.gif', 'assets/images/brilliant.gif',
          'assets/images/good-work.gif', 'assets/images/fabulous.gif'];
    $('.imgBox img').each(function(i){
              var t=new Date().getTime();
              $(this).attr("src", AllImages[i]+'?'+t);
    });
  }

  }

}
