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
  user = {
    username: '',
    email: '',
    gender: '',
    secret:'',
    answer: ''
  }
  isSubmitted: boolean = false

  suggestUserName() {
    const suggestedName = 'Superuser';
    //Method 1 : will reset all entered values. NOT RECOMMENDED
    // this.signupForm.setValue({
    //   userData: {username: suggestedName, email: ''},
    //   answer: "",
    //   gender: "male",
    //   secret: "pet"
    // })
    //Method 2: Only override specific values
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value)
  // }

  onSubmit() {
    this.isSubmitted = true
    this.user.username = this.signupForm.value.userData.username
    this.user.email = this.signupForm.value.userData.email
    this.user.gender = this.signupForm.value.gender
    this.user.secret = this.signupForm.value.secret
    this.user.answer = this.signupForm.value.answer
    this.signupForm.reset()
  }
}
