import LayoutGeneral from 'components/layouts/layout-general'
import ReporteLanging from 'components/layouts/reporte-landing/reporte-landing'
import ReportesAdmin from 'components/layouts/reportes-admin/reportes-admin'
import React from 'react'

const reportes = () => {
  return (
    <LayoutGeneral>
      <ReporteLanging />
      <ReportesAdmin />
    </LayoutGeneral>)
}

export default reportes