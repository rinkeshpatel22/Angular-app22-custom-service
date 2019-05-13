import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  public ShowAlert(message): void{
    alert(message);
  }
}
