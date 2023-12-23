/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUIState, ScreenType, IScreenSize } from '@/types';

const initialState: IUIState = {
  windowSize: 0,
  screen: ScreenType.DESKTOP,
};

export const uiReducer = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    saveScreen: (
      state: IUIState,
      action: PayloadAction<IScreenSize>,
    ) => {
      state.windowSize = action.payload.windowSize;
      if (action.payload.windowSize > 1440)
        state.screen = ScreenType.DESKTOP_PLUS;
      else if (action.payload.windowSize > 1024)
        state.screen = ScreenType.DESKTOP;
      else if (action.payload.windowSize > 768)
        state.screen = ScreenType.TABLET;
      else state.screen = ScreenType.MOBILE;
    },
  },
});

export const { saveScreen } = uiReducer.actions;

export default uiReducer.reducer;
