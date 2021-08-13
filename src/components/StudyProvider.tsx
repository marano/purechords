import { ReactNode, useState } from 'react'
import { Selection } from '../types'
import StudyContext from './StudyContext'

type Props = {
  children: ReactNode
}

export default function StudyProvider({ children }: Props) {
  const [selections, setSelections] = useState(() => [] as Selection[])

  const value = {
    selections,

    addSelection(selection: Selection) {
      setSelections([...selections, selection])
    },
  }

  return (
    <StudyContext.Provider value={value}>
      {children}
    </StudyContext.Provider>
  )
}
