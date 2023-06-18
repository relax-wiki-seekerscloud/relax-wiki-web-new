import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorizeGuardService} from "./modules/share/services/auth/authorize-guard.service";

const routes: Routes = [
  {path:'',redirectTo:'console',pathMatch:'full'},
  { path: 'console', loadChildren: () => import('./modules/console/console.module').then(m => m.ConsoleModule), canActivate:[AuthorizeGuardService] },
  { path: 'share', loadChildren: () => import('./modules/share/share.module').then(m => m.ShareModule),canActivate:[AuthorizeGuardService] },
  { path: 'security', loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule) },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
