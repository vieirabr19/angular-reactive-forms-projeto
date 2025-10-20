import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';

const importsModules = [
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatTabsModule,
];

@NgModule({
  imports: importsModules,
  exports: importsModules,
})
export class AngularMaterialModule { }