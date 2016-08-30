import { Component, OnInit, Inject } from '@angular/core';
import { CONFIG_TOKEN, Configuration } from '../config/configuration';
import { ExampleService } from '../example-service/example-service.service';
import { AppService } from '../app.service';

@Component({
  selector: 'child',
  templateUrl: 'app/child/child.component.html'
})
export class ChildComponent implements OnInit{

    msg:string;

    constructor(
        private appService: AppService,
        private exampleService: ExampleService,
        @Inject(CONFIG_TOKEN) private config: Configuration
    ){}

    ngOnInit(){
        this.msg = this.config.api +
            this.appService.getMessage() +
            this.exampleService.getExample();
    }
}
