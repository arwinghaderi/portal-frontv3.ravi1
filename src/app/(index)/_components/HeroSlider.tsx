'use client'

import { TPostItem } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import InnerHTML from '@/modules/InnerHTML'

export default function HeroSlider({ posts }: { posts: TPostItem[] }) {
  if (!posts.length) return null

  return (
    <div className="w-full h-screen relative z-[1]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000 }}
        navigation={{
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        loop
        className="w-full h-fit"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <Image
              src={post.files[0]?.url || '/images/image-placeholder.jpg'}
              alt={post.title}
              fill
              className="object-cover object-center"
              priority
            />
            <Link
              href={`/news/${post.url || '#'}`}
              className="absolute inset-0 z-[3] cursor-pointer"
              aria-label={post.title}
            />

            {/* گرادیانت برای خواناتر شدن متن */}
            <div className="absolute inset-0 z-[2] bg-gradient-to-l from-black/60 via-black/30 to-transparent" />

            {/* محتوای متنی با فلکس */}
            <div className="relative z-[4] flex items-center justify-start h-full px-4 sm:px-12">
              <div className="w-[80%] sm:w-auto max-w-xs sm:max-w-lg text-right text-white drop-shadow-md">
                <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold mb-3 leading-12 tracking-tighter line-clamp-2 text-shadow-2xs text-primary">
                  {post.title}
                </h2>
                <InnerHTML
                  style="text-sm sm:text-base lg:text-lg text-shadow-2xs line-clamp-4"
                  details={post?.htmlCode || ''}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
