import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-it',
  templateUrl: './header-it.component.html',
  styleUrl: './header-it.component.scss'
})
export class HeaderItComponent {
  constructor(private router: Router) {
    localStorage.getItem("username")?.split(" ").forEach((item, index) => {
      if (index === 0) {
        this.userName = item;
        console.log(this.userName);
      }
    });
  }

  userName: string | undefined; // ดึงมาจาก auth หรือ service
userDropdownOpen = false;
toggleUserDropdown() {
  this.userDropdownOpen = !this.userDropdownOpen;
}

  menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }


}
