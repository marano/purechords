import { useContext } from 'react'
import StudyContext from './StudyContext'

export default function useStudyContext() {
  return useContext(StudyContext)
}
