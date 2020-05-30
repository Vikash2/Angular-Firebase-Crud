import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from './employee.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  formData: Employee;
  constructor(public _firestore: AngularFirestore) {}
  getEmployees() {
    return this._firestore.collection('Employee').snapshotChanges();
  }
}
