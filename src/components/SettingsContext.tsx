import { createContext } from 'react'
import { Note } from '../types'

type Value = {
  strings: Note[]
  fretCount: number
}

export default createContext<Value>(undefined!)
