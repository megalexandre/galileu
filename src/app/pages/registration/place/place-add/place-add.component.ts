import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { PlaceService } from '../place.service';
import { Address } from '@model/default/address';
import { AddressService } from '../../address/address.service';

@Component({
  selector: 'ngx-place-add',
  templateUrl: './place-add.component.html',
  styleUrls: ['./place-add.component.scss']
})
export class PlaceAddComponent implements OnInit {

  public form: FormGroup;
  public submmited: boolean = false;
  public adresses: Address[]

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: PlaceService,
    private toastrService: NbToastrService,
    private addressSerive: AddressService,
    ) {

      this.addressSerive.getAll().subscribe(
        (adresses: Address[])=>{
          this.adresses = adresses
        }
      );

  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      number: [null, Validators.required],
      letter: [null, Validators.required],
      address: [null, Validators.required],
    })
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

  get number(): AbstractControl {
    return this.form.get('number')
  }

  get letter(): AbstractControl {
    return this.form.get('letter')
  }

  get address(): AbstractControl {
    return this.form.get('address')
  }
}
