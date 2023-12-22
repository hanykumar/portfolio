import { Component } from '@angular/core';
//@ts-ignore
import { Experience } from '../../../assets/experience'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experience = Experience;
}
