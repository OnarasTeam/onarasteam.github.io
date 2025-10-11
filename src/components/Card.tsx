import type { ReactElement } from 'react'

export default function Card({ children }: { children: ReactElement | ReactElement[] }) {
  return <div id='main-info-card'>{children}</div>
}
