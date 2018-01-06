import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom'
  



class review1 extends Component {

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
            <div className="review1">

<div className="col-md-2"></div>


<div className="col-md-8">


<div className = "review1">  

<br/>

<br/>

<br/>

<center>
<h2> ดอยผาผึ้ง - หน้าต่างบ้านใหญ่ของชุมชนมณีพฤกษ์ </h2>
</center>

<br/>
<br/>
<br/>

<p> 
	ต้องยอมรับเลยว่า เทรนด์การเที่ยวแบบเจาะลึกและสัมผัสวิถีชีวิตเรียลๆ มาแรงจนหลีกเลี่ยงไม่ได้ วันนี้เราจึงอยากอาสาพาส่องชุมชนที่แฝงตัวอยู่ท่ามกลางขุนเขาและธรรมชาติสุดอัศจรรย์ซึ่งหลายๆคนอาจจะยังรู้จัก ที่นี่ ชุมชนบ้านมณีพฤกษ์</p>


    <br/>

    <a className="thumbnail">
                                    <img src={require('./image/review1_pic1.jpg')} />
    </a>

    <p> ขอเปิดหน้าต่างด้วยกับวิวกว้างๆ อย่าง ‘ดอยผาผึ้ง’ ที่ซ่อนตัวอยู่หลังหมู่บ้าน กับวิวพาโนราม่าสุดลูกหูลูกตา โดยสามารถนิยามได้ว่า ใช้กล้องอะไรถ่ายออกมาก็สวย</p>
    <br/>

    <a className="thumbnail">
    <img src={require('./image/review1_pic3.jpg')} />
    </a>

    {/* <br/> */}
    <p> วิธีเดินทางขึ้นไปยังที่นี่ก็ไม่ยาก แค่ติดต่อเจ้าหน้าที่ในชุมชนให้หารถให้ เสียค่าใช้จ่าย 700 บาท ขึ้นได้ 10 คน ไม่ต้องเดินหรือปีนให้เหนื่อย.. แค่นี้ก็ได้สัมผัสกับวิวสวยๆของหน้าต่างบานใหญ่ของชุมชนมณีพฤกษ์แล้วครับ </p>


    <br/>
    <a className="thumbnail">
    <img src={require('./image/review1_pic2.jpg')} />
    </a>

</div>


</div>


<div className="col-md-2"></div>


            </div>
        );
    }
}


export default review1 