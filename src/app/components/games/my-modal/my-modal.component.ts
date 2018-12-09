import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../../services/modal.service'

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit {

  @Input() requestedData
  @Input() game

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    console.log(this.requestedData)
  }

  onCloseModal() {
    this.modalService.close("app-games-modal")
  }

}
