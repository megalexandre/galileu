import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Group } from '@model/default/group';
import { NbToastrService } from '@nebular/theme';
import { DataService } from 'app/@shared/data.service';
import { GroupService } from '../group.service';

@Component({
  selector: 'ngx-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.scss']
})
export class GroupEditComponent implements OnInit {

  public id: string;
  public loaded: boolean = false;
  public group: Group;
  public submmited: boolean = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: GroupService,
    private toastrService: NbToastrService,
    ) { }

  ngOnInit(): void {

    if(!this.data.id){
      this.back()
    }

    this.id = this.data.id

    this.service.getById(this.id).subscribe(
      (group: Group)=> {
        this.group = group;

        this.form = this.formBuilder.group({
          name: [group.name, Validators.required],
          category: [group.category, [Validators.required]],
          value: [group.value,  [Validators.required]],
        })
        this.loaded = true
      }
    )

  }

  public selectCategory(category: Category){
    this.category.value(category)
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
