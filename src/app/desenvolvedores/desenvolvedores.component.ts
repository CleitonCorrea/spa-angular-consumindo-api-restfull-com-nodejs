import { Component, OnInit } from '@angular/core';
import { DesenvolvedorService } from '../desenvolvedor.service';
import { DesenvolvedorModel } from './desenvolvedorModel';

@Component({
  selector: 'app-desenvolvedores',
  templateUrl: './desenvolvedores.component.html',
  styleUrls: ['./desenvolvedores.component.css']
})

export class DesenvolvedoresComponent implements OnInit {

  developer: DesenvolvedorModel = new DesenvolvedorModel();
  developers: Array<any> = new Array();

  constructor(private devService: DesenvolvedorService ) { }

  ngOnInit() {
    this.listDeveloper();
  }

  listDeveloper() {
    this.devService.listDeveloperService().subscribe(developers => {
      this.developers = developers;
    }, err => {
      console.log('erro: ' + err);
    } );
  }

  createDeveloper() {
   // console.log(this.developer);
    this.devService.createDeveloperService(this.developer)
    .subscribe(dev => {
      this.developer = new DesenvolvedorModel();
      this.listDeveloper();
    },
      err => {
        console.log('Erro: ' + err);
      }
      );
  }

  updateDeveloper(id: number) {
    // console.log(this.developer);
     this.devService.updateDeveloperService(id, this.developer)
     .subscribe(dev => {
       this.developer = new DesenvolvedorModel();
       this.listDeveloper();
     },
       err => {
         console.log('Erro: ' + err);
       }
       );
   }

   removeDeveloper(id: number) {
    // console.log(this.developer);
     this.devService.removeDeveloperService(id)
     .subscribe(dev => {
       this.developer = new DesenvolvedorModel();
       this.listDeveloper();
     },
       err => {
         console.log('Erro: ' + err);
       }
       );
   }

}
