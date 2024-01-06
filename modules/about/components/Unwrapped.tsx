import React from 'react'
import { FaPhotoVideo } from 'react-icons/fa'

import SectionHeading from '@/common/components/elements/SectionHeading'
import SectionSubHeading from '@/common/components/elements/SectionSubHeading'
import VideoPlayer from '@/common/components/elements/VideoPlayer'

export default function Unwrapped() {
  const url = 'https://youtube.com/shorts/AMFdITJFhhM?si=2iHFcUYCa3lQckJE'
  return (
    <section>
      <div data-testid="unwrapped-section-heading" className="space-y-2">
        <SectionHeading title="Github Unwrapped" icon={<FaPhotoVideo className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My coding journey on 2023</p>
        </SectionSubHeading>
      </div>
      <div data-testid="unwrapped-video" className="flex flex-row aspect-video mt-6 items-center justify-center">
        <VideoPlayer url={url} />
      </div>
    </section>
  )
}
