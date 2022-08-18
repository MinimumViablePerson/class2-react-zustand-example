import { useStore } from '../store'

export function DownButton () {
  const down = useStore(state => state.down)
  return <button onClick={down}>-</button>
}
