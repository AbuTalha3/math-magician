import React, { useEffect, useState } from 'react';

function generateUniqueKey() {
  return Math.random().toString(36).substr(2, 9);
}

function Quote() {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = 'KQG6fGyeBvd4mkHRbhNYCQ==pTuz7An1CexOmQgj';
  const category = 'courage';
  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: { 'X-Api-Key': API },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setQuote(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>loading quote</p>;
  }
  if (error) {
    return <p>error in loading quote</p>;
  }
  return (
    <div>
      <ul>
        {quote.map((dailyquote) => (
          <li key={dailyquote.id ? dailyquote.id : generateUniqueKey()}>
            <p>{dailyquote.quote}</p>
            <p>{dailyquote.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quote;
