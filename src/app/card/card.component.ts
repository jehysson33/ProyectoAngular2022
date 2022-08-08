import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string="https://e7.pngegg.com/pngimages/415/737/png-clipart-lamborghini-miura-car-lamborghini-gallardo-lamborghini-huracan-logo-ferrari-emblem-label-thumbnail.png";
  public Titulo:string="Curso de Angular con Interpolación";

  constructor() { }

  ngOnInit(): void {
  }

}
