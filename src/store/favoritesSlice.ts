import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FavoritesState {
  items: string[] // ✅ store URLs
}

const initialState: FavoritesState = {
  items: [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const url = action.payload
      if (state.items.includes(url)) {
        state.items = state.items.filter(item => item !== url)
      } else {
        state.items.push(url)
      }
    },
  },
})

export const { toggleFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
