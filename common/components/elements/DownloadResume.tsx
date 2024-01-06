'use client'

import { usePathname } from 'next/navigation'

import React from 'react'
import { BiSolidDownvote as DownloadIcon } from 'react-icons/bi'

import { RESUME_URL } from '@/common/constant'
import { sendDataLayer } from '@/common/libs/gtm'

export default function DownloadResume() {
  const pathname = usePathname()

  function redirectToResumeUrl() {
    sendDataLayer({
      event: 'resume_clicked',
      page_path: pathname
    })
    window.open(RESUME_URL, '_blank')
  }

  return (
    <button
      onClick={redirectToResumeUrl}
      className="flex gap-2 transition-all duration-300 items-center text-neutral-600 dark:text-neutral-500 hover:text-neutral-700 hover:dark:text-neutral-300"
      data-umami-event="Download Resume"
    >
      <div
        data-testid="download-icon-container"
        className="border-b-2 overflow-hidden border-neutral-600 dark:border-neutral-500"
      >
        <DownloadIcon data-testid="download-icon" className="animate-rain-arrow" />
      </div>
      <span>Download Resume</span>
    </button>
  )
}
