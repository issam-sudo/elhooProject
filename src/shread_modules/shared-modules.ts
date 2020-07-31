import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule  } from '@angular/material/datepicker';
import {  MatNativeDateModule } from '@angular/material/core';

@NgModule({

  exports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, BrowserAnimationsModule]
})

export class SharedModules {
}
