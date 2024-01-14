import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'SAP Full Stack Developer',
      company: ' Vinci Construction S.I',
      duration: 'May 2023 - Nov 2023',
      description: [
        'Participate in SAP projects from the design phase to deployment, including unit test development.',
        'Modules covered: SAP HR, SAP FI, SAP CO, SAP SD',
      ],
    },
    {
      role: 'BIM Developer',
      company: ' TRACTEBEL – ENGIE GROUP',
      duration: 'Apr 2022 - Aug 2022',
      description: [
        'Setting up an SQL database for Civil Engineering execution study projects.',
        'Attached to the GCR Unit (Civil Engineering of Reactors) ',
        'Nuclear & Industry Unit Directorate. Data processing in C# and use of MS SQL ',
      ],
    },
    {
      role: 'Project Manager and developer',
      company: 'Istya',
      duration: 'Sep 2021 - Feb 2022',
      description: [
        'Create a prediction algorithm to combat pollution episodes.',
        'Use of jupyter notebook for python scripts and Angular for the frontend part.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
