import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../service/alert.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor(private alertService:AlertService) { }

  alertErro: boolean = false
  alertSucesso: boolean = false

  ngOnInit(): void {
    this.alertService.alertErro.subscribe(
      alert => this.alertErro = alert
    )

    this.alertService.alertSucesso.subscribe(
      alert => this.alertSucesso = alert
    )
  }



}
