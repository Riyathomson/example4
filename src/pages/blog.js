import React from 'react';
import Footer from './footer';
import Header from './header';

class Blog extends React.Component{
    render(){
        return(
            <div>
               
               <Header/>
<br></br>
<br></br>

<section id="recent-blog-posts" className="recent-blog-posts">
              <div className="container" data-aos="fade-up" >
                <div className=" section-header">
                  <h2>Recent Blog Posts</h2>
                  <p>In commodi voluptatem excepturi quaerat nihil error autem voluptate ut et officia consequuntu</p>
                </div>
                <div className="row gy-5">
                  <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                    <div className="post-item position-relative h-100">
                      <div className="post-img position-relative overflow-hidden">
                        <img src="assets/img/blog/blog-1.jpg" className="img-fluid" alt />
                        <span className="post-date">December 12</span>
                      </div>
                      <div className="post-content d-flex flex-column">
                        <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>
                        <div className="meta d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-person" /> <span className="ps-2">Julia Parker</span>
                          </div>
                          <span className="px-3 text-black-50">/</span>
                          <div className="d-flex align-items-center">
                            <i className="bi bi-folder2" /> <span className="ps-2">Politics</span>
                          </div>
                        </div>
                        <hr />
                        <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
                      </div>
                    </div>
                  </div>{/* End post item */}
                  <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                    <div className="post-item position-relative h-100">
                      <div className="post-img position-relative overflow-hidden">
                        <img src="assets/img/blog/blog-2.jpg" className="img-fluid" alt />
                        <span className="post-date">July 17</span>
                      </div>
                      <div className="post-content d-flex flex-column">
                        <h3 className="post-title">Et repellendus molestiae qui est sed omnis</h3>
                        <div className="meta d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-person" /> <span className="ps-2">Mario Douglas</span>
                          </div>
                          <span className="px-3 text-black-50">/</span>
                          <div className="d-flex align-items-center">
                            <i className="bi bi-folder2" /> <span className="ps-2">Sports</span>
                          </div>
                        </div>
                        <hr />
                        <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
                      </div>
                    </div>
                  </div>{/* End post item */}
                  <div className="col-xl-4 col-md-6">
                    <div className="post-item position-relative h-100" data-aos="fade-up" data-aos-delay={300}>
                      <div className="post-img position-relative overflow-hidden">
                        <img src="assets/img/blog/blog-3.jpg" className="img-fluid" alt />
                        <span className="post-date">September 05</span>
                      </div>
                      <div className="post-content d-flex flex-column">
                        <h3 className="post-title">Quia assumenda est et veritati tirana ploder</h3>
                        <div className="meta d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-person" /> <span className="ps-2">Lisa Hunter</span>
                          </div>
                          <span className="px-3 text-black-50">/</span>
                          <div className="d-flex align-items-center">
                            <i className="bi bi-folder2" /> <span className="ps-2">Economics</span>
                          </div>
                        </div>
                        <hr />
                        <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
                      </div>
                    </div>
                  </div>{/* End post item */}
                </div>
              </div>
            </section>



<br></br>
<br></br>

<Footer/>


</div>
        );
    }
}

export default Blog;