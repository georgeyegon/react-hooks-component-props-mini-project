import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Calculate the minutes to read display
  const getReadTime = (minutes) => {
    const symbol = minutes < 30 ? "☕️" : "🍱";
    const repeatCount = Math.ceil(minutes / (minutes < 30 ? 5 : 10));
    return `${symbol.repeat(repeatCount)} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{getReadTime(minutes)}</small>
    </article>
  );
}

export default Article;
