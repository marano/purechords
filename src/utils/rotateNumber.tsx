export default function rotateNumber(value: number, ceil: number) {
  return value - (ceil * Math.floor(value / ceil))
}
