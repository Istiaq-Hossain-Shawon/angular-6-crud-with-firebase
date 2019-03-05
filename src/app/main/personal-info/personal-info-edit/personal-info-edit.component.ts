import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Employee }    from '../../../shared/model/Employee';
import { Item } from '../../../shared/model/item';
import { EmployeeService } from '../../../shared/service/employee.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal-info-edit',
  templateUrl: 'personal-info-edit.component.html',
  styleUrls: ['../../../app.component.scss','personal-info-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonalInfoEditComponent implements OnInit {
  
  powers:any[];
  genders:any[];
  Categories:any[];
  MembershipList:Item[];
  Countries:any[];
  model:Employee;
  submitted:boolean;
  employeeList: Employee[];
  constructor(private route: ActivatedRoute,private employeeService: EmployeeService, private tostr: ToastrService) { 
    var sub = this.route.params.subscribe(params => {
      var paramId = +params['id'];
   });   
   this.model = new Employee(); 
   this.submitted = false;
  }

  ngOnInit() {    
    this.powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];
    this.genders = ['Male', 'Female'];
    this.Categories = ['Category1', 'Category2', 'Category3', 'Category4'];
    this.MembershipList=[ {name:'Free',value:'Free'},{name:'Professional',value:'Professional'}];
    this.Countries = ['America', 'Italy', 'Russia', 'Britain'];
    this.model=this.employeeService.getDataById();
    this.model.dateOfBirthday=new Date(this.model.dateOfBirthday);
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
