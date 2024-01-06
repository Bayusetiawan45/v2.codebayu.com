import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import CursorDots from '../CursorDots'

describe('CursorDots Component', () => {
  it('Should render cursor dots component', () => {
    render(<CursorDots />)
    expect(screen.getByTestId('cursor-dots')).toBeTruthy()
  })
})
