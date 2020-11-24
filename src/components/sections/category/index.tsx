interface CategoryProp {
  id: string
}

export default function Category({ category }: { category: CategoryProp }) {
  console.log(category)
  return (
    <div>
      <h1>{category.id}</h1>
    </div>
  )
}
