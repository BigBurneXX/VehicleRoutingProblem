import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullComponent } from './layouts/full/full.component';
import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { RouteMapComponent } from "./component/route-map/route-map.component";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
    declarations: [
        AppComponent,
        SpinnerComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        NgbModule,
        RouterModule.forRoot(AppRoutes, {useHash: false}),
        FullComponent,
        NavigationComponent,
        SidebarComponent,
        RouteMapComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        provideHttpClient()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
