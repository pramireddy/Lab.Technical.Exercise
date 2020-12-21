// import { RepositoryService } from './../../shared/repository.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSelectModule  } from '@angular/material/select';

import { MatDialog } from '@angular/material/dialog';
// import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
// import { ErrorHandlerService } from '../../shared/error-handler.service';

interface IArtist {
  id: number;
  name: string;
}

interface IAlbumType {
  id: number;
  name: string;
}

interface IAlbumLabel{
  id: number,
  name : string
}

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent implements OnInit {

  public ownerForm: FormGroup = new FormGroup({});
  private dialogConfig;
  selectedCar: string;
  selectedValue : string;

  constructor(private location: Location, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ownerForm = this.fb.group({
      name: ['', [Validators.required]],
      artist: ['', [Validators.required]],
      label: ['', [Validators.required]],
      type: ['', [Validators.required]],
      stock: ['', [Validators.required]],
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    }
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
 
  public onCancel = () => {
    this.location.back();
  }
  public createOwner = (ownerFormValue) => {
    if (this.ownerForm.valid) {
      console.log(ownerFormValue);
    }
  }
  types: IAlbumType[] = [
    {id: 111, name: 'Vinyl'},
    {id: 222, name: 'CD'}

  ];

  artits: IArtist[] = [
    {id: 111, name: 'Artist111'},
    {id: 222, name: 'Artist222'},
    {id: 333, name: 'Artist333'},
  ];

  labels : IAlbumLabel[] =[
    {id:111,name :'Lable111'},
    {id:222,name :'Lable222'},
    {id:222,name :'Lable222'},
    {id:222,name :'Lable222'},
  ]

}
