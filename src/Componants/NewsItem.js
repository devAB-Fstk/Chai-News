import React from 'react'

 const NewsItem = (props) => {

    let {title, description, imageUrl, newsUrl, author, date} = props;

    return (
      <div className='my-3'>
        <div>
      <div className="card">
        <img src={imageUrl?imageUrl : "https://images.cnbctv18.com/uploads/2024/06/image-for-stss-2024-06-c9579414abbef62fff3896761d75c282.jpg?im=FitAndFill,width=500,height=300"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href= {newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
      </div>
    )
  
}

export default NewsItem
