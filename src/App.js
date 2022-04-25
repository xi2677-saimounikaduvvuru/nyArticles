import './App.css';
import React, {useState, useEffect} from 'react';
import { RiCalendarEventFill } from 'react-icons/ri';
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
                <a href={article.url}><h4>{article.title}</h4></a>
                {/* <span>{article.abstract}</span><br/><br/> */}
                <div>{article.byline} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<RiCalendarEventFill /> {article.updated.slice(0,10)}</div>
              </article> 
            )
        })}
      </section>
    </>
  );
}

export default App;
