import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am a constructor from News Component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4b2932bc9bde461ba5bbc592d155dfe0&page=1";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles });
    console.log(parsedData);
  
  }

  handleNextClick = async () => {

    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4b2932bc9bde461ba5bbc592d155dfe0&page=' + this.state.page + 1;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles });
    this.setState({ page: this.state.page + 1 })
    
  }
  handlePreviousClick = async () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4b2932bc9bde461ba5bbc592d155dfe0&page=' + this.state.page - 1;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles });
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News Honey Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col md-4 my-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-secondary mx-2" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button type="button" className="btn btn-secondary mx-2" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    );
  }
}

export default News;
