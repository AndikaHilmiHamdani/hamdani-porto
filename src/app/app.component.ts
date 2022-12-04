import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hamdani-porto';

  options: AnimationOptions = {
    path: '../assets/lottie/energy.json', // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  
  ngOnInit(): void {
   
  }
}
