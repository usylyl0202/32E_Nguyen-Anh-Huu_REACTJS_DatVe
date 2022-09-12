import React, { Component } from 'react'
import { connect } from 'react-redux'
class HangGhe extends Component {

  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let gheDaDat = '';
      let disabled = false;
      if (ghe.daDat) {
        gheDaDat = 'gheDuocChon';
        disabled = true;
      }
      let gheDangChon = '';
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
      if (indexGheDangDat !== -1) {
        gheDangChon = 'gheDangChon'
      }
      return <button onClick={() => {
        this.props.datGhe(ghe)
      }} disabled={disabled} className={`ghe ${gheDaDat} ${gheDangChon}`} key={index}>
        {index + 1}
      </button>
    })
  }
  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button
        className='rowNumber'>
        {hang.soGhe}
      </button>
    })
  }

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div className='ml-4'>
        {this.props.hangGhe.hang} {this.renderSoHang()}
      </div>
    } else {
      return <div>
        {this.props.hangGhe.hang} {this.renderGhe()}
      </div>
    }
  }

  render() {
    return (
      <div className='text-light ml-5' style={{ fontSize: 20 }} >
        {this.renderHangGhe()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.btDatVe.danhSachGheDangDat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch({
        type: 'DAT_GHE',
        payload: ghe,
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);