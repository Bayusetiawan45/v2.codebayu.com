'use client'

import { fetcher } from '@/services/fetcher'
import React from 'react'
import { FaPhotoVideo } from 'react-icons/fa'
import useSWR from 'swr'

import SectionHeading from '@/common/components/elements/SectionHeading'
import SectionSubHeading from '@/common/components/elements/SectionSubHeading'
import Skeleton from '@/common/components/elements/Skeleton'
import VideoPlayer from '@/common/components/elements/VideoPlayer'

export default function Unwrapped() {
  const { data, isLoading } = useSWR('/api/unwrapped', fetcher)

  return (
    <section>
      <div data-testid="unwrapped-section-heading" className="space-y-2">
        <SectionHeading title="Github Unwrapped" icon={<FaPhotoVideo className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My coding journey on {data?.data[0].years ?? '2023'}</p>
        </SectionSubHeading>
      </div>
      <div data-testid="unwrapped-video" className="flex flex-row aspect-video mt-6 items-center justify-center">
        {isLoading ? <Skeleton /> : <VideoPlayer url={data.data[0].url} />}
      </div>
    </section>
  )
}
