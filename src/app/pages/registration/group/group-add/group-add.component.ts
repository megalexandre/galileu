import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { GroupService } from '../group.service';

@Component({
  selector: 'ngx-group-add',
  templateUrl: './group-add.component.html',
})
export class GroupAddComponent implements OnInit {

  form: FormGroup;
  public submmited: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: GroupService,
    private toastrService: NbToastrService,
    ) { }


  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      category: [null, [Validators.required]],
      value: [null,  [Validators.required]],
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

  get name(): AbstractControl {
    return this.form.get('name')
  }

  get category(): AbstractControl {
    return this.form.get('category')
  }

  get value(): AbstractControl {
    return this.form.get('value')
  }

}
