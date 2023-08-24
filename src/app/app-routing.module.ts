import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { JavaComponent } from './java/java.component';
import { HtmlComponent } from './html/html.component';

const routes: Routes = [
 
  {
    path:'',
    component:ContentComponent
  },
  {
    path:'java',
    component:JavaComponent
  },
  {
    path:'html',
    component:HtmlComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
