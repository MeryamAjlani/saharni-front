import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    constructor(private modalService: NgbModal, private auth: AuthentificationService, private router: Router) {}
    closeResult = '';
    user: any = null;
    loading = false;
    ngOnInit(): void {
      this.user = this.auth.getUser();
    }

    open(content): void {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true , size : 'm'}).result.then((result) => {
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
    login(form: NgForm): void{
      if (form.valid) {
        this.loading = !this.loading;
        console.log(this.loading);
        const email = form.value.email;
        const pass = form.value.password;
        this.auth.authenticate({
          email,
          password: pass
        }).subscribe(data => {
            console.log(this.loading);
            this.loading = !this.loading;
            console.log(this.loading);
            this.modalService.dismissAll();
            this.user = this.auth.getUser();
            this.gotoProfile()
        },
        err => {
          this.loading = !this.loading;
          console.log(err);
        });
      }
    }
    register(form: NgForm): void {
      if (form.valid) {
        this.loading = !this.loading;
        const email = form.value.email;
        const pass = form.value.password;
        const fname = form.value.fname;
        const lname = form.value.lname;
        this.auth.register({
          email,
          password: pass,
          firstName: fname,
          lastName: lname,
        }).subscribe(data => {
          this.loading = !this.loading;
          console.log(data);
          this.modalService.dismissAll();
          this.gotoProfile()
          console.log(data);
        },
        err => {
          this.loading = !this.loading;
          console.log(err);
        });
      }
    }

    logout(): void {
      this.auth.logOut();
      this.user = null;
      this.router.navigate(['/']);
    }

    isLoggedIn(): boolean {
      return this.auth.isUserLoggedIn();
    }

    gotoProfile(): void {
      this.router.navigate(['client', 'profile']);
    }

}
