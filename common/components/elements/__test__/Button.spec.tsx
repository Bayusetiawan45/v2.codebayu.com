import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Button from '../Button'

describe('Button Component', () => {
  it('Should render text button component', () => {
    render(<Button theme="text">Click</Button>)
    expect(screen.getByRole('button')).toBeTruthy()
  })

  it('Should render filled button component', () => {
    render(<Button theme="filled">Click</Button>)
    expect(screen.getAllByRole('button')[0]).toBeTruthy()
  })
})
