import { createContext } from 'react'
import { Selection } from '../types'

type Value = {
  selections: Selection[]

  addSelection: (selection: Selection) => void
}

export default createContext<Value>(undefined!)
