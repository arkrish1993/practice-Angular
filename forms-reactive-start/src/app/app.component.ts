import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
        'email': new FormControl(null, [Validators.required, Validators.email], this.validateEmails.bind(this))
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    })
    //Observable that gets triggerred each time there is a value change
    // this.signupForm.valueChanges.subscribe((value)=>{
    //   console.log(value)
    // })
    //Observable that gets triggerred each time there is a status change
    // this.signupForm.statusChanges.subscribe((value)=>{
    //   console.log(value)
    // })
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

  validateEmails(control: FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'abc@xyz.com') {
          resolve({'emailIsForbidden': false})
        } else {
          resolve(null)
        }
      }, 1500)
    })
    return promise
  }
}
