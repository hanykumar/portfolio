import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { MatIconModule } from '@angular/material/icon';
import {
  JAVASCRIPT_COMPILER_IMAGE,
  TASKLIST_APP_IMAGES,
  TASKLIST_WEB_IMAGES,
} from '../../generated/project-images.generated';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ImageSliderComponent, MatIconModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  icon: string = 'assets/icon.png';
  tasklist_app_images = TASKLIST_APP_IMAGES;
  tasklist_web_images = TASKLIST_WEB_IMAGES;
  javascript_compiler_image = JAVASCRIPT_COMPILER_IMAGE;
}
