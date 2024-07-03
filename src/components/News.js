import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am a constructor from News Component");

    this.state = {
      articles: [],
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>News Honey Top Headlines</h2>
        <div className="row">
          <div className="col md-3 my-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
          <div className="col md-3 my-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
          <div className="col md-3 my-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
