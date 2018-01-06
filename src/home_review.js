import './home_review.css';
import 'react-select/dist/react-select.css';

import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom'
  


import axios from 'axios';

class home_review extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }



        this.handleChange = this.handleChange.bind(this);
    }



    handleChange = (selectedOption) => {
        this.setState({
            ...this.state,
            selectedOption: selectedOption,
        });
    }

    render() {
        return (
            <div className="App2">





                <div className="col-md-1"></div>

                <div className="col-md-10">

                    <div className="jumbotron">
                        <h1>Hello, world!</h1>
                        <p>...</p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                    </div>


                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                     {/* search bar */}
                     <link rel='stylesheet prefetch' href='http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'/>

<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#MainMenu">
    <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
</button>
<a id="logo" className="navbar-brand" href="#link" title="">
   <h1> รีวิว </h1>
</a>
<nav className="site-nav" role="navigation">
    <div className="collapse navbar-collapse" id="MainMenu">
        <ul className="nav navbar-nav pull-right">
            <li className="dropdown menu-background">
                <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">
                    หมวดหมู่ <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                <ul className="dropdown-menu mega-dropdown-menu">
                    <li> <a href="#link">สายลุย</a> </li>
                    <li> <a href="#link">สายชิค</a> </li>
                    <li> <a href="#link">สายเรื่องราว</a> </li>
                    <li> <a href="#link">สายธรรมชาติ</a> </li>
                    
                </ul>
            </li>
          
      
       
        </ul>
    </div>
</nav>
<div id="search-form" className="search-form js-search-form">
    <form className="form-search" role="search" action="/search.php" method="get">
        <div className="input-group">
            <input type="text" className="form-control" placeholder="ค้นหารีวิว" />
            <span className="input-group-btn">
                <button className="btn btn-info" type="button">
                    <i className="fa fa-search"></i>
                </button>
            </span>
        </div>
        <p className="clear top-keyword"><span className="hidden-xs">คีย์เวิร์ดยอดนิยม:</span>
            <a href="#" title="Chiangmai">เชียงใหม่</a>,
            <a href="#" title="Phuket">ภูเก็ต</a>,
            <a href="#" title="Bangkok">กรุงเทพ</a>,
            <a href="#" title="Krabi">กระบี่</a>,
            <a href="#" title="Phuket">ภูเก็ต</a>
        </p>
    </form>
    </div>



{/* end search */}
                    </div>
                    <div className="col-md-2"></div>
                     


                    {/* start sihk */}
                    <div className="row" id="FirstNews">

                        <div className="col-md-4 " >
                            <div className="row">

                                <a href="#" className="thumbnail">
                                
                                <img src={require('./image/review1_pic1.jpg')} />
                                </a>
                            </div>

                        </div>

                        <div className="col-md-8 ">

                            <div className="page-header" id="page-header-event">
                                <h1 id="gobrown">ดอยผาผึ้ง หน้าต่างบ้านใหญ่ของชุมชนมณีพฤกษ์</h1>
                            </div>

                            <p>
                            ต้องยอมรับเลยว่า เทรนด์การเที่ยวแบบเจาะลึกและสัมผัสวิถีชีวิตเรียลๆ มาแรงจนหลีกเลี่ยงไม่ได้ วันนี้เราจึงอยากอาสาพาส่องชุมชนที่แฝงตัวอยู่ท่ามกลางขุนเขาและธรรมชาติสุดอัศจรรย์ซึ่งหลายๆคนอาจจะยังรู้จัก ที่นี่ ชุมชนบ้านมณีพฤกษ์
                            </p>

                            <a type="button" href="/review1" className="btn btn-default" id="news-brownbtn">อ่านเพิ่มเติม</a>

                            <div id="news-spacewithfooter" > </div>

                        </div>
                    </div>




                    <div className="row" id="EachNews">

                        <div className="col-md-4 " >
                            <div className="row">

                                <a href="#" className="thumbnail">
                                <img src={require('./image/review2_pic1.jpg')} />
                                </a>
                            </div>

                        </div>

                        <div className="col-md-8 ">


                      


                            <div className="page-header" id="page-header-event">
                                <h1 id="gobrown">ที่นี่แหละใช่‘เลย’</h1>
                            </div>

                            <p>

                            หากจะพูดถึงการท่องเที่ยวในภาคตะวันออกเฉียงเหนือ เชื่อว่าจังหวัดที่ใครหลาย ๆ คนคิดถึงหนึ่งในนั้นต้องมี “จังหวัดเลย”ติดโพลอยู่แน่นอน เนื่องจากจังหวัดเลยเป็นจังหวัดที่มีสถานที่ชื่อดังอยู่หลายที่ไม่ว่าจะเป็นอุทยานแห่งชาติภูกระดึง อุทยานแห่งชาติภูหินร่องกล้า หรือภูทับเบิก เป็นต้น...
						</p>

                            <button type="button" className="btn btn-default" id="news-brownbtn">อ่านเพิ่มเติม</button>

                        </div>

                    </div>


                    <div className="row" id="EachNews">

                        <div className="col-md-4 " >
                            <div className="row">

                                <a href="#" className="thumbnail">
                                <img src={require('./image/review3_pic1.jpg')} />
                                </a>
                            </div>

                        </div>

                        <div className="col-md-8 ">

                            <div className="page-header" id="page-header-event">
                                <h1 id="gobrown">เหนื่อยล้าให้เข้าป่า ถ้านาคูหาให้มา ‘ผาสิงห์’ </h1>
                            </div>

                            <p>
                            เราเชื่อว่าสายลุย สายปีนเขาต้องชื่นชอบที่นี่แน่ๆ เพราะใครจะไปคิดว่า ชุมชนเล็กๆ อย่างนาคูหา จะมีผาที่เราสามารถปีนขึ้นไปชมวิวมุมสูงจนไม่เสียเหงื่อมากเกินไป
                            </p>

                            <button type="button" className="btn btn-default" id="news-brownbtn">อ่านเพิ่มเติม</button>

                        </div>

                    </div>




                    {/* start paginition */}
                    <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                    </nav>




                </div>

                <div className="col-md-1"></div>



            </div>
        );
    }
}


export default home_review 