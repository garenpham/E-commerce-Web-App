import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/Billboard'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/Container'
import React from 'react'

type Props = {}

export const revalidate = 0

async function HomePage({}: Props) {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard('b86abdf0-1a31-48e2-aa21-c59dad584965')
  return (
    <Container>
      <div className={`space-y-10 pb-10`}>
        <Billboard data={billboard} />

        <div className={`flex flex-col gap-y-8 sm:px-6 lg:px-8`}>
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
