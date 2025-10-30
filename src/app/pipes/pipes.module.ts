import { NgModule } from "@angular/core";

import { MaritalStatusPipe } from './marital-status-pipe';
import { CpfPipe } from "./cpf.pipe";
import { AgePipe } from "./age.pipe";

@NgModule({
  declarations: [
    MaritalStatusPipe,
    CpfPipe,
    AgePipe,
  ],
  exports: [
    MaritalStatusPipe,
    CpfPipe,
    AgePipe,
  ]
})
export class PipesModule {}