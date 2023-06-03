import { useEffect, useState } from 'react';

const QUOTE_URL = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

const getQuote = (setQuote) => {
  fetch(QUOTE_URL,
    {
      headers: { 'X-API-Key': 'OQMxh7WYLB6j8R6tH7+o9Q==mZ1JYBiUeBu8tssM' },
    })
    .then((result) => result.json())
    .then((oneQuote) => {
      setQuote({ ...oneQuote[0] });
    })
    .catch(() => {
      setQuote({ quote: 'API Server Failed', author: null, category: null });
    });
};
const Quote = () => {
  const [quote, setQuote] = useState({ quote: null, author: null, category: null });

  useEffect(() => {
    const interval = setInterval(() => {
      getQuote(setQuote);
    }, 5000);
    return () => clearInterval(interval);
  }, [quote]);

  return (
    <div className="quotes">
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
  );
};

export default Quote;
