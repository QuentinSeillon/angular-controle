import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  categories: any[] = [];

  constructor(private http: HttpClient) {}

  getCategories(): void {
    this.http.get<any[]>('http://localhost:3000/category')
      .subscribe((cats) => {
        this.categories = cats;                // 👈 on met à jour l’état
        console.log('Categories:', this.categories); // 👈 log
      }, (err) => {
        console.error('Erreur categories:', err);
      });
  }
}
