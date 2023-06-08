import { useEffect, useState } from 'react';
import './quote.css';

const QUOTE_URL = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

const getQuote = (setQuote, setIsLoading) => {
  fetch(QUOTE_URL,
    {
      headers: { 'X-API-Key': 'OQMxh7WYLB6j8R6tH7+o9Q==mZ1JYBiUeBu8tssM' },
    })
    .then((result) => result.json())
    .then((oneQuote) => {
      setIsLoading(true);
      setQuote({ ...oneQuote[0] });
    })
    .catch(() => {
      setQuote({
        quote: null, author: null, category: null, error: 'API Server Failed',
      });
    })
    .finally(() => {
      setIsLoading(false);
    });
};
const Quote = () => {
  const [quote, setQuote] = useState({
    quote: null, author: null, category: null, error: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      getQuote(setQuote, setIsLoading);
    }, 10000);
    return () => clearInterval(interval);
  }, [quote]);

  if (isLoading) {
    return (
      <div className="main-content quote">
        <div className="loading" />
      </div>
    );
  }

  return (
    <section className="quote-section">
      <div className="quotes">
        <div>{quote.error}</div>
        <div>{quote.quote}</div>
        <div>
          Category:
          {quote.category}
        </div>
        <div>
          &quot;
          {quote.author}
          &ldquo;
        </div>
      </div>
    </section>
  );
};

export default Quote;
