import React from 'react'
import { FaCheck, FaArrowRotateLeft, FaClockRotateLeft } from "react-icons/fa6";
import Lots from '../Components/Lots'
import LastTrade from '../Components/LastTrade';
const Dashboard = () => {

  const styles = {
    cardTitleBg: {
      backgroundColor: '#003471'
    },
    timer: {
      backgroundColor: '#F56954',
      fontSize: '2.5rem',
    }

  }

  return (
    <>
      <section className="content-header py-0 border-bottom mb-3">
        <div className="row my-0">
          <div className='text-uppercase col-md-4'>
            <span className='font-font-weight-light'>VISITOR </span><small className='text-success font-weight-bold'>Tea traders assosiation of bagnladesh</small>
          </div>
          <div className='col-md-4'>
            <h3 className='text-center text-uppercase font-weight-light'>Visitor Panel</h3>
          </div>
          <div className='col-md-4'>
          </div>
        </div>
      </section>
      <section className="content">

        <div className="row m-0">
          <div className="col-md-9 col-xl-10">
            <div className="card card-dark rounded-0 shadow-none">
              <div className="card-header rounded-0 py-2 text-uppercase" style={styles.cardTitleBg}>
                <h4 className="card-title text-sm"><strong>Trading: </strong><span className='text-blink text-uppercase'>BROKER HOUSE LIMITED</span></h4>
              </div>
              <div className="card-body border">
                <div className='d-flex gap-2 my-1'>
                  <button className='btn btn-success border-0 text-uppercase text-nowrap py-3'>sold <FaCheck className='font-weight-bold' /></button>
                  <button className='btn btn-warning border-0 text-light text-uppercase text-nowrap py-3'>unsold <FaArrowRotateLeft className='font-weight-bold' /></button>
                  <button className='btn btn-orange border-0 text-uppercase text-nowrap py-3'>last trade <FaCheck className='font-weight-bold' /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-xl-2">
            <div className="card card-dark rounded-0 shadow-none">
              <div className="card-header rounded-0 py-2 text-uppercase" style={styles.cardTitleBg}>
                <h4 className="card-title text-sm"><strong>timer</strong></h4>
              </div>
              <div className="card-body border">
                <div className="rounded-2 text-light m-0" style={styles.timer}>
                  <h1 className='py-2 text-center font-weight-bold text-nowrap m-0'>04:50</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mb-4">
          <Lots />

          <div className="card-body p-2 d-flex gap-1 mb-1 border-bottom border-danger" style={{ backgroundColor: '#3B5998' }}>
            <span className="text-sm text-uppercase text-bg-danger rounded-1 py-1 px-2">last message: </span>
            <span className="text-sm text-bg-light rounded-1 py-1 px-2">I'm message ... </span>
            <span className="text-sm text-bg-primary rounded-1 py-1 px-2 text-uppercase">sender </span>
            <button className='btn btn-info p-0 px-2 ms-auto text-xs'><FaClockRotateLeft /></button>
          </div>
          <LastTrade />
        </div>
      </section>
    </>
  )
}

export default Dashboard