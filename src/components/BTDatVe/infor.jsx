import React, { Component } from 'react'
import { connect } from 'react-redux'
class ThongTinGhe extends Component {
  render() {
    const { danhSachGheDangDat } = this.props
    return (
      <div>
        <div className='mt-5'>
          <button className='gheDuocChon' ></button> <span className='text-light' style={{ fontSize: '30px' }}>Ghế đã chọn</span>
          <br />
          <button className='gheDangChon' ></button> <span className='text-light' style={{ fontSize: '30px' }}>Ghế đang đặt</span>
          <br />
          <button className='ghe' style={{ marginLeft: '0' }}></button> <span className='text-light' style={{ fontSize: '30px' }}>Ghế chưa đặt</span>
        </div>
        <div className='mt-1'>
          <table className="table" style={{display:'inline-block'}}  border={1} >
            <thead style={{display:'block'}}  >
              <tr>
                <th className='text-light' style={{ fontSize: 25,width:250 }}>Số ghế</th>
                <th className='text-light' style={{ fontSize: 25,width:150 }}>Giá</th>
                <th className='text-light' style={{ fontSize: 25,width:90 }}>Hủy</th>
              </tr>
            </thead>
            <tbody className='text-warning'  style={{display:'block',height:300,overflowY:'auto'}}>
              {danhSachGheDangDat.map((gheDangDat, index) => {
                return <tr  key={index}>
                  <td style={{width:250}}>{gheDangDat.soGhe}</td>
                  <td style={{width:150}}>{gheDangDat.gia.toLocaleString()}</td>
                  <td style={{width:90}}><span className='text-center' style={{cursor:'pointer',color:'red',fontSize:25}} onClick={() => {
                    this.props.dispatch({
                      type: 'HUY_GHE',
                      payload: gheDangDat.soGhe,
                    })
                  }}>X</span></td>
                </tr>
              })}
            </tbody>
            <tfoot style={{display:'block'}} >
              <tr>
                <td className='text-light' style={{fontSize:30,width:250}}>Tổng tiền</td>
                <td className='text-warning' style={{fontSize:30,width:150}}>{danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                  return tongTien += gheDangDat.gia
                }, 0).toLocaleString()}</td>
                <td style={{width:90}}></td>
              </tr>
            </tfoot>
          </table>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.btDatVe.danhSachGheDangDat
  }
}
export default connect(mapStateToProps)(ThongTinGhe)