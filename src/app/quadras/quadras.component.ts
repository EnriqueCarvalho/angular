import { Component, OnInit } from '@angular/core';
import { Quadra } from '../shared/model/Quadra';
import { QuadrasService } from '../shared/service/quadras.service';




@Component({
  selector: 'app-quadras',
  templateUrl: './quadras.component.html',
  styleUrls: ['./quadras.component.css']
})
export class QuadrasComponent implements OnInit {

  quadras: Quadra[] = []
  
  constructor(private quadrasServeice: QuadrasService) { }

  ngOnInit(): void {

    this.quadras = this.quadrasServeice.getQuadras()
  }

}
