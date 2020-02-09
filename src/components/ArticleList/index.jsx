/* eslint-disable react/prop-types */
import React from 'react';
import Articles from '../Article';
import './style.scss';

export default function ArticleList({ articles }) {
  const articlesElements = articles.map((article, index) => <li key={article.id} className="article_list--li"><Articles article={article} defaultOpen={index === 0} /></li>);
  return (
    <ul>
      {articlesElements}
    </ul>
  );
}
