import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VideoState {
  videoId: string;
  videoUrl: string;
  position: number;
  timestamp: number | null;
  isPlaying: boolean;
}

const initialState: VideoState = {
  videoId: '',
  videoUrl: '',
  position: 0,
  timestamp: null,
  isPlaying: true,
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideoData: (state, action: PayloadAction<{ videoId: string; videoUrl: string }>) => {
      state.videoId = action.payload.videoId;
      state.videoUrl = action.payload.videoUrl;
      state.position = 0;
      state.timestamp = Date.now();
      state.isPlaying = true;
    },
    updatePosition: (state, action: PayloadAction<number>) => {
      state.position = action.payload;
      state.timestamp = Date.now();
    },
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    resetVideo: () => initialState,
  },
});

export const { setVideoData, updatePosition, setPlaying, resetVideo } = videoSlice.actions;
export default videoSlice.reducer;