import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { OpenTriviaService } from './open-trivia.service';

describe('OpenTriviaService', () => {
  let service: OpenTriviaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OpenTriviaService]
    });
    service = TestBed.inject(OpenTriviaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should return an array of Questions', 
  // inject(
  //   [HttpTestingController, OpenTriviaService],
  //   (httpMock: HttpTestingController, triviaService: OpenTriviaService) => {
  //     const mockResponse = '{"response_code":0,"results":[{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Which game did &quot;Sonic The Hedgehog&quot; make his first appearance in?","correct_answer":"Rad Mobile","incorrect_answers":["Sonic The Hedgehog","Super Mario 64","Mega Man"]},{"category":"History","type":"multiple","difficulty":"easy","question":"What was William Frederick Cody better known as?","correct_answer":"Buffalo Bill","incorrect_answers":["Billy the Kid","Wild Bill Hickok","Pawnee Bill"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Which of these is NOT a player class in Team Fortress 2?","correct_answer":"Healer","incorrect_answers":["Demoman","Pyro","Spy"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"What does IWHBYD stand for on the skull in the Halo series?","correct_answer":"I Would Have Been Your Daddy","incorrect_answers":["I Wanna Have Babies You Down","I Would Hate Being Your Driver","I Would Have Bought Your Dog"]},{"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"Who plays Alice in the Resident Evil movies?","correct_answer":"Milla Jovovich","incorrect_answers":["Madison Derpe","Milla Johnson","Kim Demp"]},{"category":"Entertainment: Television","type":"multiple","difficulty":"easy","question":"Who is the main character in the show &quot;Burn Notice&quot;?","correct_answer":"Michael Westen","incorrect_answers":["Sam Axe","Fiona Glenanne","Madeline Westen"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"easy","question":"According to the American rapper Nelly, what should you do when its hot in here?","correct_answer":"Take off all your clothes","incorrect_answers":["Take a cool shower","Drink some water","Go skinny dipping"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"What is the name of the main character in &quot;Life is Strange&quot;?","correct_answer":"Maxine Caulfield","incorrect_answers":["Victoria Chase","Stella Hill","Chloe Price"]},{"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"easy","question":"In &quot;The Melancholy of Haruhi Suzumiya&quot; series, the SOS Brigade club leader is unknowingly treated as a(n) __ by her peers.","correct_answer":"God","incorrect_answers":["Alien","Time Traveler","Esper"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"Which computer language would you associate Django framework with?","correct_answer":"Python","incorrect_answers":["C#","C++","Java"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which American-owned brewery led the country in sales by volume in 2015?","correct_answer":"D. G. Yuengling and Son, Inc","incorrect_answers":["Anheuser Busch","Boston Beer Company","Miller Coors"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In what year was the game &quot;FTL: Faster Than Light&quot; released?","correct_answer":"2012","incorrect_answers":["2014","2013","2011"]},{"category":"History","type":"multiple","difficulty":"easy","question":"How was Socrates executed?","correct_answer":"Poison","incorrect_answers":["Decapitation","Firing squad","Crucifixion "]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which restaurant&#039;s mascot is a clown?","correct_answer":"McDonald&#039;s","incorrect_answers":["Whataburger","Burger King","Sonic"]},{"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"In the 2012 film, &quot;The Lorax&quot;, who is the antagonist?","correct_answer":"Aloysius O&#039;Hare","incorrect_answers":["Ted Wiggins","The Once-Ler","Grammy Norma"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What zodiac sign is represented by a pair of scales?","correct_answer":"Libra","incorrect_answers":["Aries","Capricorn","Sagittarius"]},{"category":"Science & Nature","type":"multiple","difficulty":"easy","question":"What is the official name of the star located closest to the North Celestial Pole?","correct_answer":"Polaris","incorrect_answers":["Eridanus","Gamma Cephei","Iota Cephei"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is the closest planet to our solar system&#039;s sun?","correct_answer":"Mercury","incorrect_answers":["Mars","Jupiter","Earth"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In the video game franchise &quot;Halo&quot;, what is the UNSC&#039;s main opposing faction called?","correct_answer":"The Covenant","incorrect_answers":["The Reckoning","The Peoples","The Slaughterers"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In the PAYDAY series, who betrayed the PAYDAY gang that got Hoxton arrested?","correct_answer":"Hector","incorrect_answers":["Vlad","The Dentist","The Elephant"]}]}'
    
  //   }
  // ))
});
