import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Employee} from '../model/Employee';
@Injectable()
export class EmployeeService {
  userscollection: AngularFirestoreCollection<Employee>;
  users: Observable<Employee[]>;
  userDoc: AngularFirestoreDocument<Employee>;
  constructor(public _afs: AngularFirestore) {

  }
  getData() {
    this.userscollection = this._afs.collection('employees', x => x.orderBy('firstName', 'asc'));
    this.users = this.userscollection.snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Employee;
            data.id = a.payload.doc.id;
            return data;
          });

      });
    return this.users;
  }
  insertEmployee(employee : Employee) {
    this._afs.collection('employees').add({
      firstName: employee.firstName ,
        secondName: employee.secondName ,
        gender: employee.gender ,
        dateOfBirthday: employee.dateOfBirthday ,
        category: employee.category ,
        membership: employee.membership ,
        address1: employee.address1 ,
        state: employee.state ,
        address2: employee.address2 ,
        postcode: employee.postcode ,
        city: employee.city ,
        country: employee.country 
    });
  }
  deleteEmployee(id) {
    this.userDoc = this._afs.doc(`employees/${id}`);
    this.userDoc.delete();
  }
  getDataById(id){
   this.userDoc = this._afs.doc(`employees/${id}`);   
   return this.userDoc;
  }
  updateEmployee(employee : Employee){
    this.userDoc.update(
      {       
        firstName: employee.firstName ,
        secondName: employee.secondName ,
        gender: employee.gender ,
        dateOfBirthday: employee.dateOfBirthday ,
        category: employee.category ,
        membership: employee.membership ,
        address1: employee.address1 ,
        state: employee.state ,
        address2: employee.address2 ,
        postcode: employee.postcode ,
        city: employee.city ,
        country: employee.country 
      }
    );
  }


}

