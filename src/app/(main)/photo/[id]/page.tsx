'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { FGetPortfolioItem } from '@/api/api'
import PhotoDetailsView from '@/app/(main)/_components/template/photo/PhotoDetailsView'
import type { TPortfolio } from '@/types'

export default function PhotoDetailsPage() {
  const { id } = useParams()
  const [data, setData] = useState<TPortfolio | null>(null)

  useEffect(() => {
    if (id) {
      FGetPortfolioItem({ id: String(id) }).then((res) => {
        setData(res?.data)
      })
    }
  }, [id])

  if (!data) {
    return (
      <div className="min-h-[600px] flex items-center justify-center text-primary animate-ping">
        در حال بارگذاری...
      </div>
    )
  }

  return <PhotoDetailsView data={data} />
}
