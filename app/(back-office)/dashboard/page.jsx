import CustomDataTable from '@/components/backoffice/CustomDataTable'
import DashboardCharts from '@/components/backoffice/DashboardCharts'
import Heading from '@/components/backoffice/Heading'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import React from 'react'

const Dashboard = () => {
  return (
    <>
      <Heading title="Dashboard Overview"/>
      {/* Large Cards */}
      <LargeCards />
      {/* Small Cards */}
      <SmallCards/>
      {/* Charts */}
      <DashboardCharts/>
      {/* Recent Orders Table */}
      <CustomDataTable/>
    </>
  )
}

export default Dashboard
