import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-trivia';

  player1NameInput: string = "Bob";
  player2NameInput: string = "Tony";

  showSettings = true;

  constructor(private router: Router) {


  }


  onKeyUp(){
    console.log("Player 1 = " + this.player1NameInput);
    console.log("Player 2 = " + this.player2NameInput);
  }

  startGame(){
    //hide the settings div
    this.showSettings = false;
    //navigate to /play
    this.router.navigateByUrl("/play");
  }
}
