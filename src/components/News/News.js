import React, { useState, useEffect } from "react";
import { Button } from "antd";
import axios from "axios";
import "./News.css";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3da128da75bb4e819bb876090635ca8f"
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

//   console.log("news", news);

  return (
    <div className="App_news">
          
      {news &&
        news.map((item, index) => {
          return (
            <div className="news_content" key={index}>
                <h1>News</h1>
            <div className="top_news">
              <div>
              <img
                alt="news"
                className="news-icon"
                src={item.urlToImage}
              />
                <p className="news-title">{item.title}</p>
                <p className="news-description">{item.content}</p>  
              </div>
              <Button className="button" type="primary" >
              Read More
             </Button>
            </div>
            </div>
          );
        })}
    </div>
  );
}

export default News;