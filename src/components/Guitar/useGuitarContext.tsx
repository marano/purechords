import { useContext } from 'react'
import GuitarContext from './GuitarContext'

export default function useGuitarContext() {
  return useContext(GuitarContext)
}
