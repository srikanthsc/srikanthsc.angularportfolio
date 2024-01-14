import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'ESIEA',
      course: 'Enginering degree',
      duration: '2020-2023',
     
    },
    {
      institute: 'Preparatory class for Grandes Ecoles - Jacquard high school Paris',
      course: 'Math, Physics, Mechanics',
      duration: '2019-2020',
      
    },
    {
      institute: 'Jacquard high school Paris',
      course: 'Two years technical studies in electrical engineering',
      duration: '2017-2019',
      
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
