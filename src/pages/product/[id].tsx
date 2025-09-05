import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter();

  return (
    <p>Product: {JSON.stringify(query)}</p>
  )
}