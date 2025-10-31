import { NgModule } from "@angular/core";

import { provideNativeDateAdapter } from "@angular/material/core";

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';

const importsModules = [
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
];

@NgModule({
  imports: importsModules,
  exports: importsModules,
  providers: [provideNativeDateAdapter()],
})
export class AngularMaterialModule { }