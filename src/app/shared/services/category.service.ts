import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: any[] = [];

  constructor(private http: HttpClient) { }

  getCategories() {
    this.http.get('http://localhost:3000/category').subscribe((categories: any) => {
      categories.push(categories);
    });
  }
}