import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';
import {ActivatedRoute, Router} from '@angular/router';
import { AppRequestService} from '../../shared/services/app-request.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.scss']
})
export class UpdateDetailsComponent implements OnInit {
  loadAPI: Promise<any>;
  profile_picture_path:any;
  user_details:any;
  updateForm: FormGroup;
  displayMessage:any;

  constructor(private fb: FormBuilder, private renderer: Renderer2,  public apiRequest : AppRequestService, private route: ActivatedRoute, private router: Router) { 
    this.displayMessage = false;
    this.renderer.setStyle(document.body, 'background', 'url("assets/frontend_assets/img/topic-body-background.jpg")');

  }

  ngOnInit() {

    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
      });
      
    //   $('.dropdown_toggle').click(function () {
    //     $(this).siblings('.dropdown').slideToggle('.dropdown');
    //     $(this).find('img.arrow').toggleClass('up');
    //     $('.standard_dropdown').slideUp('.dropdown');
    //     $('.standard_dropdown_toggle img.arrow').removeClass('up');
    // });
    // $('.standard_dropdown_toggle').click(function () {
    //     $(this).siblings('.standard_dropdown').slideToggle('.dropdown');
    //     $(this).find('img.arrow').toggleClass('up');
    //     $('.dropdown').slideUp('.dropdown');
    //     $('.dropdown_toggle img.arrow').removeClass('up');
    // });

      let profile_pic = JSON.parse(localStorage.getItem('user'));
      this.profile_picture_path = profile_pic[0].photo_url;

      this.updateForm = this.fb.group({
        first_name: ['', Validators.compose([Validators.required])],
        last_name: ['', Validators.required],       
        country: ['', Validators.required],
        city: ['', Validators.required],
        child_name: ['', Validators.required],
        birth_day: ['', Validators.required],
        class: ['', Validators.required],
        gender: ['', Validators.required]        
    });

      $(document).ready(function(){
        $('.dropdown_toggle').click(function(){
           $(".dropdown").slideToggle("display-none");
           $(this).find('img.arrow').toggleClass('up');
        });
        $('.toggle').click(function(){
           $(".display-none").slideToggle();
        });
      })

    this.apiRequest.getRequest('api/student/details/' + profile_pic[0].user_name).then( (res) => {            
      if(res['status'] == 'OK'){           
          this.user_details = res['body'][0];
          console.log(this.user_details.first_name);           
      }else {
        //  this.toastr.error(res['error']);
      }
  })
      .catch( (err) => {
          // this.loading.display(false);
          // this.toastr.error(err);
  });    

  }


  public loadScript() {        
    let isFound = false;
    
    if (!isFound) {
        let dynamicStyle = ["assets/frontend_assets/src/bootstrap.min.css", "assets/frontend_assets/src/jquery.flipster.min.css", "https://unpkg.com/gijgo@1.9.11/css/gijgo.min.css", "assets/frontend_assets/src/external.css"];

        // let dynamicScript = ["assets/frontend_assets/js/jquery-3.1.1.min.js", "https://unpkg.com/gijgo@1.9.11/js/gijgo.min.js", "assets/frontend_assets/js/jquery.flipster.min.js", "assets/frontend_assets/js/external.js"];

        let dynamicScript = ["assets/frontend_assets/js/jquery-3.1.1.min.js"];

        
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

  onSubmit(){    
   
    this.updateForm.value.user_name =  this.user_details.user_name;
    this.updateForm.value.first_name =  this.updateForm.value.first_name ? this.updateForm.value.first_name : this.user_details.first_name;
    this.updateForm.value.last_name =  this.updateForm.value.last_name ? this.updateForm.value.last_name : this.user_details.last_name;
    this.updateForm.value.country =  this.updateForm.value.country ? this.updateForm.value.country : this.user_details.country;
    this.updateForm.value.city =  this.updateForm.value.city ? this.updateForm.value.city : this.user_details.city;
    this.updateForm.value.child_name =  this.updateForm.value.child_name ? this.updateForm.value.child_name : this.user_details.child_name;
    this.updateForm.value.birth_day =  this.updateForm.value.birth_day ? this.updateForm.value.birth_day : this.user_details.birth_day;
    // this.updateForm.value.class =  this.user_details.class;
    this.updateForm.value.gender =  this.updateForm.value.gender ? this.updateForm.value.gender : this.user_details.gender;
   
    console.log(this.updateForm.value);

      
    
    this.apiRequest.putRequest('api/student/details/update', this.updateForm.value).then( (res) => {
      
     if(res['status'] == "OK"){

        this.displayMessage = true;
       //this.router.navigate(['/']);
      
    }else{
   
    }

   })
     .catch( (err)=> {

 
     });
  
  }

}
