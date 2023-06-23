import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
//import PropTypes from 'prop-types'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize : 6 ,
    category : 'general',
  }

  // static PropTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // }

  
  articles = [
    
      
    
  ];

  
  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page:1,
    };
  }
  
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2a5162283c8e41708a481ff324962363&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({articles: parseddata.articles , totalResults: parseddata.totalResults})

  }
  
  handlenext = async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2a5162283c8e41708a481ff324962363&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      page:this.state.page + 1,
      articles: parseddata.articles,
      loading: false
    })
    
  }
  handleprevious = async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2a5162283c8e41708a481ff324962363&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      page:this.state.page - 1,
      articles: parseddata.articles,
      loading: false
    })
  }
  render() {
    return (
      <center>
      <div className="container my-3" style={{ margin: 'auto'}}>
        <center><h1  >Top Headlines</h1></center>
        {this.state.loading && <Spinner/>}
        <div className="my-4 row" >
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url} >
                <NewsItem 
                  title={element.title?element.title.slice(0,63):""}
                  description={element.description?element.description.slice(0,88):""}
                  imageurl={element.urlToImage?element.urlToImage:"https://i.ytimg.com/vi/l8BOgE74rDQ/maxresdefault.jpg"}
                  newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        
        
        <div className="container d-flex justify-content-between">
        
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handleprevious}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handlenext}>Next &rarr;</button>

        </div>
      </div>
      </center>
    );
  }
}

export default News;
