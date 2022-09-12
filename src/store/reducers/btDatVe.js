const stateDefault = {
    danhSachGheDangDat: [
        
    ]
}

export const btDatVe = (state = stateDefault, { type, payload }) => {
    switch (type) {
        case 'DAT_GHE':{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat  =>gheDangDat.soGhe === payload.soGhe);
            if(index !== -1){
                danhSachGheDangDatUpdate.splice(index,1)
            }else{
                danhSachGheDangDatUpdate.push(payload)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}
        }
        case 'HUY_GHE':{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat  =>gheDangDat.soGhe === payload);
            if(index !== -1){
                danhSachGheDangDatUpdate.splice(index,1)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}
        }
        default: return { ...state }
    }
}