import { Component, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {
  MAT_DIALOG_DATA,
  MatDialogRef,

} from '@angular/material/dialog';
import { DialogData } from '../home/home.component';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrl: './dialog-overview.component.scss'
})
export class DialogOverviewComponent {
  constructor(
    private toaster : ToastrService,
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,

  
  ) {}

  idFormControl = new FormControl("", [Validators.required]);
  nameFormControl = new FormControl("", [Validators.required])
  departmentFormControl = new FormControl("", [Validators.required])
  addressFormControl = new FormControl("", [Validators.required])
  cityFormControl = new FormControl("", [Validators.required])
  stateFormControl = new FormControl("", [Validators.required])

  onNoClick(): void {
    this.dialogRef.close();
  }


  onSubmit(){
    if(this.idFormControl.invalid || this.nameFormControl.invalid || this.departmentFormControl.invalid || this.addressFormControl.invalid || this.cityFormControl.invalid || this.stateFormControl.invalid){
    this.toaster.error("Fill out all the fields!!");
      console.log("Error!")
    }

    else{
      console.log("Do Something!");
    }
  }

}
