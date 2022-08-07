import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, Router} from 'react-router-dom';
import './App.css';

function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
      fetch("/api/v1/users/session").then(response => response.text())
      .then(hello => {
        setHello(hello)
      });
  }, []);

  return (
            <div>
          <h1>{hello}</h1>
      </div>


  );
}

export default App;
