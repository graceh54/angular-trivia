import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { OpenTriviaService, Question } from '../open-trivia.service';


class Player {
    name: string;
    stars: number;

    constructor(name: string){
        this.name = name;
        this.stars = 0;
    }
}


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent {
  questions: Question[];

  currentPlayer: Player;
  currentQuestion: Question;

  constructor(service: OpenTriviaService, appComponent: AppComponent) {
    this.questions = service.response.results;
    console.log(this.questions);
    
    let player1 = new Player(appComponent.player1NameInput);
    let player2 = new Player(appComponent.player2NameInput);

    this.currentPlayer = player1;
    this.currentQuestion = this.questions[0];

    // this.playGame(this.questions, [player1,player2]);
  }
  buttonPress(){
    console.log("Button pressed");
  }


  playGame(questions: Question[], players: Player[] ) {
  let playing = true;
  let turnIndex = 0;
  let numPlayers = players.length;
  let selectedAnswer = "N";
  
  while (playing) {
      let winner = (players.find(x => x.stars == 5));
      if (winner) {
          console.log("Congratulations " + winner.name);
          playing = false;
          break;
      }
  
      this.currentPlayer = players[turnIndex % numPlayers]
      console.log(this.currentPlayer.name + " turn...");

      this.currentQuestion = questions[turnIndex];
  
      this.currentPlayer.stars++;
      turnIndex++;
  }
}

}

