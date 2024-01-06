import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AnimateCounter from '../AnimateCounter'

describe('Animate Counter Component', () => {
  it('Should render counter', async () => {
    render(<AnimateCounter total={42} />)
    expect(screen.getByTestId('counter')).toBeTruthy()
  })
})
