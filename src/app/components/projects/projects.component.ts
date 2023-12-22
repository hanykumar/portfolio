import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  icon: string = 'assets/icon.png'
  tasklist_app_images = [
    'assets/tasklist-app-images/img_1.jpg',
    'assets/tasklist-app-images/img_2.jpg',
    'assets/tasklist-app-images/img_3.jpg',
    'assets/tasklist-app-images/img_7.jpg',
    'assets/tasklist-app-images/img_4.jpg',
    'assets/tasklist-app-images/img_5.jpg',
    'assets/tasklist-app-images/img_6.jpg',
  ]
}
