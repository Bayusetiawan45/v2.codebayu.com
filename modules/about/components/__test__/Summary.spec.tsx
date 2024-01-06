import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { summaryMock } from '@/common/mocks/summary'

import Summary from '../Summary'

describe('Summary Component', () => {
  beforeEach(() => {
    render(<Summary />)
  })

  it('Should render summary component', () => {
    expect(screen.getByTestId('summary')).toBeTruthy()
  })

  it('Should render paragraph 1', () => {
    expect(screen.getAllByText(summaryMock.paragraphOne)[0]).toBeTruthy()
  })

  it('Should render paragraph 2', () => {
    expect(screen.getAllByText(summaryMock.paragraphTwo)[0]).toBeTruthy()
  })

  it('Should render paragraph 3', () => {
    expect(screen.getAllByText(summaryMock.paragraphThree)[0]).toBeTruthy()
  })

  it('Should render paragraph 4', () => {
    expect(screen.getAllByText(summaryMock.paragraphFour)[0]).toBeTruthy()
  })
})
