import { compose } from "redux";
import { connect } from "react-redux";
import { asyncLoader } from "@recruit-tech/redux-async-loader"; // @recruit-tech/redux-asynch-roder から　asyncLoader　をインポート
import { changeVisibility, getComments } from "../../../redux/modules/hello";
import { RootState } from "../../../redux/modules/reducer";
import Hello from "./Hello";

export default compose(
  asyncLoader((props, store) => store.dispatch(getComments())),
  connect(
    (state: RootState) => ({
      isVisible: state.app.hello.isVisible, // store の state の中から、指定した isVisible を props として渡す
      comments: state.app.hello.comments,
    }),
    dispatch => ({
      onChangeVisibility: () => dispatch(changeVisibility()), // changeVisibilityを store に　dispatchする関数を返す
    }),
  ),
)(Hello);
