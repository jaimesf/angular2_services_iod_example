import { Injectable } from '@angular/core';
import { ExampleService } from './example-service/example-service.service';

@Injectable()
export class AppService {

    constructor(private serviceExample:ExampleService){}

    getMessage(): string {
        return this.serviceExample.getExample();
    }
}
