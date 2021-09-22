import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items = this.firebaseService.items;

  constructor(
    private firebaseService: FirebaseService
  ) {

  }

  ngOnInit(): void {
    console.log(this.items)
  }

}
