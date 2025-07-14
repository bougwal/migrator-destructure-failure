import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'migrator-destructure-failure';

  //emptied the constructor without proper migration/transformation to use v14 inject()! 
  constructor(){
    console.log(nativeElement)
  }
}
