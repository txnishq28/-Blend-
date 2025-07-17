// src/store/favoritesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FavoritesState {
  items: string[]
}

const persisted = typeof window !== 'undefined'
  ? JSON.parse(localStorage.getItem('favorites') || '[]')
  : []

const initialState: FavoritesState = {
  items: persisted,
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
      // ✅ Save to localStorage every change
      localStorage.setItem('favorites', JSON.stringify(state.items))
    },
  },
})

export const { toggleFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
