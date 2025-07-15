// src/store/store.ts

import { configureStore } from '@reduxjs/toolkit'
import preferencesReducer from './preferencesSlice'
import favoritesReducer from './favoritesSlice'
import searchReducer from './searchSlice'
import { newsApi } from './newsApiSlice'

// Load favorites from localStorage (optional but recommended)
const loadFavorites = () => {
  try {
    const serialized = localStorage.getItem('favorites')
    if (serialized === null) return undefined
    return JSON.parse(serialized)
  } catch {
    return undefined
  }
}

export const store = configureStore({
  reducer: {
    preferences: preferencesReducer,
    favorites: favoritesReducer,
    search: searchReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  preloadedState: {
    favorites: loadFavorites(),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
})

// Save favorites on every state change
store.subscribe(() => {
  try {
    const serialized = JSON.stringify(store.getState().favorites)
    localStorage.setItem('favorites', serialized)
  } catch {
    // ignore
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
