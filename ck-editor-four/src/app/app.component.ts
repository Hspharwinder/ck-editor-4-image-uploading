import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ck-editor-four';

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
}
