import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.directives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveform';

  form: FormGroup;
    
  name = new FormControl("", [Validators.required, forbiddenNameValidator(/Kenneth/i)]);
  email = new FormControl("", [Validators.required, 
    Validators.email]);
  phone = new FormControl("", [Validators.required, 
    Validators.minLength(4)]);
  attending = new FormControl("", Validators.required);

  constructor(fb: FormBuilder) {
      this.form = fb.group({
          "name": this.name,
          "email": this.email,
          "phone": this.phone,
          "attending": this.attending,
      });
  }

  processForm() {
      console.log("model-based form submitted");
      console.log(this.form);
      console.log(this.form.value);
      console.log(this.form.value.name);
  }
}
