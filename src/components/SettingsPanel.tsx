import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { setCategories } from '@/store/preferencesSlice'

export default function SettingsPanel() {
  const dispatch = useDispatch()
  const categories = useSelector((state: RootState) => state.preferences.categories)

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow w-64">
      <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
        Content Preferences
      </h3>
      <div className="space-y-2">
        {['technology', 'sports', 'finance'].map(category => (
          <label key={category} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={categories.includes(category)}
              onChange={() => {
                const newCategories = categories.includes(category)
                  ? categories.filter(c => c !== category)
                  : [...categories, category]
                dispatch(setCategories(newCategories))
              }}
            />
            <span>{category}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
