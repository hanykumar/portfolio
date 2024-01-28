import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
// @ts-ignore
import { HeaderMenu } from '../../../assets/header.js';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  profile_pic: string = 'assets/profile_pic.jpg'
  linkedin_icon = 'assets/icons/linkedin.svg'
  headerMenu = HeaderMenu;
  isNavbarCollapsed = true;

  closeNavbar = () => {
    var navbarToggleBtn = document.getElementById('navbarToggleBtn');
    if (navbarToggleBtn && !this.isNavbarCollapsed) {
      navbarToggleBtn.click();
    }
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
