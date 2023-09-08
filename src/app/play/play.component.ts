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
  questions: Question[] = [];
  players: Player[];
  currentPlayer: Player;
  currentQuestion: Question = {
    category: '',
    difficulty: '',
    question: '',
    correct_answer: '',
    incorrect_answers: []
  };
  turnIndex = 0;

  loadingQuestions = true;
  showQuestions = false;


  constructor(service: OpenTriviaService, appComponent: AppComponent) {
    service.generateQuestions().then((questions) => {
      console.log("Did the questions in the play constructor");
      this.questions = questions;
      this.currentQuestion = this.questions[0];
      this.showQuestions = true;
      this.loadingQuestions = false;
    });
    
    let player1 = new Player(appComponent.player1NameInput);
    let player2 = new Player(appComponent.player2NameInput);

    this.players = [player1, player2];
    this.currentPlayer = player1;
  }

  correctAnswer(){
    this.currentPlayer.stars++;
    this.turnIndex++;
    this.playRound();
  }

  incorrectAnswer(){
    this.turnIndex++;
    this.playRound();
  }

  playRound(){
    let winner = (this.players.find(x => x.stars == 5));
    if (winner) {
        console.log("Congratulations " + winner.name);
    }
    this.currentPlayer = this.players[this.turnIndex % 2];
    console.log(this.currentPlayer.name + " turn...");

    this.currentQuestion = this.questions[this.turnIndex];
  }
}

