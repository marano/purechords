import { useContext } from 'react'
import PickerContext from './PickerContext'

export default function usePickerContext() {
  return useContext(PickerContext)
}
