import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'

const LastTrade = () => {

  const brokerCode = 'BHL';

  const LastTrades = [
    {
      id: '453fs',
      garden: 'dhamai',
      lot: '5032',
      value: '102',
      highest: '99',
      bidder: 'AKT',
      status: 0,
    },
    {
      id: '454fs',
      garden: 'karnojhara',
      lot: '5033',
      value: '110',
      highest: '112',
      bidder: 'ISP',
      status: 1,
    },
    {
      id: '455fs',
      garden: 'otterbagh & indaunugger',
      lot: '5035',
      value: '152',
      highest: '140',
      bidder: 'AKT',
      status: 1,
    },
    {
      id: '456fs',
      garden: 'maitri',
      lot: '5036',
      value: '120',
      highest: '111',
      bidder: 'MAG',
      status: 0,
    },
    {
      id: '457fs',
      garden: 'surma',
      lot: '5037',
      value: '138',
      highest: '',
      bidder: '',
      status: 0,
    },
  ]

  return (
    <>
      <div className="card-body text-uppercase text-sm p-0 px-2 d-flex gap-5 overflow-y-auto" style={{ backgroundColor: '#3B5998' }}>
        {LastTrades.map((item) => (
          <div key={item.id} className='d-flex align-items-center gap-3'>
            <div className={`d-flex flex-column align-items-start ${item.status ? 'text-lime' : 'text-default'}`} style={{ color: '#FF6666' }}>
              <span className='m-0 p-0 text-nowrap'>{item.garden} &#40;{item.lot}&#41;</span>
              <span className='m-0 p-0 text-nowrap'>{item.bidder ?? ''}&#58; {item.highest ? item.highest : '0'} {item.highest && '('}<span className={`${(item.highest && (item.highest - item.value) > 0) && 'text-lime'}`} style={{ color: '#FF6666' }}>{item.highest && (item.highest - item.value)}</span>{item.highest && ')'}<span style={{ color: '#979393' }}> &#40;{brokerCode}&#41;</span></span>
            </div>
            <div className={`d-flex align-items-center text-lg ${item.status ? 'text-lime' : 'text-yellow'}`} style={{ color: '#FF6666' }}>
              {item.status ? <FaCheck /> : <FaTimes />}

            </div>
          </div>
        ))}

      </div >
    </>
  )
}

export default LastTrade