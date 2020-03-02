import { Component, OnInit, Renderer2 } from '@angular/core';
import { AppRequestService} from '../../shared/services/app-request.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  loadAPI: Promise<any>;
  changepasswordForm: FormGroup;
  submitted = false;
  profile_picture_path:any;


  constructor(private fb: FormBuilder,private renderer: Renderer2, public apiRequest : AppRequestService, public router: Router) { 
    this.renderer.setStyle(document.body, 'background-color','#68bde3');
  }

  ngOnInit() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
      });

      let profile_pic = JSON.parse(localStorage.getItem('user'));
      this.profile_picture_path = profile_pic[0].photo_url;

      this.changepasswordForm = this.fb.group({       
        rst_password: ['', Validators.required]
    });  

  }

  public loadScript() {        
    let isFound = false;
    
    if (!isFound) {
        let dynamicStyle = ["https://fonts.googleapis.com/css?family=Raleway:500i|Roboto:300,400,700|Roboto+Mono",  "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "assets/frontend_assets/src/account.css"];

        let dynamicScript = ["http://code.jquery.com/jquery-3.1.1.min.js", "http://code.jquery.com/jquery-compat-git.js", "http://netdna.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"];

        
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
    

    let Authorization  = localStorage.getItem('token');
    let user_name = JSON.parse(localStorage.getItem('user'));
    let password= this.changepasswordForm.value.rst_password;
   
    let options = {'Authorization': Authorization, 'user_name': user_name[0].user_name, 'new_password': password }; 
   
    this.apiRequest.putRequest('api/student/reset/password', options).then( (res) => {
      console.log(res['status']);
      if(res['status'] == "OK"){
       // this.router.navigate(['/dashboard']);
     }else{
      //this.toastr.error(res['error_msg']);
     }

    })
      .catch( (err)=> {

       // this.loading.display(false);
        //this.toastr.error(err['error']['message']);
      });
  }


}
