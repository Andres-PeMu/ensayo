import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private firestore: Firestore) { }

  addCard(card: Card){

  }

}
