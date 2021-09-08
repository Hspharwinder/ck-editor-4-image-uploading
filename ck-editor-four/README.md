# Step to implement ck-editor 4

1. npm i ckeditor4-angular
2. check files app.modulet.ts, app.component.ts and app.component.html

Configuration link - https://ckeditor.com/latest/samples/old/toolbar/toolbar.html
https://ckeditor.com/docs/ckeditor4/latest/features/basicstyles.html
https://ckeditor.com/docs/ckeditor4/latest/features/toolbarconcepts.html
https://ckeditor.com/docs/ckeditor4/latest/features/toolbar.html
https://ckeditor.com/docs/ckeditor4/latest/examples/toolbar.html

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

