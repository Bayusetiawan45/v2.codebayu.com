import React from 'react'

import { summaryMock } from '@/common/mocks/summary'

export default function Summary() {
  return (
    <div data-testid="summary" className="flex flex-col space-y-6 font-sans text-neutral-800 dark:text-neutral-300">
      <p>{summaryMock.paragraphOne}</p>
      <p>{summaryMock.paragraphTwo}</p>
      <p>{summaryMock.paragraphThree}</p>
      <p>{summaryMock.paragraphFour}</p>
    </div>
  )
}
