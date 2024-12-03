import NewsItem from "./NewsItem";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  //it is used to capataliize the first letter of title
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(60);
    console.log(parseData);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(parseData.loading);
    props.setProgress(100);
  };

  useEffect(() => {
    
    document.title = `${capitalizeFirstLetter(
      props.category
    )}- Chai&News`;
    updateNews();
  }, []);
  // async componentDidMount() {
  //   //componanatDidMount will run after render
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=95e92d43f9ba4b5d88e4f09434dd6784&page=1pageSize=${props.pageSize}`;
  //   // setState({loading: true})
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // console.log(parseData);
  //   // setState({
  //   //   articles : parseData.articles,
  //   //    totalResults : parseData.totalResults,
  //   //    loading: false
  //   //   });
  //   updateNews();
  // }

  // const handlePrevClick = async () => {
  //   setPage(page-1);
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //   setPage(page+1);
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    // setState({ loading: true });
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        Chai&News - Top Headlines from {capitalizeFirstLetter(props.category)}
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {!loading &&
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      descriptrion={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button
            disabled={state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePrevClick}
          >
            &laquo; Previous
          </button>
          <button
            disabled={
              state.page + 1 >
              Math.ceil(state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &raquo;
          </button>
        </div> */}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
