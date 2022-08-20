import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { SiteProcess } from '../../types/state';

const initialState: SiteProcess = {
  genre: 'All genres',
  avatarUrl: null,
};

export const siteProcess = createSlice({
  name: NameSpace.Site,
  initialState,
  reducers: {
    setAvatarUrl: (state, action) => {
      state.avatarUrl = action.payload;
    },
    changeGenre: (state, action) => {
      state.genre = action.payload;
    }
  }
});

export const { setAvatarUrl, changeGenre } = siteProcess.actions;
