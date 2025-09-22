// src/app/(main)/video/[id]/page.tsx

import { FGetPortfolioItem } from '@/api/api'
import VideoDetailsView from '@/app/(main)/_components/template/video/VideoDetailsPage'
import type { TPortfolio } from '@/types'

export default async function VideoDetailsPage(
  props: Promise<{ params: { id: string } }>
) {
  const { params } = await props
  const res = await FGetPortfolioItem({ id: params.id, categoryId: 27 })
  const data: TPortfolio = res?.data

  if (!data) {
    return (
      <div className="min-h-[600px] flex items-center justify-center text-primary animate-bounce">
        ویدیو یافت نشد.
      </div>
    )
  }

  return <VideoDetailsView data={data} />
}
