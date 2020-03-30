import React from "react";

export default function News(props) {
  const { news } = props;
  return news.map(x => (
    <div className="news">
      <h1>{x.title}</h1>
      <p>{x.body}</p>
    </div>
  ));
}
