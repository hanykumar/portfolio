import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgImageSliderModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  icon: string = 'assets/icon.png'
  tasklist_app_images = [
    'assets/tasklist-app-images/img_1.jpg',
    'assets/tasklist-app-images/img_2.jpg',
    'assets/tasklist-app-images/img_4.jpg',
    'assets/tasklist-app-images/img_5.jpg',
    'assets/tasklist-app-images/img_6.jpg',
    'assets/tasklist-app-images/img_7.jpg',
    'assets/tasklist-app-images/img_3.jpg',
  ].map((image: any, index: any) => ({
    image: image,
    thumbImage: image, // Assuming thumbnail path is the same as the image path in this example
    alt: `Image ${index + 1}`,
    order: index + 1,
  }));


  tasklist_web_images = [
    'assets/tasklist-web-images/img_web_1.png',
    'assets/tasklist-web-images/img_web_2.png',
    'assets/tasklist-web-images/img_web_4.png',
    'assets/tasklist-web-images/img_web_5.png',
    'assets/tasklist-web-images/img_web_6.png',
    'assets/tasklist-web-images/img_web_3.png',
  ].map((image: any, index: any) => ({
    image: image,
    thumbImage: image, // Assuming thumbnail path is the same as the image path in this example
    alt: `Image ${index + 1}`,
    order: index + 1,
  }));


  javascript_compiler_image = [
    'assets/javascriptcompiler.png',
  ].map((image: any, index: any) => ({
    image: image,
    thumbImage: image, // Assuming thumbnail path is the same as the image path in this example
    alt: `Image ${index + 1}`,
    // title: `Image ${index + 1}`,
    order: index + 1,
  }));


  updateImageUrls = (imagesArray: any) => {
    return imagesArray.map((image: any, index: any) => ({
      image: image,
      thumbImage: image, // Assuming thumbnail path is the same as the image path in this example
      alt: `Image ${index + 1}`,
      title: `Image ${index + 1}`,
      order: index + 1,
    }));
  }
}
