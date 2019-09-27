import { Component, OnInit } from '@angular/core'
import { DataService } from './services/data.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  constructor( data: DataService ){
  }
}
