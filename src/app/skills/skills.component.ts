import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'ASP.NET Core, EF Core',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'JAVA',
      level: 'Intermidiate',
      rating: 78,
    },
    {
      name: 'SAP',
      level: 'Intermidiate',
      rating: 70,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
