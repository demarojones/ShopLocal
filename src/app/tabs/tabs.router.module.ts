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
            loadChildren: '../featured/featured.module#FeaturedPageModule'
          }
        ]
      },
      {
        path: 'favorites',
        children: [
          {
            path: '',
            loadChildren: '../favorites/favorites.module#FavoritesPageModule'
          }
        ]
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: '../categories/categories.module#CategoriesPageModule'
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
