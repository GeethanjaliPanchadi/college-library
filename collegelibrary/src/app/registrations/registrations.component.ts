import { Component } from '@angular/core';
import { RegistrationsService } from '../Services/registrations.service';
import { Registrations } from '../Models/registrations';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent {
  login!: FormGroup;
  student:Registrations=new Registrations();
 
  constructor(private service:RegistrationsService,private form:FormBuilder){
    this.login=this.form.group({
      username:['',[Validators.required,Validators.maxLength(10),Validators.minLength(4)]],
      name:['',[Validators.required,Validators.maxLength(15),Validators.minLength(4)]],
      password:['',[Validators.required,Validators.maxLength(15),Validators.minLength(6),Validators.pattern('/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g')]]
    })
  }
  ngOnInit():void{}
 
  submit():void{
    this.service.onsubmit(this.student).subscribe(
      response=>{
        console.log("successfully registered",response);
        Swal.fire("Successfully Inserted!",'success','error');
      },
      error=>{
        console.log("Error",error);
        Swal.fire("Error");
      }
    )
  }
}
