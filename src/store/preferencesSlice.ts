// src/store/preferencesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PreferencesState {
  categories: string[]
}

// Try to load from localStorage or use defaults
const savedPrefs =
  typeof window !== 'undefined'
    ? localStorage.getItem('preferences')
    : null

const initialState: PreferencesState = savedPrefs
  ? JSON.parse(savedPrefs)
  : { categories: ['technology'] }

export const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload
      if (typeof window !== 'undefined') {
        localStorage.setItem('preferences', JSON.stringify(state))
      }
    },
  },
})

export const { setCategories } = preferencesSlice.actions
export default preferencesSlice.reducer
