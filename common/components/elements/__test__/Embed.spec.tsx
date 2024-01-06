import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import Embed from '../Embed'

describe('Embed Component', () => {
  beforeEach(() => {
    render(<Embed />)
  })

  it('Should render embed component', () => {
    expect(screen.getByTestId('tiktok-embed')).toBeTruthy()
  })

  it('Should render username anchor', () => {
    expect(screen.getAllByText('@codebayu.com')[0]).toBeTruthy()
  })
})
