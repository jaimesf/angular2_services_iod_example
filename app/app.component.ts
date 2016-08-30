import { Component, OnInit } from '@angular/core';

import { ExampleService } from './example-service/example-service.service';
import { AppService } from './app.service';
import { ChildComponent} from './child/child.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [AppService, ExampleService],
  directives: [ ChildComponent ],
  styleUrls: ['app/app.component.css']
})

export class AppComponent implements OnInit{

  title:string;
  content: string;

  constructor(private appService:AppService){}

  ngOnInit(){
      this.title = 'Services and IOD example';
      this.content = this.appService.getMessage();
  }

}
