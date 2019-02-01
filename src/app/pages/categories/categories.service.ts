import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categoriesUrl = 'assets/categories.json';

  constructor(private http: HttpClient) { }

  GetCategories() {
    return this.getJson();
  }

  getJson(): Observable<any> {
    return this.http.get(this.categoriesUrl);
  }

}
