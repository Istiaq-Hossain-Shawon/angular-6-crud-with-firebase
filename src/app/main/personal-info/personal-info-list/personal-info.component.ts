import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Employee }    from '../../../shared/model/Employee';
import { EmployeeService } from '../../../shared/service/employee.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";
@Component({
  selector: 'app-personal-info',
  templateUrl: 'personal-info.component.html',
  styleUrls: ['../../../app.component.scss','personal-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonalInfoComponent implements OnInit {
  
  employeeList: Employee[];
  arr: Employee[] = [];
  constructor(private employeeService: EmployeeService, private tostr: ToastrService,private router: Router) {
debugger;
    this.employeeService.getData().subscribe(
      (user: Employee[]) => {
      this.employeeList = user;
      console.log(this.employeeList)}
    );

   }

  ngOnInit() {
  } 
  onEdit(emp: string) {
    debugger;
    //this.employeeService.selectedEmployee = Object.assign({}, emp);
    this.router.navigate(['/personal-info-edit', emp])
  }
  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(key);
      this.tostr.warning("Deleted Successfully", "Employee register");
    }
  }

}
