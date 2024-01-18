import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Srikanth COLLATY'],
    ['Work Exp', '2 Years'],
    ['Education', 'Engineering degree'],
    ['Interests', 'Basket-ball, Coding, Rubik\'s cube'],
  ];

  aboutMe: string[] = [
    'I am Srikanth Collaty,I have recently graduated, I am a Tech enthusiast.',
    'I am always open to collaborating on projects and innovative/disruptive ideas.',
    ' When I am not coding, you will find me lifting weights in the gym or at my desk sketching stuff',
  ];

  constructor() {}

  ngOnInit(): void {}
}