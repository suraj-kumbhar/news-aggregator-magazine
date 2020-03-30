import React, { useState, useEffect } from "react";
import News from "./News";

export default function NewsList(props) {
  const { search } = props;
  const [news, setNews] = useState([]);
  const [currentNews, setCurrentNews] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=50")
      .then(response => response.json())
      .then(json => setNews(json));
  }, []);

  const fetchId = () => id => {
    setCurrentNews(news.filter(x => x.id === id));
  };

  const filterdComponent = news.map((x, i) =>
    x.title.includes(search) ? (
      <div className="news_list" key={"news_" + i}>
        <span onClick={e => fetchId(e)(x.id)}>{x.title.slice(0, 20)}</span>
      </div>
    ) : (
      ""
    )
  );

  return (
    <div className="grid">
      <div className="newsList">{[...filterdComponent]}</div>{" "}
      <News news={currentNews}></News>
    </div>
  );
}
