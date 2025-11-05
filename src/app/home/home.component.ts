import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent implements OnInit {
  playerName = '';
  isPlayerNameConfirmed = false;

  categories = ['Category_1', 'Category_2', 'Category_3', 'Category_4'];

  constructor(private router: Router, private authService: AuthService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.authService.isUserConnected();
    this.playerName = this.authService.user?.username || '';
  }

  get isPlayerNameFill() {
    return this.playerName.length < 1;
  }

  navigateToQuiz() {
    this.router.navigate(['/quiz', this.playerName]);
  }

  navigateToCategory(category: string) {
    this.router.navigate(['/quiz', this.playerName], { queryParams: { category } });
  }

  confirmPseudo() {
    this.isPlayerNameConfirmed = true;
  }
}
