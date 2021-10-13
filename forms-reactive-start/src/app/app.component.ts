import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup
  forbiddenNames: string[] = ['Chris', 'Anna']

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userdata': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.validateName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    })
  }

  onSubmit() {
    console.log(this.signupForm.value)
  }

  addHobby() {
    const hobby = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(hobby)
  }

  get hobbies() {
    return  (<FormArray>this.signupForm.get('hobbies')).controls
  }

  validateName(control: FormControl) : {[s:string]: boolean} {
    if (this.forbiddenNames.indexOf(control.value) >= 0) {
      return {'nameIsForbidden': true}
    }
    /**
     * IMPORTANT TO NOTE:
     * Donot pass the return value as {'nameIsForbidden': false} in case the validation succeeds.
     * Either return null or add no return statement.
     * It's just how it works.
     */
    return null
  }
}
