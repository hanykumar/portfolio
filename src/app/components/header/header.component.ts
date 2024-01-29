import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
// @ts-ignore
import { HeaderMenu } from '../../../assets/header.js';
import { CommonModule, Location } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  profile_pic: string = 'assets/profile_pic.jpg'
  linkedin_icon = 'assets/icons/linkedin.svg'
  headerMenu = HeaderMenu;
  isNavbarCollapsed = true;
  selectedSection: string | null = 'home';

  constructor(private location: Location) {

  }
  closeNavbar = (href: any) => {
    this.selectedSection = href;
    var navbarToggleBtn = document.getElementById('navbarToggleBtn');
    if (navbarToggleBtn && !this.isNavbarCollapsed) {
      navbarToggleBtn.click();
    }
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  updateSelectedSection(href: string): void {
    this.selectedSection = href;
    this.closeNavbar(href);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.updateSelectedSectionBasedOnScroll();
  }

  private updateSelectedSectionBasedOnScroll(): void {
    const sections = this.headerMenu.map((menu: any) => menu.href);
    const scrollPosition = window.scrollY;
    

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.selectedSection = section;
          // this.updateUrl(section);
          break;
        }else{
          this.selectedSection = '';
          // this.updateUrl(this.selectedSection);
          // break;
        }
      }
    }
  }
  scrollToSection(href: string): void {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.closeNavbar(href);
    }
  }

  updateUrl(href: string): void {
    const newUrl = `#${href}`;
    this.location.go(newUrl);
  }
}
