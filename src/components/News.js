import React, {Component} from 'react';
import '../static/main.css';
import  NavRow  from './Nav';



class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news : []
        }
    }

    componentDidMount() {
        this.getNews()
    }

    getNews(){
        var url = 'http://newsapi.org/v2/top-headlines?' +
                  'country=in&' +
                  'apiKey=4e0b527470c64e229ae8ac6dfe87342e';
        fetch(url)
        .then(response => response.json())
        .then(data => 
            // console.log(data.articles),
            this.setState({
                news : data.articles
            }, () => console.log(this.state.news))
            );
        

    }

    render() {
        let news = '';
        if (this.state.news) {
            news = this.state.news.map((news, index) => {
                return ( 
                    <div className="col-md-5 col-sm-12 box p-3 ml-5 mt-3 mb-3" key={index}>
                        <p>{news.source.name}</p>
                        <img src={news.urlToImage} height={'200px'} />
                        <h5 className="font-weight-bold">{news.title}</h5>
                        <h5>{news.description}</h5>
                        <a href={news.url} target='_blank'>See more</a>
                        </div>
                )
            } )
        }
        else {
            news = <div className="col-12 alert alert-info mt-2">No records found</div>
          }

        return (
            <div className='container'>
                <NavRow />
                <div className='row main'>
                        {news}
                </div>
            </div>
        )
    }
}

export default News ;