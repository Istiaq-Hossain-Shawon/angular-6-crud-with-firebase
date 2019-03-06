import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Employee }    from '../../../shared/model/Employee';
import { Item } from '../../../shared/model/item';
import { EmployeeService } from '../../../shared/service/employee.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
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
  param:string;
  employeeDateOfBirth:Date
  constructor(private route: ActivatedRoute,private employeeService: EmployeeService, private tostr: ToastrService) { 
    var sub = this.route.params.subscribe(params => {
      this.param = params['id'];
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

    this.employeeService.getDataById(this.param).valueChanges().subscribe(res=> 
      {
      this.model.firstName=res.firstName;
      this.model.id=res.id;
      this.model.secondName=res.secondName;
      this.model.dateOfBirthday=res.dateOfBirthday;
      this.employeeDateOfBirth=new Date(this.model.dateOfBirthday);//here assign data dateofbirthday manually
      this.model.gender=res.gender;
      this.model.category=res.category;
      this.model.membership=res.membership;
      this.model.address1=res.address1;
      this.model.state=res.state;
      this.model.address2=res.address2;
      this.model.postcode=res.postcode;
      this.model.city=res.city;
      this.model.country=res.country;
      })
    
  }

  onSubmit() { 
    this.submitted = true; 
  }
  save() { 
    this.model.dateOfBirthday=this.employeeDateOfBirth.toLocaleDateString();
    this.employeeService.updateEmployee(this.model);
    this.tostr.success('Submitted Succcessfully', 'Employee Register');
    this.model = new Employee();
    this.submitted = false; 
  }
  newEmployee() {
    this.model = new Employee();
  }
}
