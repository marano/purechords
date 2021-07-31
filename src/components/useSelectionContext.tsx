import { useContext } from 'react'
import SelectionContext from './SelectionContext'

export default function useSelectionContext() {
  return useContext(SelectionContext)
}
