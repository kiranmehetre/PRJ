import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { AppRequestService} from '../../shared/services/app-request.service';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loadAPI: Promise<any>;
  loginForm: FormGroup;
  submitted = false;
  loginError = false;

  constructor(private fb: FormBuilder,private renderer: Renderer2, public apiRequest : AppRequestService, public router: Router) {
    // this.renderer.setStyle(document.body, 'background-color','#68bde3');
    // this.renderer.setStyle(document.body, 'margin-top','30px');

      this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
      });
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email_id: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
  });

  }

  public loadScript() {        
    let isFound = false;
    
    if (!isFound) {
        let dynamicStyle = ["https://fonts.googleapis.com/css?family=Raleway:500i|Roboto:300,400,700|Roboto+Mono","https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "https://unpkg.com/gijgo@1.9.11/css/gijgo.min.css", "assets/frontend_assets/src/account.css", "https://use.fontawesome.com/releases/v5.6.3/css/all.css"];

        let dynamicScript = ["assets/frontend_assets/js/jquery-3.1.1.min.js", "http://code.jquery.com/jquery-compat-git.js", "http://netdna.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js", "https://unpkg.com/gijgo@1.9.11/js/gijgo.min.js", "assets/frontend_assets/js/main.js"];

        
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
    console.log(this.loginForm.value);     
    this.apiRequest.postRequest('api/student/login', { 'email_id' : this.loginForm.value.email_id, 'password' : this.loginForm.value.password}).then( (res) => {
       
      if(res['status'] == "OK"){
        this.apiRequest.config.headers.Authorization = "Bearer " + res['body'][0]['token'];
        this.apiRequest.token = res['body'][0]['token'];
        var photo_url = res['body'][0]['photo_url'];
        console.log(photo_url.indexOf("apinone"));
        if(photo_url.indexOf("apinone") > -1){
          photo_url = "assets/frontend_assets/img/user_icon.png";
        }
        res['body'][0]['photo_url'] = photo_url;
        console.log("Edit photo_url :- " + res['body'][0]['photo_url']);
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('token', res['body'][0]['token']);
        localStorage.setItem('user', JSON.stringify(res['body']));
        localStorage.setItem('gradeSelection','0');


        this.router.navigate(['/home']);
       
     }else{
      this.loginError = true;
      //this.toastr.error(res['error_msg']);
     }

    })
      .catch( (err)=> {

       // this.loading.display(false);
        //this.toastr.error(err['error']['message']);
      });
  }

}
