import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import DateValidator from 'app/@validator/date.validator';
import DocumentValidator from 'app/@validator/document.validator';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'ngx-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  form: FormGroup;
  public submmited: boolean = false;
  public personTypeValue : 'PERSON'|'LEGAL' = 'PERSON';

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: CustomerService,
    private toastrService: NbToastrService,
    ) { }


  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      document: [null, [Validators.required, DocumentValidator.valid() ]],
      birthDay: [null,  [DateValidator.valid()]],
      phoneNumber: [null],
      personType: ['PERSON']
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

    if(this.form.invalid){
      return
    }

    this.service.save(this.form.value).subscribe(
      () => {
        this.toastrService.success(`Sucesso`, `Novo Registro adicionado`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      (error) =>{
        this.toastrService.danger(error, `Não foi possivel realizar a ação`)
      }

    )
  }

  public setDate(date: string){
    this.birthDay.setValue(date);
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

  get birthDay(): AbstractControl {
    return this.form.get('birthDay')
  }

  get phoneNumber(): AbstractControl {
    return this.form.get('phoneNumber')
  }

  get document(): AbstractControl {
    return this.form.get('document')
  }
}
