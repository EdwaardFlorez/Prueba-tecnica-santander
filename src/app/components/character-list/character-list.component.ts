import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent  {

  personajes: = [];

  constructor(
    private marvelService: MarvelService,
  ) {}

  ngOnInit() {
    this.marvelService.getCharacters().subscribe(data => {
      console.log(data.data.results);

      this.personajes = data.data.results;
    })
  }

}

