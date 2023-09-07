import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface triviaResponse {
  response_code: number,
  results: Question[]
}

export interface Question {

  category: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

@Injectable({
  providedIn: 'root'
})
export class OpenTriviaService {
  response: triviaResponse = {
    response_code: 0,
    results: []
  };
  
  constructor(private http: HttpClient) { 
    this.generateQuestions();
  }

  generateQuestions(){  
    let amount = '20';
    let difficulty = 'easy';
    let type = 'multiple'; //multiple choice vs. true/false

    let url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`;

    this.http.get(url).subscribe((res: any) => {
      console.log("Generated questions.");
      this.response = res;
    });
  }
}
