import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('words').valueChanges();
  }

  ngOnInit(): void {
  }

}
