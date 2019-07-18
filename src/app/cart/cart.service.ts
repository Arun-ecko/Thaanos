import { Injectable } from '@angular/core';
import { UserAuthService } from '../user/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';




@Injectable({
  providedIn: 'root'
})
export class UserCartService {
  userId: string;
  constructor(private authservice: UserAuthService, private afAuth: AngularFireAuth,
              private database: AngularFirestore ) { }

}
