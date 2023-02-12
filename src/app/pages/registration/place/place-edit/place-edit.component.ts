import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '@model/default/place';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { PlaceService } from './../place.service';

@Component({
  selector: 'ngx-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.scss']
})
export class PlaceEditComponent implements OnInit {

  public id: string;
  public loaded: boolean = false;
  public place: Place;
  public form: FormGroup;
  public submmited: boolean = false;

  constructor(
    private data: DataService,
    private service: PlaceService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: NbToastrService,
    ) { }


  ngOnInit(): void {
    this.id = this.data.id

    this.service.getById(this.id).subscribe(
      (place: Place)=> {
        this.place = place;

        this.form = this.formBuilder.group({
          id: [place.id, Validators.required],
        })
        this.loaded = true
      }
    )

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

}
