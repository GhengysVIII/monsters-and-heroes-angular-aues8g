import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

import { PlayableCharacter } from '../../models/characters/playable-character';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private data: DataService) { }
  
  ngOnInit() {
    //this.data = this.dt.myCharacters;
  }

}