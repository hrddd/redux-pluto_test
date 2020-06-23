import React from "react";
import { Field } from "redux-form";

type Props = {
  // props の型定義
  isVisible: boolean;
  comments: {
    id: string;
    text: string;
  }[];
  onClickGetComments: Function;
  onChangeVisibility: Function;
};

export default function Hello(props: Props) {
  const { isVisible, comments, onClickGetComments, onChangeVisibility } = props;
  return (
    <div>
      {isVisible &&
        comments.map(comment => <div key={comment.id}>{comment.text}</div>)}
      <button type="button" onClick={() => onClickGetComments()}>
        get comments
      </button>
      <button type="button" onClick={() => onChangeVisibility()}>
        {isVisible ? "hide" : "show"}
      </button>
      <div>
        <Field name="text" component="input" type="text" />
      </div>
    </div>
  );
}
