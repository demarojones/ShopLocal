import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'featured',
        children: [
          {
            path: '',
            loadChildren: '../pages/featured/featured.module#FeaturedPageModule'
          }
        ]
      },
      {
        path: 'favorites',
        children: [
          {
            path: '',
            loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule'
          }
        ]
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: '../pages/categories/categories.module#CategoriesPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/featured',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/featured',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
