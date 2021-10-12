import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("fRef") signupForm : NgForm
  defaultQuestion: string = 'pet'
  questionAnswer: string = ''
  genders: string[] = ['male', 'female']
  defaultGender: string = 'female'

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value)
  // }

  onSubmit() {
    console.log(this.signupForm.value)
  }
}
