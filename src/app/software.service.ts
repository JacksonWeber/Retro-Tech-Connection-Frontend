import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Software } from './software';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  private softwareUrl = 'api/software';

  private dummySoftware: Software[] = [
          { id: 1, name: "software", description: "software" },
          { id: 2, name: "software 2", description: "software 2" }
        ];

  constructor() { }

  // Configure to return an Observable<Software> later?
  getSoftware(): Software[] {
    return this.dummySoftware;
  }
}
