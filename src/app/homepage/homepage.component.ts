import { Component, OnInit } from '@angular/core';

import { Software } from '../software';
import { SoftwareService } from '../software.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  software: Software[];

  constructor(private softwareService: SoftwareService) { }

  ngOnInit(): void {
    this.getSoftware();
  }

  getSoftware(): void {
    this.software = this.softwareService.getSoftware();
  }

}
