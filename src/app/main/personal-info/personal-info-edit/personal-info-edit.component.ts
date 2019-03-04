import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Employee }    from '../../../shared/model/Employee';
import { Item } from '../../../shared/model/item';
import { EmployeeService } from '../../../shared/service/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-personal-info-edit',
  templateUrl: 'personal-info-edit.component.html',
  styleUrls: ['../../../app.component.scss','personal-info-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonalInfoEditComponent implements OnInit {
  
  myDateValue: Date;
  powers:any[];
  genders:any[];
  Categories:any[];
  MembershipList:Item[];
  Countries:any[];
  model:Employee;
  submitted:boolean;
  employeeList: Employee[];
  constructor(private employeeService: EmployeeService, private tostr: ToastrService) { }

  ngOnInit() {
    this.powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];
    this.genders = ['Male', 'Female'];
    this.Categories = ['Category1', 'Category2', 'Category3', 'Category4'];
    this.MembershipList=[ 
      {name:'Free',value:'Free'},
      {name:'Professional',value:'Professional'}
    ];
    this.Countries = ['America', 'Italy', 'Russia', 'Britain'];
    this.model = new Employee();
    this.submitted = false;
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

  onSubmit() { 
    this.submitted = true; 
  }
  save() { 
    if (this.model.$key == null){
      this.employeeService.insertEmployee(this.model);
    }    
    else{
      this.employeeService.updateEmployee(this.model);
    }
    this.tostr.success('Submitted Succcessfully', 'Employee Register');
    this.model = new Employee();
    this.submitted = false; 
  }
  newEmployee() {
    this.model = new Employee();
  }
}
