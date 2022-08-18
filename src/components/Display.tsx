import { useStore } from '../store'

export function Display () {
  const count = useStore(state => state.count)
  return <h1>{count}</h1>
}
