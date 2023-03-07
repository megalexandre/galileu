import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { PlaceComponent } from './../place.component';

@Component({
  selector: 'ngx-place-add',
  templateUrl: './place-add.component.html',
  styleUrls: ['./place-add.component.scss']
})
export class PlaceAddComponent extends PlaceComponent implements OnInit {

  ngOnInit(): void {
    this.createForm()
  }

  override createForm(): void {
    this.form = this.formBuilder.group({
      number: [null, Validators.required],
      letter: [null, Validators.required],
      address: [null, Validators.required],
      other: [null],
      hasHydrometer: [null]
    })

  }

  override commit(): void {
    this.service.save(this.form.value).subscribe(

      () => {
        this.toastrService.success(`Sucesso`, `Novo Registro adicionado`)
        this.router.navigate(['../list'],{relativeTo: this.activatedRoute})
      },
      (response) =>{
        this.toastrService.danger(response.error.detail, `Não foi possivel realizar a ação`)
      }

    )
  }

}
