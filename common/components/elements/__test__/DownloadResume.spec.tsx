import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import DownloadResume from '../DownloadResume'

describe('DownloadResume Component', () => {
  beforeEach(() => {
    render(<DownloadResume />)
  })

  it('Should render download resume component', () => {
    const button = screen.getByRole('button')
    expect(button).toBeTruthy()
    expect(button.className).toBe(
      'flex gap-2 transition-all duration-300 items-center text-neutral-600 dark:text-neutral-500 hover:text-neutral-700 hover:dark:text-neutral-300'
    )
  })

  it('Should render download icon', () => {
    expect(screen.getAllByTestId('download-icon')[0]).toBeTruthy()
  })

  it('Should render download icon container', () => {
    const container = screen.getAllByTestId('download-icon-container')[0]
    expect(container).toBeTruthy()
    expect(container.className).toBe('border-b-2 overflow-hidden border-neutral-600 dark:border-neutral-500')
  })
})
