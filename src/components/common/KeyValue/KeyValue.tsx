import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { FCC } from '#types/types'
import React, { Fragment } from 'react'
import { textColor as defaultTextColor } from 'src/helpers/colors'

type KeyValueProps = {
  keyValue: Array<{
    key: string
    value: string
  }>
}

export const KeyValue: FCC<KeyValueProps> = ({ keyValue }) => {
  const { colors } = useColorContext()
  const textColor = colors?.textColor ?? defaultTextColor[0]

  return (
    <dl className="grid mt-2 mb-10 sm:grid-cols-5 gap-y-2 sm:gap-y-4">
      {keyValue.map(({ key, value }) => (
        <Fragment key={key}>
          <dt className={`${textColor} font-bold`}>{key}</dt>
          <dd className="col-span-4">{value}</dd>
        </Fragment>
      ))}
    </dl>
  )
}
