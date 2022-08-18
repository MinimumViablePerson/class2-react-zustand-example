import { useStore } from '../store'

export function ResetButton () {
  const reset = useStore(state => state.reset)
  return <button onClick={reset}>RESET</button>
}
