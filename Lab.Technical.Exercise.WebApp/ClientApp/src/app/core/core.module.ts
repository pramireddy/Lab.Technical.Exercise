import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService, LoggerService, ScenariosService } from './services';
import { SucessDialogComponent } from './dialogs/sucess-dialog/sucess-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';


@NgModule({
  declarations: [SucessDialogComponent, ErrorDialogComponent],
  imports: [
    CommonModule
  ],
  providers: [
    AppService,
    LoggerService,
    ScenariosService,
  ],
  exports: []
})
export class CoreModule { }
