import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div >
        <div className='container'>
          <div className='list'>
            are you kidding me
          </div> 
        </div>
        <style jsx>
          {
            `
              .container{
                font-size:100px;
              }
              .list{
                  color:red;
                  background-color:blue;
                }
            `
          }
          
        </style>
      </div>
    )
  }
}
