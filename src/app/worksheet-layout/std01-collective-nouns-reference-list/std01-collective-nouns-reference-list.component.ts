import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
 import { CommonWorksheetService } from '../common-worksheet.service';

@Component({
  selector: 'app-std01-collective-nouns-reference-list',
  templateUrl: './std01-collective-nouns-reference-list.component.html',
  styles:['@import "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css";'],
  styleUrls: ['./std01-collective-nouns-reference-list.component.scss']
})
export class Std01CollectiveNounsReferenceListComponent implements OnInit {

  loadAPI: Promise<any>;constructor(private commonWorksheet: CommonWorksheetService){

    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
  });}
  public loadScript() {
    var dynamicScripts = ["https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js", "https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.4/jquery.touchSwipe.min.js","assets/js/swipe.js","assets/js/common.js"];
    for (var i = 0; i < dynamicScripts.length; i++) {
      let node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  ngOnInit() {
 this.commonWorksheet.reuseRoute();
    $('.loadingDiv').hide();
  }

}
