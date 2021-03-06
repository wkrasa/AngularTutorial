import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-value-accessor',
  templateUrl: './value-accessor.component.html',
  styleUrls: ['./value-accessor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValueAccessorComponent implements OnInit {

  form = new FormGroup({
    val: new FormControl('123'),
    val2: new FormControl({ value: true, disabled: false}),
    val3: new FormControl({ value: { value: 123}, disabled: false}, Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
