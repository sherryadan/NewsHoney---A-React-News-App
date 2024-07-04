import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>News Honey Top Headlines</h2>
        <div className="row">
          <div className="col md-3 my-4">
            <NewsItem
              title="mytitle"
              description="mydesc"
              imageUrl="https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1719939575/aolsemphnbubil6dqqu1.jpg"
            />
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
