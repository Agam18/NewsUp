import React, { Component } from "react";
import './NewsI.css';
export class NewsItem extends Component {
  //let {title,description,imageurl}=this.props;
  render() {
    let {
      title,
      description,
      imageurl,
      newsurl,
      author,
      date,
      source,
    } = this.props;
    return (
      <div>
        <div className="card card-container my-3 bg-light w3-hover-shadow">
          <div className="image-container my-2">
            <img
              src={imageurl}
              className="card-img-top"
              alt="..."
              style={{ height: "214px", width: "390px" }}
            />
          </div>
          <div className="card-body">
          <span
                class="position-absolute top-0 my-3 translate-middle badge rounded-pill bg-danger"
                style={{ left: "81%", zIndex: "1" }}
              >
                {source}
              </span>
            <h5 className="card-header text-white bg-dark card-title">
              {title}...
              
            </h5>
            <p className="card-text">{description}...</p>
            <center>
            <a href={newsurl} className="btn-sm btn-primary w3-button w3-green">
              Read More
            </a>
            </center>
            <p class="card-text">
              <small class="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
    // <div class="container">
    //   <div class="post">
    //     <div class="header_post">
    //       <img src={imageurl} alt="" />
    //     </div>

    //     <div class="body_post">
    //       <div class="post_content">
    //         <h1>
    //           {title}...
    //           <span
    //             class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
    //             style={{ left: "90%", zIndex: "1" }}
    //           >
    //             {source}
    //           </span>
    //         </h1>
    //         <p>{description}...</p>

    //         <div class="container_infos">
    //           <div class="postedBy">
    //             <small class="text-muted">
    //               By {!author ? "Unknown" : author} on{" "}
    //               {new Date(date).toGMTString()}
    //             </small>
    //           </div>

    //           <div class="container_tags">
    //             <span>tags</span>
    //             <div class="tags">
    //               <ul>
    //                 <li>design</li>
    //                 <li>front end</li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  }
}

export default NewsItem;
