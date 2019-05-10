import React from "react";

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showlabel: true
    };
    this.myFunction = this.myFunction.bind(this);
  }

  myFunction() {
    var sLb = !this.state.showlabel;
    this.setState({ showlabel: sLb });
  }

  componentDidMount() {
    setInterval(this.myFunction, 1000);
  }

  render() {
    return <div className="news">{this.state.showlabel ? "news" : ""}</div>;
  }
}

export default News;
