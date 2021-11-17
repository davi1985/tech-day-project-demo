import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()

  console.log(query.products)

  return (
    <h1 style={{ textAlign: 'center' }}>{JSON.stringify(query.products)}</h1>
  )
}
