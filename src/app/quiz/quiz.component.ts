import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../shared/services/quiz.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  standalone: false
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';
  category?: string;


  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.playerName = this.route.snapshot.paramMap.get('playerName') ?? '';
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category') ?? undefined;
      // Appelle ton service pour charger les questions de this.category
      // ex: this.quizService.loadByCategory(this.category)
    });
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
