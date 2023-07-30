import React from 'react'
import { MdHeight } from 'react-icons/md'

const Lots = () => {

  const tradeLot = [
    {
      lot: '6584',
      inv: '45',
      grade: 'dust',
      garden: 'lallakhal',
      tnk: '500.00',
      chest: '10',
      value: '145',
      highest: '139',
      bidder: 'AKT',
      share: '',
    },
    {
      lot: '6585',
      inv: '45',
      grade: 'gbop',
      garden: 'oodaleah',
      tnk: '500.00',
      chest: '10',
      value: '230',
      highest: '220',
      bidder: 'isp',
      share: '',
    },
    {
      lot: '6586',
      inv: '45',
      grade: 'gbop',
      garden: 'maitri',
      tnk: '500.00',
      chest: '10',
      value: '180',
      highest: '',
      bidder: '',
      share: '',
    },
    {
      lot: '6587',
      inv: '45',
      grade: 'dust',
      garden: 'ootterbagh & in',
      tnk: '500.00',
      chest: '10',
      value: '215',
      highest: '',
      bidder: '',
      share: '',
    },
  ]

  const styles = {
    titlebg: {
      backgroundColor: '#3B5998'
    },
    tablebg: {
      backgroundColor: '#D6EEFF'
    }
  }

  return (
    <>

      <div className='table-responsive'>
        <table className='table table-sm text-uppercase mb-0'>
          <thead >
            <tr className='text-sm text-nowrap table-dark' style={styles.titlebg}>
              <th className='bg-transparent'>
                <div>lot</div>
                <div className='d-md-none'>invo</div>
              </th>
              <th className='bg-transparent d-none d-md-table-cell'>invo</th>
              <th className='bg-transparent d-none d-md-table-cell'>grade</th>
              <th className='bg-transparent'>
                <div>garden</div>
                <div className='d-md-none'>grade</div>
              </th>
              <th className='bg-transparent d-none d-md-table-cell'>tnk (bsd)</th>
              <th className='bg-transparent d-none d-md-table-cell'>chest</th>
              <th className='bg-transparent'>
                <div>value</div>
                <div className='d-md-none'>chest</div>
              </th>
              <th className='bg-transparent '>
                <div>highest</div>
                <div className='d-md-none'>buyer</div>
              </th>
              <th className='bg-transparent d-none d-md-table-cell'><MdHeight /></th>
              <th className='bg-transparent d-none d-md-table-cell'>buyer</th>
              <th className='bg-transparent'>share</th>
            </tr>
          </thead>
          <tbody className='table-info' style={styles.tablebg} >

            {tradeLot.map((item) => (
              <tr key={item.lot} className='text-sm text-nowrap  font-weight-bold'>
                <td className='bg-transparent text-bluesh'>
                  <div>{item.lot}</div>
                  <div className='d-md-none'>{item.inv}</div>
                </td>
                <td className='bg-transparent text-bluesh d-none d-md-table-cell'>{item.inv}</td>
                <td className='bg-transparent text-bluesh d-none d-md-table-cell'>{item.grade}</td>
                <td className='bg-transparent text-bluesh'>
                  <div className='text-orange'>{item.garden}</div>
                  <div className='d-md-none'>{item.grade}</div>
                </td>
                <td className='bg-transparent text-bluesh d-none d-md-table-cell'>{item.tnk}</td>
                <td className='bg-transparent text-bluesh d-none d-md-table-cell'>{item.chest}</td>
                <td className='bg-transparent text-bluesh'>
                  <div>{item.value}</div>
                  <div className='d-md-none'>&#40;{item.chest}&#41;</div>
                </td>
                <td className='bg-transparent text-bluesh '>
                  <div className='text-success'>{item.highest}</div>
                  <div className='d-md-none text-orange'>{item.bidder} <span className='text-success'>&#40;<span className={`${(item.highest && (item.highest - item.value >= 0)) ? 'text-success' : (item.highest && (item.highest - item.value < 0)) ? 'text-danger' : 'text-bluesh'}`}>{item.highest ? item.highest - item.value : ''}</span>&#41;</span></div>
                </td>
                <td className={`bg-transparent d-none d-md-table-cell ${(item.highest && (item.highest - item.value >= 0)) ? 'text-success' : (item.highest && (item.highest - item.value < 0)) ? 'text-danger' : 'text-bluesh'}`}>{item.highest ? item.highest - item.value : ''}</td>
                <td className='bg-transparent text-orange d-none d-md-table-cell'>{item.bidder}</td>
                <td className='bg-transparent text-bluesh'></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div >
    </>
  )
}

export default Lots