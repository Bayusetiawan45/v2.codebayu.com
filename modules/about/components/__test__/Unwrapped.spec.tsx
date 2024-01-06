import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import Unwrapped from '../Unwrapped'

describe('Unwrapped Component', () => {
  beforeEach(() => {
    render(<Unwrapped />)
  })

  it('Should render unwrapped section heading component', () => {
    expect(screen.getByTestId('unwrapped-section-heading')).toBeTruthy()
  })

  it('Should render unwrapped component', () => {
    expect(screen.getAllByTestId('unwrapped-video')[0]).toBeTruthy()
  })
})
