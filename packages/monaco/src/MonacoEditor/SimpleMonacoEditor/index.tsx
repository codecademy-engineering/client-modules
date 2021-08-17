import { css, Global } from '@emotion/react';
import Editor from '@monaco-editor/react';
import type { editor as EditorType } from 'monaco-editor';
import React, { Component } from 'react';
import ReactResizeDetector from 'react-resize-detector';

import { Monaco, MonacoFile } from '../types';

const innerEditorStyles = css`
  & .monaco-editor.rename-box,
  .monaco-hover {
    top: 0;
  }
`;

const InnerEditor = () => <Global styles={innerEditorStyles} />;

export type SimpleMonacoEditorProps = {
  file: MonacoFile;
  languageId?: string;
  onChange?: (newValue: string) => void;
  options: EditorType.IStandaloneEditorConstructionOptions;
  setEditor: (editor: EditorType.IStandaloneCodeEditor) => void;
  setMonaco: (monaco: Monaco) => void;
};

export class SimpleMonacoEditor extends Component<SimpleMonacoEditorProps> {
  editor?: EditorType.IStandaloneCodeEditor;

  shouldComponentUpdate(prevProps: SimpleMonacoEditorProps) {
    return (
      this.props.file !== prevProps.file ||
      this.props.languageId !== prevProps.languageId
    );
  }

  editorDidMount = (editor: EditorType.IStandaloneCodeEditor) => {
    this.editor = editor;
    this.props.setEditor(editor);
  };

  editorWillMount = (monaco: Monaco) => {
    this.props.setMonaco(monaco);
  };

  render() {
    return (
      <ReactResizeDetector
        onResize={(width: number, height: number) => {
          width > 0 && height > 0 && this.editor?.layout();
        }}
        refreshMode="debounce"
        refreshRate={500}
      >
        <>
          <InnerEditor />
          <Editor
            onMount={this.editorDidMount}
            beforeMount={this.editorWillMount}
            onChange={this.props.onChange}
            options={this.props.options}
            theme={this.props.options.theme}
            value={this.props.file.content}
          />
        </>
      </ReactResizeDetector>
    );
  }
}
