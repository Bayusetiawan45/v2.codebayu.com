import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Card from '../Card'

describe('Card Component', () => {
  it('Should render card component', () => {
    render(
      <Card>
        <h1>Children</h1>
      </Card>
    )
    expect(screen.getByTestId('card')).toBeTruthy()
  })
})
