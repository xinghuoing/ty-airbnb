import { getEntireRoomListData } from "@/service/modules/entire";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEntireDataAction = createAsyncThunk(
  "fetchEntireData",
  (page = 0, { dispatch, getState }) => {
    // 传入当前页码，修改currentPage
    dispatch(changeCurrentPageAction(page));

    // 添加加载蒙板
    dispatch(changeIsLoadingAction(true))
    getEntireRoomListData(page * 20).then((res) => {
      dispatch(changeTotalCountAction(res.totalCount));
      dispatch(changeRoomListAction(res.list));
      // 拿到数据蒙板消失
      dispatch(changeIsLoadingAction(false));
    });
  }
);

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 0, // 当前页码
    roomList: [], // 房间数据
    totalCount: 0, // 数据总个数
    isLoading: false
  },
  reducers: {
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload;
    },
    changeRoomListAction(state, { payload }) {
      state.roomList = payload;
    },

    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload;
    },
    changeIsLoadingAction(state, { payload }) {
      state.isLoading = payload;
    }
  },
});

export const {
  changeCurrentPageAction,
  changeRoomListAction,
  changeTotalCountAction,
  changeIsLoadingAction,
} = entireSlice.actions;

export default entireSlice.reducer;
