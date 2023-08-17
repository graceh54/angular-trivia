import { Component } from '@angular/core';
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

  constructor(service: OpenTriviaService) {
    //this.questions = createQuestions(service);
    
    this.questions = service.generateQuestions();

    console.log(this.questions);
    
    let p1name = prompt('Player 1 name?') ?? "Bob";
    let p2name = prompt('Player 2 name?') ?? "Tony";
    
    let player1 = new Player(p1name);
    let player2 = new Player(p2name);

    this.currentPlayer = player1;
    this.currentQuestion = this.questions[0];

    // let questions = new Question[];
    
    // = questionsRaw.results.forEach
    //playGame(questions, [player1,player2]);
  }
  buttonPress(){
    console.log("Button pressed");
  }

  playGame(questions: Question[], players: Player[] ) {
  let playing = true;
  let turnIndex = 0;
  let numPlayers = players.length;
  
  while (playing) {
      let winner = (players.find(x => x.stars == 5));
      if (winner) {
          console.log("Congratulations " + winner.name);
          playing = false;
          break;
      }
  
      this.currentPlayer = players[turnIndex % numPlayers]
      console.log(this.currentPlayer.name + " turn...");
  
      this.currentPlayer.stars++;
      turnIndex++;
  
      //askQuestion(questions.results[turnIndex]);
  
  }
}

  }

// function createQuestions(service: OpenTriviaService): Question[] {
//   let outputQuestions: Question[] = [];
//   let rawQuestions = service.generateQuestions();
//   rawQuestions[0].results.forEach(function(ques: Object){
//     outputQuestions.push(ques as Question)
//   });
//   return outputQuestions;
// }

