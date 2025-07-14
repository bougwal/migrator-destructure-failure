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

  //This should be migrated to inject properly, but it fails! The  ElementRef will get deleted. Imagine +700 files impacted
  constructor({nativeElement}: ElementRef){
    console.log(nativeElement)
  }
}
