import React from 'react'
import "./single.scss"
import { Sidebar, Navbar,Chart,List } from "../../components"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Steve Gaita</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">steveggaita@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 56 78</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Lena Moi Rd. Milimani Estate, Nakuru</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Kenya</span>
                </div>
              </div>
            </div>
           
          </div>
          <div className="right">
          <Chart aspect={3/1} title={"Users spending (Last 6 Months)"}/>
          </div>
        </div>
        <div className="bottom">
          <div className="title">Latest Transactions</div>
        <List />
        </div>
      </div>
    </div>
  )
}

export { Single }