import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Development of a direct sales application for local products',
      technologies: 'Figma, Flutter',
      description: [
        'Created a prototype on Figma for a mobile application, utilized Flutter for development, all while aligning with the client\'s feedback.',
      ],
    },
    {
      title: 'Big Data Project (Creating a big data architecture)',
      technologies: 'Docker, Java, Python, Grafana, Crontab, Sqllite, Shell',
      description: [
        'Utilized Scrapy, a Python web scraping framework, to efficiently extract data from a website. Employed Hadoop HDFS, a distributed file system, for robust and scalable data storage. Performed comprehensive data cleaning and transformation using Apache Hive, leveraging its SQL-like capabilities. Employed Hadoop MapReduce for data analysis, enabling aggregations, calculations, and large-scale data processing. Created insightful visualizations with Plotly and Dash to provide clear data representation. Developed an interactive dashboard using Grafana to deliver an engaging and user-friendly interface for data exploration and visualization.',
      ],
    },
    {
      title: 'R project (Manipulating data)',
      technologies: 'R, Excel, Python',
      description: [
        'We need to populate an Excel sheet with variousdata (informations about manga’s characters) on a chosen topic in order, to manipulate the R language and demonstrate different possible cases.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
