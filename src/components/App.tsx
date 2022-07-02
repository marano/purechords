import StudyProvider from './StudyProvider'
import SettingsProvider from './SettingsProvider'
import Study from './Study'
import Picker from './Picker'

export default function App() {
  return (
    <SettingsProvider>
        <h1>Please select your reference note</h1>
      <StudyProvider>

        <Picker />
          <h1>see below your study selection</h1>
        <Study />
      </StudyProvider>
    </SettingsProvider>
  )
}
