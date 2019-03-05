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
  constructor(private employeeService: EmployeeService, private tostr: ToastrService,private router: Router) { }

  ngOnInit() {
    
    var x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        console.log(y);
        this.employeeList.push(y as Employee);
      });
    });
  }
  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);
    this.router.navigate(['/personal-info-edit', emp.$key])
  }
  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(key);
      this.tostr.warning("Deleted Successfully", "Employee register");
    }
  }

}
