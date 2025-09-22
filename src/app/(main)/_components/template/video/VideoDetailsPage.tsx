// src/app/(main)/_components/template/video/VideoDetailsView.tsx
'use client'

import { TPortfolio } from '@/types'

export default function VideoDetailsView({ data }: { data: TPortfolio }) {
  const { title, description, creator, media } = data
  const videoUrl = media?.[0]?.url || ''

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 mb-8">
        <div className="flex flex-wrap justify-between items-center gap-4 text-sm text-gray-600">
          <ol className="flex gap-2">
            <li>
              <span className="text-gray-500">ویدیو</span>
            </li>
            <li>
              <span className="text-gray-500">برگزیده</span>
            </li>
          </ol>
        </div>
        <div className="mt-6">
          <h4 className="text-sm text-gray-500 font-medium break-words">
            {creator.firstName} {creator.lastName}
          </h4>
          <h1 className="text-xl sm:text-2xl font-bold text-black mt-1 line-clamp-1">
            {title}
          </h1>
        </div>
      </div>

      {/* Video Player */}
      {videoUrl ? (
        <div className="w-full aspect-video mb-10 rounded-xl overflow-hidden shadow-lg">
          <video
            src={videoUrl}
            controls
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-full aspect-video mb-10 flex items-center justify-center bg-gray-100 rounded-xl text-gray-500">
          ویدیویی برای نمایش وجود ندارد.
        </div>
      )}

      {/* Summary */}
      <div className="mb-10">
        <p className="text-base text-gray-700 leading-relaxed">
          {description || 'توضیحاتی برای این ویدیو ثبت نشده است.'}
        </p>
      </div>
    </div>
  )
}
