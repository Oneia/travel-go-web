// Core modules and vendors packages
import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { MapComponent } from './components/map/map.component';
import { CategoryItemListComponent } from './components/category-item-list/category-item-list.component';
import { CategoryListComponent }     from './components/category-list/category-list.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MapComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'places',
    component: CategoryItemListComponent
  },
  {
    path: 'place/:id',
    component: CategoryItemComponent
  },
  {
    path: 'categories',
    component: CategoryListComponent
  },
  // {
  //   path: 'groups',
  //   component: GroupComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: '',
  //       component: GroupListComponent,
  //       canActivateChild: [AuthGuard],
  //       children: [
  //         {
  //           path: ':id',
  //           component: GroupDetailComponent,
  //           canDeactivate: [CanDeactivateGuard],
  //           resolve: {
  //             group: GroupDetailResolve
  //           }
  //         },
  //         {
  //           path: '',
  //           component: GroupHomeComponent
  //         }
  //       ]
  //     }
  //   ],
  //   data: {
  //     preload: true
  //   }
  // }
  // {
  //   path: 'crush',
  //   component: CrushComponent
  // },
  // {
  //   path: '**',
  //   component: NoContentComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTES
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AppRoutingModule {}
