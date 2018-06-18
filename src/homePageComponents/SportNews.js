import React, {Fragment} from 'react'


class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: {}
    }
  }


  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=1593cf1386cc434982d4c3460a130776')
      .then((results) => {
        return results.json();
      }).then((data) => {
        let totalArticles = data.articles.length
        const mid = totalArticles === 0 ? 0 : totalArticles / 2
        this.setState({ articles: data.articles, totalArticles, mid })
      });
  }


  render() {
    return (
      <div className='newContainer'>
        <div>
          {Object.keys(this.state.articles).slice(0, this.state.mid).map((article, id) => {
            const articleNews = this.state.articles[article]
            return (
              <div className='news' key={id}>
                <div className='newsImage'>
                  <img src={articleNews.urlToImage || 'http://www.mtmlondon.com/wp-content/uploads/2016/02/635847974891062780-425303270_news1.jpg'} alt={articleNews.description} />
                </div>
                <div>
                  <a className='title' href={articleNews.url} target='_blank'>{articleNews.title}</a>
                  <p className='description'>{articleNews.description}</p>
                  <p className='author'>Author: {articleNews.author || 'Anonymous'}</p>
                  <p className='author'>Source: {articleNews.source.name || 'Anonymous'}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div>
          {Object.keys(this.state.articles).slice(this.state.mid + 1, this.state.totalArticles).map((article, id) => {
            const articleNews = this.state.articles[article]
            return (
              <Fragment className='news' key={id}>
                <div className='newsImage'>
                  <img src={articleNews.urlToImage || 'http://www.mtmlondon.com/wp-content/uploads/2016/02/635847974891062780-425303270_news1.jpg'} alt={articleNews.description} />
                </div>
                <div>
                  <a className='title' href={articleNews.url} target='_blank'>{articleNews.title}</a>
                  <p className='description'>{articleNews.description}</p>
                  <p className='author'>Author: {articleNews.author || 'Anonymous'}</p>
                  <p className='author'>Source: {articleNews.source.name || 'Anonymous'}</p>
                </div>
              </Fragment>
            )
          })}
        </div>
      </div>
    )
  }
}

export default News