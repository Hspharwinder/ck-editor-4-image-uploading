import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ck-editor-four';
  public data:String = "";
    /* Ckeditor  */
    public config = {
      uiColor: '#F0F3F4',
      height: '200',
      toolbarGroups: [
        { name: 'basicstyles', groups: ['basicstyles'] },
        { name: 'links' },
        { name: 'insert' },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align'] },
        /*
        { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
        { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },

        { name: 'insert' },
        // { name: 'tools' },
        { name: 'others' },

        { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align' ] },
        { name: 'styles' },
        { name: 'colors' }*/
      ]
    };
  myForm: FormGroup;
  htmlValue: any;

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
      this.myForm = this.formBuilder.group({
        description: ['initial data', [Validators.required,]],
      });
    }

    submit(): void {

      this.htmlValue = this.myForm.value.description;
      console.log(this.myForm.value.description)
    }
}
