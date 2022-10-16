export function constructor() {
 super(); this.state = {
  commentValue: “”,
  commentLine: [{ commentId:””, text: “”, }],
  };
}

handleCommentValue = (e) => {this.setState({
  commentValue: e.target.value,
 });
};

render() {
 return (
  <>
  ...  <CommentBox
    commentValue={this.state.commentValue}
    handleCommentValue={this.handleCommentValue}
    enterCommentLine={this.enterCommentLine}
    submitCommentLine={this.submitCommentLine}
  />

  </>