import { FCC } from '#types/types'
import { Fragment, ReactNode } from 'react'

type KeyValueProps = {
  keyValue: Array<{
    key: string
    value: ReactNode
  }>
}

export const KeyValue: FCC<KeyValueProps> = ({ keyValue }) => {
  return (
    <dl className="grid mt-2 mb-10 sm:grid-cols-5 gap-y-2 sm:gap-y-4">
      {keyValue.map(({ key, value }) => (
        <Fragment key={key}>
          <dt className="font-bold text-highlight">{key}</dt>
          <dd className="col-span-4">{value}</dd>
        </Fragment>
      ))}
    </dl>
  )
}
