import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  Opendrawer: {
    open: false
  },
  dataUser: {
    name:'',
    sex:'',
    phone:'',
    postion: '',
    shift: ''
  },
  isActice : false
}

export const counterSlice = createSlice({
  name: 'counterUse',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    btnOpen: (state) => {
        state.Opendrawer.open = true
    },    
    btnClose: (state) => {
        state.Opendrawer.open = false
    },
    btnData: (state, action) => {
      state.dataUser = action.payload
    },
    btnIsActice: (state) => {
      state.isActice = !state.isActice
    } 
  },
})

export const { increment, btnOpen, btnClose, btnIsActice, btnData } = counterSlice.actions

export default counterSlice.reducer