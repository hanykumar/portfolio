// image-slider.component.ts
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent {
  @ViewChild('imageContainer') imageContainer!: ElementRef;
  @Input() images: string[] = [];
  selectedImageIndex: number | null = null;

  showImage(index: number): void {
    this.selectedImageIndex = index;
  }

  closeFullscreen(): void {
    this.selectedImageIndex = null;
  }

  showPrevImage(): void {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex = (this.selectedImageIndex - 1 + this.images.length) % this.images.length;
    }
  }
  

  showNextImage(): void {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.images.length;
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        this.showPrevImage();
        break;
      case 'ArrowRight':
        this.showNextImage();
        break;
      case 'Escape':
        this.closeFullscreen();
        break;
    }
  }
  private getImageWidth(): number {
    // Assuming all images have the same width, use the width of the first image
    const firstImage = this.imageContainer.nativeElement.querySelector('.thumbnail img');
    return firstImage ? firstImage.offsetWidth : 0;
  }

  scrollImagesLeft(): void {
    if (this.imageContainer.nativeElement) {
      const imageWidth = this.getImageWidth(); 
      this.imageContainer.nativeElement.scrollLeft -= imageWidth + 5; // Adjust the scroll distance as needed
    }
  }
  scrollImagesRight(): void {
    if (this.imageContainer.nativeElement) {
      const imageWidth = this.getImageWidth(); 
      this.imageContainer.nativeElement.scrollLeft += imageWidth + 5; // Adjust the scroll distance as needed
    }
  }
}
