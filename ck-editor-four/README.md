# Step to implement ck-editor 4

1. npm i ckeditor4-angular
2. check files app.modulet.ts, app.component.ts and app.component.html

Configuration link - 
1. Toolbar,ToolbarGroup configuration with detail https://ckeditor.com/latest/samples/old/toolbar/toolbar.html
2. Basic Config styling https://ckeditor.com/docs/ckeditor4/latest/features/basicstyles.html
3. ToolbarGroup configuration with detail https://ckeditor.com/docs/ckeditor4/latest/features/toolbarconcepts.html
4. Toolbar basic configuration https://ckeditor.com/docs/ckeditor4/latest/features/toolbar.html
5. ToolbarGroup basic configuration and remove buttons - https://ckeditor.com/docs/ckeditor4/latest/examples/toolbar.html


  public config = {
  
 toolbarGroups:
 
	[{		
	      "name": "basicstyles",
          "groups": ["basicstyles"]
        },
        {
          "name": "links",
          "groups": ["links"]
        },
        {
          "name": "paragraph",
          "groups": ["list", "blocks"]
        },
        {
          "name": "document",
          "groups": ["mode"]
        },
        {
          "name": "insert",
          "groups": ["insert"]
        },
        {
          "name": "styles",
          "groups": ["styles"]
        },
        {
          "name": "about",
          "groups": ["about"]
        }
      ],
      // Remove the redundant buttons from toolbar groups defined above.
      removeButtons: 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar,PasteFromWord'
  });

