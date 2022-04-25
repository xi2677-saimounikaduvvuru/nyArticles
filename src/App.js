import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
    try {
        const res = await fetch (`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=l4xA9o6wx17qGbAL9gKYkn2UrwdjVWAF`)
        const articles = await res.json();
        console.log(articles);
        setArticles(articles.results);
        console.log(articles.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchArticles();
  }, []);

  return (
    <>
      <section>
        {articles.map((article) => {
            const {title, abstract, byline, updated, url} = article;
            return (
              <article key={article.id}>
                <a href={article.url} target="_blank"><h2>{article.title}</h2></a>
                <span>{article.abstract}</span>
                <h6>{article.updated}</h6>
              </article> 
            )
        })}
      </section>
    </>
  );
}

export default App;
