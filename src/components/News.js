import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

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

  handlePreviousClick = async () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4b2932bc9bde461ba5bbc592d155dfe0&page=' + this.state.page - 1 ;
    let data = await fetch(url);
    this.setState({ loading: true });
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles, loading: false });
    this.setState({ page: this.state.page - 1 })
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4b2932bc9bde461ba5bbc592d155dfe0&page=1";
    let data = await fetch(url);
    this.setState({ loading: true });
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles, loading: false });
    console.log(parsedData);
  
  }

  handleNextClick = async () => {

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      this.setState({ page: this.state.page });
    }
    else {

    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4b2932bc9bde461ba5bbc592d155dfe0&page=" + this.state.page + 1;
    let data = await fetch(url);
    this.setState({ loading: true });
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles, loading: false });
    this.setState({ page: this.state.page + 1 })
    
  }
}

  render() {
    if (!this.state.articles) {
      return null;
    }

    return (
      <div className="container my-3">
        <h2 className="text-center">News Honey Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {this.state.articles.map((element) => {
            if (!element) {
              return null;
            }
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
        <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary mx-2" onClick={this.handlePreviousClick}>
          &larr; Previous
        </button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-secondary mx-2" onClick={this.handleNextClick}>
          Next &rarr;
        </button>
        </div>
      </div>
    );
  }
}

export default News;
