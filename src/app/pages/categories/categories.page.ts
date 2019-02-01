import { Component, OnInit } from '@angular/core';
import { Category, CategoryTypeGroup } from 'src/app/models/category';
import { CategoriesService } from './categories.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-categories',
  templateUrl: 'categories.page.html',
  styleUrls: ['categories.page.scss']
})
export class CategoriesPage implements OnInit {

  constructor(private categorySvc: CategoriesService) {
  }
  categoryGroups: CategoryTypeGroup[];

  ngOnInit(): void {
    this.categorySvc.GetCategories().subscribe(data => {
      console.log(data);
      this.categoryGroups = _.chain(data).groupBy('type').map(function(collection, name) {
        return {
          name: name,
          items: collection
        };
      }).value();
    });
  }

  categorySelected(category: Category) {
    console.log(category);
  }
}
