import { Component, OnInit, Renderer2, NgZone } from '@angular/core';
import * as $ from 'jquery';  
import { Router } from '@angular/router';
import { AppRequestService } from '../../shared/services/app-request.service';
import { routerTransition } from '../../router.animations';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loadAPI: Promise<any>;
  signupForm: FormGroup;
  submitted = false;
  loginError = false;
  displayFirstSteps: any;
  displaySecondSteps: any;
  displayThirdSteps: any;
  displayFourthSteps: any;
  urls: any = [];
  newFileList: any = [];
  selectedFile: any = [];
  strGender: any;
  strClass: any;
  strBirthDate: any;
  filename: any;



  constructor(private fb: FormBuilder, private renderer: Renderer2, public apiRequest: AppRequestService, public router: Router, private _ngZone: NgZone) {
    this.renderer.setStyle(document.body, 'background-color', '#68bde3');
    this.renderer.setStyle(document.body, 'margin-top', '30px');
    this.displayFirstSteps = true;
    this.displaySecondSteps = false;
    this.displayThirdSteps = false;

    // this.displayFirstSteps = false;
    // this.displaySecondSteps = true;
    // this.displayThirdSteps = false;


    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      first_name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.required],
      user_name: ['', Validators.required],
      email_id: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      child_name: ['', Validators.required],
      birth_day: ['', Validators.required],
      //class: ['', Validators.required],
      gender: new FormControl()
    });
    $(document).on('click', '.class_Container .grade', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      }
      else {
        $(this).addClass('active');
      }
      //console.log("Grade Selected :- "+$('.grade.active').length);
      if ($('.grade.active').length == 0) {
        $('.class_Container').siblings('span.error-container').addClass('input-error');
        $('.class_Container').siblings('span.error-container').removeClass('hide');
      }
      else {
        $('.class_Container').siblings('span.error-container').removeClass('input-error');
        $('.class_Container').siblings('span.error-container').addClass('hide');
      }
      var strgrades = "";
      $('.grade.active').each(function () {
        var grade = $(this).attr('data-title');
        strgrades += grade + ",";
      });
      strgrades = strgrades.substr(0, strgrades.length - 1);
      if (strgrades == "") {
        strgrades = "0";
      }
      $('input[name=Class]').val(strgrades);
    });
    $(document).on('click', '#radioBtn a', function () {
      var sel = $(this).data('title');
      var tog = $(this).data('toggle');
      $('#' + tog).prop('value', sel);
      $('a[data-toggle="' + tog + '"]').not('[data-title="' + sel + '"]').removeClass('active').addClass('notActive');
      $('a[data-toggle="' + tog + '"][data-title="' + sel + '"]').removeClass('notActive').addClass('active');
    });
    $(document).ready(function () {
  
      var isValid = false;
      // Form Validation
        $(document).on('input','input[type=text],input[type=password],input[type=date]', function() {
          var input__span=$(this).siblings('span.error-container');
          var input=$(this);
          var is_name=input.val();
          if(is_name){
            isValid = true;
            input__span.removeClass("input-error").addClass("hide");
          }
          else{
            isValid = false;
            input__span.removeClass("hide").addClass("input-error");
          }
        });
        $(document).on('focusout','input[type=text],input[type=password],input[type=date]', function() {
          var input__span=$(this).siblings('span.error-container');
          var input=$(this);
          var is_name=input.val();
          if(is_name){
            isValid = true;
            input__span.removeClass("input-error").addClass("hide");
            if(input.hasClass('confirm_password') || input.hasClass('password')){
              var passText=$('.password').val();
              var confirmedpassText=$('.confirm_password').val();
              input__span = $('.confirm_password').siblings('span.error-container');
              if(passText != confirmedpassText){
                input__span.text("Passwords do not match!");
                input__span.removeClass("hide").addClass("input-error");
              }
              else{
                input__span.text("");
                input__span.removeClass("input-error").addClass("hide");
              }
            }
            else if(input.hasClass('email_id')){
              var emailText = "";
              emailText = is_name.toString();
              var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
              var res = emailReg.test(emailText);
              if (!res) {
                input__span.removeClass("hide").addClass("input-error");
                input__span.text("Please Enter Valid Email");
              }
              else{
                input__span.removeClass("input-error").addClass("hide");
              }
            }
          }
          else{
            if($(this).hasClass('confirm_password')){
                input__span.text("Enter Confirm Password");
            }
            else if(input.hasClass('email_id')){
              input__span.text("Please Enter Email");
            }
            isValid = false;
            input__span.removeClass("hide").addClass("input-error");
          }
        });
        // Email Validation
        $(document).on('input','input[type=email]', function() {
          var input__span=$(this).siblings('span.error-container');
          var input=$(this);
          var is_email=input.val();
          if(is_email){
            isValid = true;
            input__span.removeClass("input-error").addClass("hide");
          }
          else{
            isValid = false;
            input__span.removeClass("hide").addClass("input-error");
            input__span.text("Please Enter Email");
          }
        });
        
      $(document).on('click','#password + .toggle-password', function () {
        // $(this).toggleClass('glyphicon-eye-close').toggleClass('glyphicon-eye-open'); // toggle our classes for the eye icon
        
        var x = $("#password");
        if (x.attr("type") === "password") {
          $(this).removeClass('fa-eye');
          $(this).addClass('fa-eye-slash');
          x.attr("type","text");
        } else {
          x.attr("type","password");
          $(this).removeClass('fa-eye-slash');
          $(this).addClass('fa-eye');
        }
      });
        
    });
    

  }
  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

  public loadScript() {
    let isFound = false;

    if (!isFound) {
      // let dynamicStyle = ["https://fonts.googleapis.com/css?family=Raleway:500i|Roboto:300,400,700|Roboto+Mono", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "https://unpkg.com/gijgo@1.9.11/css/gijgo.min.css", "assets/frontend_assets/src/account.css", "https://use.fontawesome.com/releases/v5.6.3/css/all.css", "https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"];

      let dynamicStyle = ["https://fonts.googleapis.com/css?family=Raleway:500i|Roboto:300,400,700|Roboto+Mono", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "https://unpkg.com/gijgo@1.9.11/css/gijgo.min.css", "assets/frontend_assets/src/account.css", "https://use.fontawesome.com/releases/v5.6.3/css/all.css", "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker.css"];

      // let dynamicScript = ["assets/frontend_assets/js/jquery-3.1.1.min.js", "https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js", "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.js", "assets/frontend_assets/js/main.js"];
      let dynamicScript = ["assets/frontend_assets/js/main.js"];

      // let t = new Date().getTime();
      // var jQueryUIScript = "https://code.jquery.com/ui/1.12.1/jquery-ui.js?" + t;
      // var mainJScript = "assets/frontend_assets/js/main.js?" + t;
      // var jQueryScript = "assets/frontend_assets/js/jquery-3.1.1.min.js?" + t;
      // let dynamicScript = [jQueryScript, jQueryUIScript, mainJScript];


      for (var i = 0; i < dynamicStyle.length; i++) {
        let node = document.createElement('LINK');
        node.setAttribute('href', dynamicStyle[i]);
        node.setAttribute('type', 'text/css');
        node.setAttribute('rel', "stylesheet");
        document.head.appendChild(node);
      }

      for (var i = 0; i < dynamicScript.length; i++) {
        let node = document.createElement('script');

        node.setAttribute('src', dynamicScript[i]);
        node.setAttribute('type', 'text/javascript');
        node.setAttribute('async', 'false');
        node.setAttribute('charset', "utf-8");
        document.head.appendChild(node);
      }

    }
  }

  firststep() {
    this.displayFirstSteps = true;
    this.displaySecondSteps = false;
    this.displayThirdSteps = false;
  }

  secondstep() {
    var errorCount = 0;
    if($('#pascheck').hasClass('short')){
      errorCount++;
    }
    $('#step-1 input[type=text],#step-1 input[type=password]').each(function(){
      var input__span=$(this).siblings('span.error-container');
      var input=$(this);
      var is_name=input.val();
      if(is_name){
        input__span.removeClass("input-error").addClass("hide");
        if(input.hasClass('email_id')){
          var emailText = "";
          emailText = is_name.toString();
          var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          var res = emailReg.test(emailText);
          if (!res) {
            input__span.removeClass("hide").addClass("input-error");
            input__span.text("Please Enter Valid Email");
          }
          else{
            input__span.removeClass("input-error").addClass("hide");
          }
        }
        else if(input.hasClass('confirm_password') || input.hasClass('password')){
          var passText=$('.password').val();
          var confirmedpassText=$('.confirm_password').val();
          input__span = $('.confirm_password').siblings('span.error-container');
          if(passText != confirmedpassText){
            input__span.text("Passwords do not match!");
            input__span.removeClass("hide").addClass("input-error");
          }
          else{
            input__span.text("");
            input__span.removeClass("input-error").addClass("hide");
          }
        }
      }
      else{
        if(input.hasClass('email_id')){
          input__span.text("Please Enter Email");
        }
        else if($(this).hasClass('confirm_password')){
            input__span.text("Enter Confirm Password");
        }
        input__span.removeClass("hide").addClass("input-error");
      }
    });
    errorCount = errorCount + $('.Main_Container #step-1 .input-error').length;
    //console.log("Errors : " + errorCount);
    if(errorCount > 0){
      this.displayFirstSteps = true;
      this.displaySecondSteps = false;
      this.displayThirdSteps = false;
    }
    else{
        this.displayFirstSteps = false;
        this.displaySecondSteps = true;
        this.displayThirdSteps = false;
    }
  }

  thirdStep() {
    $('#step-2 input[type=text],#step-2 input[type=date]').each(function(){
      var input__span=$(this).siblings('span.error-container');
      var input=$(this);
      var is_name=input.val();
      if(is_name){
        input__span.removeClass("input-error").addClass("hide");
      }
      else{
        input__span.removeClass("hide").addClass("input-error");
      }
    });
    if($('.Main_Container .input-error').length > 0){
      this.displayFirstSteps = false;
      this.displaySecondSteps = true;
      this.displayThirdSteps = false;
    }
    else{
      this.displayFirstSteps = false;
      const fd = new FormData();
      //this.displaySecondSteps = false;
      // //console.log(this.signupForm.value);

      this.strGender = $('#gender').val();
      this.strClass = $('#Class').val();
      this.strBirthDate = $("#datepicker input").val();

      fd.append('first_name', this.signupForm.value.first_name);
      fd.append('last_name', this.signupForm.value.last_name);
      fd.append('user_name', this.signupForm.value.user_name);
      fd.append('email_id', this.signupForm.value.email_id);
      fd.append('password', this.signupForm.value.password);
      fd.append('confirm_password', this.signupForm.value.confirm_password);
      fd.append('country', this.signupForm.value.country);
      fd.append('city', this.signupForm.value.city);
      fd.append('child_name', this.signupForm.value.child_name);
      // fd.append('birth_day', this.signupForm.value.birth_day);
      fd.append('birth_day', this.strBirthDate);
      fd.append('class', this.strClass);
      fd.append('gender', this.strGender);
      // fd.append('class',  '1');
      // fd.append('gender',  'Male');
      if (this.selectedFile == "") {
        fd.append('photo', "");
      }
      else {
        fd.append('photo', this.selectedFile, this.selectedFile.name);
      }
      fd.append('ip', '192.168.2.2');


      //this.signupForm.value.append('photo', this.selectedFile, this.selectedFile.name);

      this.apiRequest.postFileRequest('api/student/signup', fd).then((res) => {
        //console.log(res['status']);
        if (res['status'] == "OK") {
          this.displaySecondSteps = false;
          this.displayThirdSteps = true;
          //this.displayThirdSteps = true;
          //this.router.navigate(['/']);

        } else {
          this.loginError = true;
          //this.toastr.error(res['error_msg']);
        }

      })
      .catch((err) => {

        // this.loading.display(false);
        //this.toastr.error(err['error']['message']);
      });
    }
}

  onFileSelected(event: any): void {

    // if (event.target.files && event.target.files[0]) {
    //     this.selectedFile= <File>event.target.files;    
    // } 

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.selectedFile = file;
      this.filename = file.name;
    }
    else {
      this.selectedFile = null;
      this.filename = "no file selected";
    }
    //console.log(this.selectedFile);
  }


  onSubmit() {
    // //console.log(this.loginForm.value);     
    // this.apiRequest.postRequest('api/student/login', { 'email_id' : this.loginForm.value.email_id, 'password' : this.loginForm.value.password}).then( (res) => {

    //   if(res['status'] == "OK"){
    //     this.apiRequest.config.headers.Authorization = "Bearer " + res['body'][0]['token'];
    //     this.apiRequest.token = res['body'][0]['token'];
    //     localStorage.setItem('isLoggedin', 'true');
    //     localStorage.setItem('token', res['body'][0]['token']);
    //     localStorage.setItem('user', JSON.stringify(res['body']));


    //     this.router.navigate(['/']);

    //  }else{
    //   this.loginError = true;
    //   //this.toastr.error(res['error_msg']);
    //  }

    // })
    //   .catch( (err)=> {

    //    // this.loading.display(false);
    //     //this.toastr.error(err['error']['message']);
    //   });
  }

}
