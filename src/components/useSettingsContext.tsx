import { useContext } from 'react'
import SettingsContext from './SettingsContext'

export default function useStudyContext() {
  return useContext(SettingsContext)
}
