import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { RestApiService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public countries$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public states$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private restApiService: RestApiService) {
    this.init();
  }
  init() {
    //pass
  }
}
