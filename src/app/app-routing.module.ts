import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FilmPageComponent } from './film-page/film-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'film',
        children: [
            {
                path: ':id',
                component: FilmPageComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}