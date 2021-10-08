import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Eval } from 'src/app/models/Eval';

@Component({
  selector: 'app-eval-form',
  templateUrl: './eval-form.component.html',
  styleUrls: ['./eval-form.component.css']
})
export class EvalFormComponent implements OnInit {

  @Output() evalAdded = new EventEmitter<Eval>();

  public eval: Eval = {
    evaluateur: "",
    commentaire: "",
    etoiles: 0
  }
  
  @ViewChild("form", { static : true }) form: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  public save() : void {
    if(this.form && this.form.valid) {
      this.evalAdded.emit(this.eval);
      this.eval = {
        evaluateur: "",
        commentaire: "",
        etoiles: 0
      }
    }
  }

}
