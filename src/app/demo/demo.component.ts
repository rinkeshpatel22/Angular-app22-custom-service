import { Component } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  constructor(private demoService: DemoService) { }
  
  private message: string = "This is DemoService Method calling from DemoComponent";

  public callServiceMethod(): void {
    this.demoService.ShowAlert(this.message);
  }
}
