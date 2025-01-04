'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Footer from "./component/Footer";

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);
  const [hydrated, setHydrated] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const fetchArticles = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/news`, { params: { q: query || 'default' } });
        setArticles(res.data.articles);
      } catch (err) {
        console.error("Error fetching articles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [hydrated, query]);

  if (!hydrated) return null;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setQuery('');
  };

  const footer = articles.length > 0;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Newsvibe</a>
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-1"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <div className="news-container">
        <h1>Fresh Daily News</h1>
        {loading ? (
          <p>Loading...</p>
        ) : articles.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          <div className="cardo">
            {articles.map((article, index) => (
              <div className="cardi" key={index}>
                <img
                  src={article.urlToImage || 'https://via.placeholder.com/150'}
                  alt={article.title}
                  className="card-img"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
                />
                <div className="card-bodyi">
                  <h3 className="card-titlei">{article.title}</h3>
                  <p className="card-texti">{article.description}</p>
                  <Link
                    className="btn btn-primary"
                    href="/learnmore"
                    onClick={() => localStorage.setItem('selectedArticle', JSON.stringify(article))}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer data={footer} />
    </>
  );
};

export default NewsComponent;
