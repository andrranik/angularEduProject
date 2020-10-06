import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SettingsRestService} from './settings-rest.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingsForm: FormGroup;

  constructor( private fb: FormBuilder, private settingsRest: SettingsRestService) {
    this.initForm();
  }

  ngOnInit(): void {

  }

  initForm(): void {
    this.settingsForm = this.fb.group({
      fio: ['Доронин Сергей Леонидович', Validators.maxLength(200)],
      name: ['', Validators.maxLength(200)],
      notification: false,
      notificationRadio: '',
      email: ['', [Validators.email, Validators.maxLength(200)]],
      phone: ['', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.maxLength(11)]]
    });
  }

  resetForm(): void {
    this.settingsForm.reset();
  }

  submit(): void {
    this.settingsRest.post(this.settingsForm.value);
  }
}
