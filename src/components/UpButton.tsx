import { useStore } from '../store'

export function UpButton () {
  const up = useStore(state => state.up)
  return <button onClick={up}>+</button>
}
