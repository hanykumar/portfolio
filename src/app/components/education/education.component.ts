import { Component } from '@angular/core';
// @ts-ignore
import { Education } from '../../../assets/education.js'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education = Education
  constructor() {

  }
}
