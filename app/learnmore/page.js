'use client';

import React, { useState, useEffect,useRouter } from 'react';
import Nav from '../component/Nav'
import Footer from '../component/Footer';

const LearnMorePage = () => {
  const [article, setArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedArticle = localStorage.getItem('selectedArticle');
    if (storedArticle) {
      setArticle(JSON.parse(storedArticle)); // Parse stored JSON data



    }


  }, []);

  if (!article) {
    return <div>Loading...</div>;
  }










  return (
    <>
    <Nav/>
    <div style={{width:"80%",margin:"30px"}} className='lcon'>
    
      <img
        src={article.urlToImage || 'https://via.placeholder.com/150'}
        alt={article.title}
        style={{ width: '100%', height: 'auto' }}
      />
       <h1 className='h1l'>{article.title}</h1>
      <p>{article.description}</p>
      <p>{article.content}</p>
    </div>
    <Footer/>
    </>
  );
};

export default LearnMorePage;
