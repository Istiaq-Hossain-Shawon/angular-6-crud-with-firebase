import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Employee} from '../model/Employee';
@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee : Employee)
  {
    this.employeeList.push({
        firstName: employee.firstName,
        secondName: employee.secondName,
        gender: employee.gender,
        dateOfBirthday: employee.dateOfBirthday,
        category: employee.category,
        membership: employee.membership,
        address1: employee.address1,
        state: employee.state,
        address2: employee.address2,
        postcode: employee.postcode,
        city: employee.city,
        country: employee.country
    });
  }

  updateEmployee(employee : Employee){
    this.employeeList.update(employee.$key,
      {
        firstName: employee.firstName,
      secondName: employee.secondName,
      gender: employee.gender,
      dateOfBirthday: employee.dateOfBirthday,
      category: employee.category,
      membership: employee.membership,
      address1: employee.address1,
      state: employee.state,
      address2: employee.address2,
      postcode: employee.postcode,
      city: employee.city,
      country: employee.country
      });
  }

  deleteEmployee($key : string){
    this.employeeList.remove($key);
  }

}