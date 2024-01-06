import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Image from '../Image'

describe('Image Component', () => {
  it('Should render image component', () => {
    render(<Image src="/test" alt="test" width={100} height={100} rounded="rounded" />)
    expect(screen.getByTestId('image')).toBeTruthy()
  })
})
