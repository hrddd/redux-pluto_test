import { compose } from "redux";
import { connect } from "react-redux";
import { changeVisibility, getComments } from "../../../redux/modules/hello";
import { RootState } from "../../../redux/modules/reducer";
import Hello from "./Hello";

export default compose(
  connect(
    (state: RootState) => ({
      isVisible: state.app.hello.isVisible, // store の state の中から、指定した isVisible を props として渡す
      comments: state.app.hello.comments,
    }),
    dispatch => ({
      onChangeVisibility: () => dispatch(changeVisibility()), // changeVisibilityを store に　dispatchする関数を返す
      onClickGetComments: () => dispatch(getComments() as any),
    }),
  ),
)(Hello);
