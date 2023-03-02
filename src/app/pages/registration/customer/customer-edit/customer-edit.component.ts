import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from 'app/@shared/data.service';
import { Customer } from '@model/default/customer';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import DocumentValidator from 'app/@validator/document.validator';
import DateValidator from 'app/@validator/date.validator';

@Component({
  selector: 'ngx-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  public id: string;
  public loaded: boolean = false;
  public customer: Customer;
  public form: FormGroup;
  public submmited: boolean = false;
  public personTypeValue : 'PERSON'|'LEGAL'  = 'PERSON';

  constructor(
    private data: DataService,
    private service: CustomerService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: NbToastrService,
    ) { }


  ngOnInit(): void {
    this.id = this.data.id

    this.service.getById(this.id).subscribe(
      (customer: Customer)=> {
        this.customer = customer;

        this.form = this.formBuilder.group({
          id: [customer.id, Validators.required],
          name: [customer.name, Validators.required],
          document: [customer.document, [Validators.required, DocumentValidator.valid() ]],
          birthDay: [customer.birthDay,  [DateValidator.valid()]],
          phoneNumber: [customer.phoneNumber],
          personType: [customer.personType]
        })
        this.loaded = true
      }
    )

  }

  public setDate(date: string){
    this.birthDay.setValue(date);
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

    this.service.update(this.form.value).subscribe(
      () => {
        this.toastrService.success(`Sucesso`, `Novo Registro adicionado`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      () =>{
        this.toastrService.danger(`Erro ao salvar`, `Não foi possivel realizar a ação`)
      }

    )
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
