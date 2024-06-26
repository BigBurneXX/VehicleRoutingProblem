import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: 'route-map',
        loadChildren: () => import('./component/route-map/route-map.module').then(m => m.RouteMapModule)
      },
      {
        path: 'vehicle-deployment-plannings/all',
        loadChildren: () => import('./vehicle-deployment-plannings/vehicle-deployment-plannings-all/vehicle-deployment-plannings-all.module')
            .then(m => m.VehicleDeploymentPlanningsAllModule)
      },
      {
        path: 'vehicle-deployment-plannings/details/:id',
        loadChildren: () => import('./vehicle-deployment-plannings/vehicle-deployment-plannings-details/vehicle-deployment-plannings-details.module')
            .then(m => m.VehicleDeploymentPlanningsDetailsModule)
      },
      {
        path: 'vehicle-deployment-plannings/new',
        loadChildren: () => import('./vehicle-deployment-plannings/vehicle-deployment-plannings-new/vehicle-deployment-plannings-new.module')
            .then(m => m.VehicleDeploymentPlanningsNewModule)
      },
      {
        path: 'vehicle-deployment-plans/all',
        loadChildren: () => import('./vehicle-deployment-plans/vehicle-deployment-plans-all/vehicle-deployment-plans-all.module')
            .then(m => m.VehicleDeploymentPlansAllModule)
      },
      {
        path: 'vehicle-deployment-plans/details/:id',
        loadChildren: () => import('./vehicle-deployment-plans/vehicle-deployment-plans-details/vehicle-deployment-plans-details.module')
            .then(m => m.VehicleDeploymentPlansDetailsModule)
      },
      {
        path: 'vehicle-deployment-plans/planning/:id',
        loadChildren: () => import('./vehicle-deployment-plans/vehicle-deployment-plans-planning/vehicle-deployment-plans-planning.module')
            .then(m => m.VehicleDeploymentPlansPlanningModule)
      },
      {
        path: 'trip-sheets/all',
        loadChildren: () => import('./trip-sheets/trip-sheets-all/trip-sheets-all.module').then(m => m.TripSheetsAllModule)
      },
      {
        path: 'trip-sheets/plan/:id',
        loadChildren: () => import('./trip-sheets/trip-sheets-by-plan/trip-sheets-by-plan.module').then(m => m.TripSheetsByPlanModule)
      },
      {
        path: 'trip-sheets/details/:id',
        loadChildren: () => import('./trip-sheets/trip-sheets-details/trip-sheets-details.module').then(m => m.TripSheetsDetailsModule)
      },
      {
        path: 'trip-sheets/new',
        loadChildren: () => import('./trip-sheets/trip-sheets-new/trip-sheet-new.module').then(m => m.TripSheetNewModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
