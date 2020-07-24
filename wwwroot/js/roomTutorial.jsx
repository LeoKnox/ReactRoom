class CommentBox extends React.Component {
    render() {
        return (
            <div className="commentBox">Hello, lets create some rooms.</div>
        );
    }
}

ReactDom.render(<CommentBox />, document.getElementById('content'));