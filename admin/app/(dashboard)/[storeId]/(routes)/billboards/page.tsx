import prismadb from '@/lib/prismadb'
import React from 'react'
import BillboardClient from './components/client'

type Props = {
  params: {
    storeId: string
  }
}

async function page({ params }: Props) {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <div className='flex-col'>
      <div className={`flex-1 space-y-4 p-8 pt-6`}>
        <BillboardClient data={billboards} />
      </div>
    </div>
  )
}

export default page
