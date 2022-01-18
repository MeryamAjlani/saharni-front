import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private modalService: NgbModal, private auth:AuthentificationService) {

   }
  closeResult = '';
  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered:true , size :'m'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  login(form:NgForm): void{
    if(form.valid){
     let email = form.value['email']
     let pass = form.value['password']
     this.auth.authenticate({
       email:email,
       password:pass
     }).subscribe(data=>{
       console.log(data)
     },
     err=>{
       console.log(err)
     })
    }
  }
  register(form:NgForm){
    console.log(form)
    if(form.valid){
      let email = form.value['email']
      let pass = form.value['password']
      let fname=form.value['fname']
      let lname=form.value['lname']
      this.auth.register({
        email:email,
        password:pass,
        firstName:fname,
        lastName:lname,
      }).subscribe(data=>{
        console.log(data)
      },
      err=>{
        console.log(err)
      })
     }
  }

}
