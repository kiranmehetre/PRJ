import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-std02-compound-words-reference-list',
  templateUrl: './std02-compound-words-reference-list.component.html',
  styles:['@import "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css";'],
  styleUrls: ['./std02-compound-words-reference-list.component.scss']
})
export class Std02CompoundWordsReferenceListComponent implements OnInit {

  loadAPI: Promise<any>;
  constructor() {

    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });

  }
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
  }

}
