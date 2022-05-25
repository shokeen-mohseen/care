import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currenturl = 'home';
  constructor(private router: Router) {
    router.events.subscribe(((res:any)=>{
      console.log("Imran"+res.url)
      this.currenturl = res.url;
    }))

   
  }
}
