import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface TriviaResponse {
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
  constructor(private http: HttpClient) { 
  }

  generateQuestions(){  
    let amount = '20';
    let difficulty = 'easy';
    let type = 'multiple'; //multiple choice vs. true/false

    let url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`;

    const promise = new Promise<Question[]>((resolve, reject) => {
      this.http.get<TriviaResponse>(url).subscribe((res: any) => {
          console.log("Generated questions.");
          resolve(res.results);
        });
    });
    return promise;

  }
}
