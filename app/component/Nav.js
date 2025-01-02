'use client';
import React from 'react'
import { useState } from 'react';
const  nav = () => {
const [query, setquery] = useState('');


function handlesub(e){
  e.preventDefault()

  setquery('');
}
  return (
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand">NewsVibe</a>
      <form className="d-flex" role="search" onSubmit={handlesub}>
        <input className="form-control me-2" value={query} onChange={(e)=>{
          setquery(e.target.value);
        }} type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
}

export default nav