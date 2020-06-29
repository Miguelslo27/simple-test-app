import React, { Component } from "react";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditorComponent from "react-froala-wysiwyg";
import FroalaEditor from "froala-editor";

import "./styles.css";

FroalaEditor.DefineIcon("insert", { NAME: "plus", SVG_KEY: "add" });
FroalaEditor.RegisterCommand("insert", {
  title: "Insert HTML",
  focus: true,
  undo: true,
  refreshAfterCallback: true,
  callback: function() {
    this.html.insert("My New HTML");
  }
});

var editor;
console.log(editor);

export class App extends Component {
  state = {
    stateValue: true
  };

  render() {
    return (
      <div className="App">
        <FroalaEditorComponent
          config={{
            //toolbarButtons: ["bold", "insert"],
            events: {
              initialized: function() {
                editor = this;
              }
            }
          }}
          tag="textarea"
        />
      </div>
    );
  }
}

export default App;
