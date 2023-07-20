import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PersonagensService } from './personagens.service';
@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent  
{
  title = 'personagens';
  personagensData:any;
  constructor(private _persoservice:PersonagensService)
  {

  }
  ngOnInit()
  {
    this._persoservice.getdata().subscribe(res => {this.personagensData = res})
  }
}
