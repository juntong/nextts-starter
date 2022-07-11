import React, { ReactElement } from 'react'
import Layout from '@/components/Layout'
import LayoutAccount from '@/components/LayoutAccount'
import type { NextPageWithLayout } from '../_app'

const AccountIndex: NextPageWithLayout = () => {
  return <div>Account index..</div>
}

AccountIndex.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <LayoutAccount>{page}</LayoutAccount>
    </Layout>
  )
}

export default AccountIndex
