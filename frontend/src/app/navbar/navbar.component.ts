import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../config.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;
  locations: String[] = [];

  constructor(private service: ConfigService) {
  }

  ngOnInit() {
    this.service.getLocation().subscribe((locations: String[]) => {
      locations.forEach(element => {
        console.log(element);
      });
      this.locations = locations;
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
