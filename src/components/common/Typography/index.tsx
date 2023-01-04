import { FCC } from '#types/types'

export const H2: FCC<JSX.IntrinsicElements['h2']> = ({
  children,
  ...props
}) => (
  <h2 {...props} className="my-4 h2-as-h1">
    {children}
  </h2>
)

export const H3: FCC<JSX.IntrinsicElements['h3']> = ({
  children,
  ...props
}) => (
  <h3 {...props} className="mb-4">
    {children}
  </h3>
)

export const UL: FCC<JSX.IntrinsicElements['ul']> = ({ ...props }) => (
  <ul {...props} className="flex flex-col gap-4" />
)

export const LI: FCC<JSX.IntrinsicElements['li']> = ({ ...props }) => (
  <li {...props} className="ml-4 list-disc" />
)
