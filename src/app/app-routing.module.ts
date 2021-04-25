import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionComponent } from './features/definition/definition.component';
import { SummaryComponent } from './features/summary/summary.component';

const routes: Routes = [
{path:"definition", component:DefinitionComponent},
{path:"definition/:id", component:DefinitionComponent},
{path:"summary", component:SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
