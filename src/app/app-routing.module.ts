import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import{ DisplayDataInTemplateComponent } from './components-templates/display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateUrlComponent } from './components-templates/display-data-in-template-url/display-data-in-template-url.component';
import{ TemplateSyntaxComponent } from './components-templates/template-syntax/template-syntax.component';
import{ CustomEventsComponent } from './components-templates/custom-events/custom-events.component';
import{ TwoWayBindingComponent } from './components-templates/two-way-binding/two-way-binding.component';
import{ DirectivesComponent } from './components-templates/directives/directives.component';
import{InteractionComponent } from './components-templates/interaction/interaction.component';
import{ LifecycleHooksComponent } from './components-templates/lifecycle-hooks/lifecycle-hooks.component';
import { FormControlComponent } from './forms-demo/reactive/form-control/form-control.component';


const routes: Routes = [
  {path: 'index', component: IndexComponent },
  {path: 'components-templates/display-data-in-template', component: DisplayDataInTemplateComponent},
  {path: 'components-templates/display-data-in-template-url', component: DisplayDataInTemplateUrlComponent },
  {path: 'components-templates/template-syntax', component: TemplateSyntaxComponent },
  {path: 'components-templates/template-syntax/custom-events', component:CustomEventsComponent},
  {path: 'components-templates/template-syntax/two-way-binding', component: TwoWayBindingComponent},
  {path: 'components-templates/directives', component: DirectivesComponent},
  {path :'components-templates/component-interaction', component:InteractionComponent},
  {path: 'components-templates/lifecycle-hooks', component:LifecycleHooksComponent},

  {path: 'forms/reactive/form-control', component:FormControlComponent},
  {path : '', redirectTo:'index', pathMatch:'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
