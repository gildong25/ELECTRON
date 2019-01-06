import React from "react";
import Editor from "./Editor";
//markdownEditorUI스타일 적용하기
import style from "./markdownEditorUI.css";


export default class MarkdownEditorUI extends React.Component {
    render() {
        return (
            <div className={style.markdownEditor}>
               <Editor
                className={style.editorArea}
                value={this.state.text}
                onChange={this.onChangeText}
               />
            </div>
        );
    }
    
    constructor(props) {
        super(props);
        this.state = { text: ""};
        this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText(e) {
        this.setState({ text: e.target.value });
    }
}
