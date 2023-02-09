import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '@model/default/customer';
import { NbToastrService } from '@nebular/theme';
import { LinkService } from '../link-service.service';

@Component({
  selector: 'ngx-link-add',
  templateUrl: './link-add.component.html',
  styleUrls: ['./link-add.component.scss']
})
export class LinkAddComponent implements OnInit {

  form: FormGroup;
  public submmited: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: LinkService,
    private toastrService: NbToastrService,
    ) { }


  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      customer: [null, Validators.required],
    })
  }

  public selectCustomer(customer: Customer){
    this.customer.setValue(customer)
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

  get customer(): AbstractControl {
    return this.form.get('customer')
  }

}
