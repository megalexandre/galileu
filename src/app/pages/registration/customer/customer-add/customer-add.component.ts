import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import DocumentValidator from 'app/@validator/document.validator';

@Component({
  selector: 'ngx-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  form: FormGroup;
  public submmited: boolean = false;
  public personTypeValue : 'PERSON'|'LEGAL'  = 'PERSON';

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) { }


  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      document: ['', [Validators.required, DocumentValidator.valid() ]],
      birthDay: [],
      number: [],
      personType: []
    })
  }

  public togglePersonType(){

    if(this.personTypeValue === 'LEGAL'){
      this.personTypeValue = 'PERSON'
    } else {
      this.personTypeValue = 'LEGAL'
    }

    this.personType.setValue(this.personTypeValue);
    this.document.setValue(null);
  }

  public submit(){
    this.submmited = true;
  }

  public back(){
    this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
  }

  public getStatus(value: string): ('success'|'basic'|'danger') {

    if(this.form.get(value).valid && (this.form.get(value).touched || (this.submmited) )){
      return 'success'
    } else if (!this.form.get(value).valid &&  (this.form.get(value).touched || (this.submmited))){
      return 'danger'
    }

    return 'basic'
  }

  get name(): AbstractControl {
    return this.form.get('name')
  }

  get personType(): AbstractControl {
    return this.form.get('personType')
  }

  get document(): AbstractControl {
    return this.form.get('document')
  }
}
