import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  profile_pic: string = 'assets/profile_pic.jpg'

   closeNavbar = () => {
    var navbarToggleBtn = document.getElementById('navbarToggleBtn');
    if (navbarToggleBtn) {
        navbarToggleBtn.click();
    }
}
}
