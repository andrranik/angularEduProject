import { Component, OnInit } from '@angular/core';
import {RestService, Service, User} from './rest.service';
import {FormGroup, FormBuilder, FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'app-service-connection',
  templateUrl: './service-connection.component.html',
  styleUrls: ['./service-connection.component.css']
})
export class ServiceConnectionComponent implements OnInit {
  serviceForm: FormGroup;
  selectedUser: User;
  rest: RestService;
  users: User[];
  includedSrvs: Service[];
  excludedSrvs: Service[];

  constructor(restService: RestService, private fb: FormBuilder) {
    this.rest = restService;
  }

  ngOnInit(): void {
    this.initForm();
    this.rest.GetUsers().subscribe((data: User[]) => {
      this.users = data; this.selectedUser = data[0];
      this.getServicesByCurrentUser();
    });
  }

  initForm(): void {
    this.serviceForm = new FormGroup({
      search: new FormControl(),
      includedSrvs:  this.fb.array([]),
      excludedSrvs: this.fb.array([])
    });
  }
  getUserServices(user: User, filer: (id: number) => boolean): Service[] {
    let services: Service[];
    this.rest.GetServices().subscribe((data: Service[]) => {
      services = data.filter(x => user.enabledServices.find(filer));
    });
    return services;
  }

  getServicesByCurrentUser(): void {
    this.rest.GetServices().subscribe((data: Service[]) => {
      this.includedSrvs = data.filter(x => this.selectedUser.enabledServices.includes(x.id));
      this.excludedSrvs = data.filter(x => !this.selectedUser.enabledServices.includes(x.id));
      this.includedSrvs.forEach(item => {
        const control = this.serviceForm.get('includedSrvs') as FormArray;
        control.push(new FormControl(item));
      });
      this.excludedSrvs.forEach(item => {
        const control = this.serviceForm.get('excludedSrvs') as FormArray;
        control.push(new FormControl(item));
      });
    });
  }

  deleteService(service: Service): void {
    const index = this.includedSrvs.indexOf(service);
    this.includedSrvs.splice(index, 1);
    const control = this.serviceForm.get('includedSrvs') as FormArray;
    control.removeAt(index);
  }

  loadServices(user: User): void {
    this.selectedUser = user;
    this.clearServiceControls();
    this.getServicesByCurrentUser();
  }

  clearServiceControls(): void {
    const control = this.serviceForm.get('includedSrvs') as FormArray;
    const controlExc = this.serviceForm.get('excludedSrvs') as FormArray;
    control.clear();
    controlExc.clear();
  }

  addServices(): void {
    // const controls = this.serviceForm.get('excludedSrvs').value as FormArray;
    // controls .forEach(x => {
    //   console.log(x);
    // });
  }
}
