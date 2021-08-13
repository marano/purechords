import StudyProvider from './StudyProvider'
import SettingsProvider from './SettingsProvider'
import Study from './Study'
import Picker from './Picker'

export default function App() {
  return (
    <SettingsProvider>
      <StudyProvider>
        <Picker />
        <Study />
      </StudyProvider>
    </SettingsProvider>
  )
}
