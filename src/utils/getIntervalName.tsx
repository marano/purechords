import { Interval } from '../types'

const priorities = ['P', 'M', 'm', 'd', 'TT', 'A']

const prefixes = priorities.flatMap(
  prefix =>
    Object
      .entries(Interval)
      .filter(
        ([intervalName]) =>
          intervalName.startsWith(prefix)
      )
)

export default function getIntervalName(interval: Interval) {
  const intervalNameAndInterval = prefixes.find(
    ([, eachInterval]) =>
      eachInterval === interval
  )

  if (intervalNameAndInterval !== undefined) {
    return intervalNameAndInterval[0]
  }
}
