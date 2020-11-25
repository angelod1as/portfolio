interface CategoryProp {
  id: string
  order: number
  title: string
  type: string
}

export default function Category({ category }: { category: CategoryProp }) {
  const { type } = category
  if (type === 'text') {
    return (
      <div>
        <h1>{category.id}</h1>
        <p>TEXT</p>
      </div>
    )
  }
  return (
    <div>
      <h1>{category.id}</h1>
      <p>PROJECT</p>
    </div>
  )
}
