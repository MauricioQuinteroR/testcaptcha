import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  token: string|undefined;

  constructor() {
    this.token = undefined;
  }

  public send(form: NgForm): void {
    console.log('Formulario Valido: ', form.valid);
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
    console.log(`Token [${this.token}] generated`);
    console.debug(`Token [${this.token}] generated`);
  }

}
