import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Badge from '../Badge'

describe('Animate Badge Component', () => {
  it('Should render default badge', async () => {
    render(<Badge>hello</Badge>)
    expect(screen.getByTestId('badge')).toBeTruthy()
  })

  it('Should render badge link', async () => {
    render(<Badge href="/hello">hello</Badge>)
    expect(screen.getByTestId('badge-link')).toBeTruthy()
  })

  it('Should render badge primary small', async () => {
    render(
      <Badge variant="primary" size="small">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[1]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-[1px] text-[10px] bg-neutral-200 dark:bg-neutral-700'
    )
  })

  it('Should render badge primary medium', async () => {
    render(
      <Badge variant="primary" size="medium">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[0]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-1 text-xs bg-neutral-200 dark:bg-neutral-700'
    )
  })

  it('Should render badge primary large', async () => {
    render(
      <Badge variant="primary" size="large">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[3]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-3 py-2 text-xs bg-neutral-200 dark:bg-neutral-700'
    )
  })

  it('Should render badge secondary small', async () => {
    render(
      <Badge variant="secondary" size="small">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[4]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-[1px] text-[10px] bg-neutral-700 text-white dark:bg-neutral-200 dark:text-black'
    )
  })

  it('Should render badge secondary medium', async () => {
    render(
      <Badge variant="secondary" size="medium">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[5]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-1 text-xs bg-neutral-700 text-white dark:bg-neutral-200 dark:text-black'
    )
  })

  it('Should render badge secondary large', async () => {
    render(
      <Badge variant="secondary" size="large">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[6]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-3 py-2 text-xs bg-neutral-700 text-white dark:bg-neutral-200 dark:text-black'
    )
  })

  it('Should render badge success small', async () => {
    render(
      <Badge variant="success" size="small">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[7]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-[1px] text-[10px] bg-emerald-100 text-emerald-700 dark:bg-emerald-200 dark:text-black'
    )
  })

  it('Should render badge success medium', async () => {
    render(
      <Badge variant="success" size="medium">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[8]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-1 text-xs bg-emerald-100 text-emerald-700 dark:bg-emerald-200 dark:text-black'
    )
  })

  it('Should render badge success large', async () => {
    render(
      <Badge variant="success" size="large">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[9]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-3 py-2 text-xs bg-emerald-100 text-emerald-700 dark:bg-emerald-200 dark:text-black'
    )
  })

  it('Should render badge danger small', async () => {
    render(
      <Badge variant="danger" size="small">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[10]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-[1px] text-[10px] bg-red-100 text-red-700 dark:bg-red-200 dark:text-black'
    )
  })

  it('Should render badge danger medium', async () => {
    render(
      <Badge variant="danger" size="medium">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[11]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-1 text-xs bg-red-100 text-red-700 dark:bg-red-200 dark:text-black'
    )
  })

  it('Should render badge danger large', async () => {
    render(
      <Badge variant="danger" size="large">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[12]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-3 py-2 text-xs bg-red-100 text-red-700 dark:bg-red-200 dark:text-black'
    )
  })

  it('Should render badge warning small', async () => {
    render(
      <Badge variant="warning" size="small">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[13]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-[1px] text-[10px] bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-black'
    )
  })

  it('Should render badge warning medium', async () => {
    render(
      <Badge variant="warning" size="medium">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[14]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-1 text-xs bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-black'
    )
  })

  it('Should render badge warning large', async () => {
    render(
      <Badge variant="warning" size="large">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[15]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-3 py-2 text-xs bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-black'
    )
  })

  it('Should render badge info small', async () => {
    render(
      <Badge variant="info" size="small">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[16]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-[1px] text-[10px] bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-black'
    )
  })

  it('Should render badge info medium', async () => {
    render(
      <Badge variant="info" size="medium">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[17]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-1 text-xs bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-black'
    )
  })

  it('Should render badge info large', async () => {
    render(
      <Badge variant="info" size="large">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge')[18]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-3 py-2 text-xs bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-black'
    )
  })

  it('Should render badge default', async () => {
    render(<Badge>hello</Badge>)
    const badge = screen.getAllByTestId('badge')[19]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-1 text-xs bg-neutral-200 dark:bg-neutral-700'
    )
  })

  ///

  it('Should render badge link', async () => {
    render(
      <Badge href="/hello" variant="primary" size="small">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[0]
    expect(badge).toBeTruthy()
  })

  it('Should render badge link primary small', async () => {
    render(
      <Badge href="/hello" variant="primary" size="medium">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[1]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-[1px] text-[10px] bg-neutral-200 dark:bg-neutral-700'
    )
  })

  it('Should render badge link primary medium', async () => {
    render(
      <Badge href="/hello" variant="primary" size="medium">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[0]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-1 text-xs bg-neutral-200 dark:bg-neutral-700'
    )
  })

  it('Should render badge link primary large', async () => {
    render(
      <Badge href="/hello" variant="primary" size="large">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[4]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-3 py-2 text-xs bg-neutral-200 dark:bg-neutral-700'
    )
  })

  it('Should render badge link secondary small', async () => {
    render(
      <Badge href="/hello" variant="secondary" size="small">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[5]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-[1px] text-[10px] bg-neutral-700 text-white dark:bg-neutral-200 dark:text-black'
    )
  })

  it('Should render badge link secondary medium', async () => {
    render(
      <Badge href="/hello" variant="secondary" size="medium">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[6]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-1 text-xs bg-neutral-700 text-white dark:bg-neutral-200 dark:text-black'
    )
  })

  it('Should render badge link secondary large', async () => {
    render(
      <Badge href="/hello" variant="secondary" size="large">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[7]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-3 py-2 text-xs bg-neutral-700 text-white dark:bg-neutral-200 dark:text-black'
    )
  })

  it('Should render badge link success small', async () => {
    render(
      <Badge href="/hello" variant="success" size="small">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[8]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-[1px] text-[10px] bg-emerald-100 text-emerald-700 dark:bg-emerald-200 dark:text-black'
    )
  })

  it('Should render badge link success medium', async () => {
    render(
      <Badge href="/hello" variant="success" size="medium">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[9]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-1 text-xs bg-emerald-100 text-emerald-700 dark:bg-emerald-200 dark:text-black'
    )
  })

  it('Should render badge link success large', async () => {
    render(
      <Badge href="/hello" variant="success" size="large">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[10]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-3 py-2 text-xs bg-emerald-100 text-emerald-700 dark:bg-emerald-200 dark:text-black'
    )
  })

  it('Should render badge link danger small', async () => {
    render(
      <Badge href="/hello" variant="danger" size="small">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[11]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-[1px] text-[10px] bg-red-100 text-red-700 dark:bg-red-200 dark:text-black'
    )
  })

  it('Should render badge link danger medium', async () => {
    render(
      <Badge href="/hello" variant="danger" size="medium">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[12]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-1 text-xs bg-red-100 text-red-700 dark:bg-red-200 dark:text-black'
    )
  })

  it('Should render badge link danger large', async () => {
    render(
      <Badge href="/hello" variant="danger" size="large">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[13]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-3 py-2 text-xs bg-red-100 text-red-700 dark:bg-red-200 dark:text-black'
    )
  })

  it('Should render badge link warning small', async () => {
    render(
      <Badge href="/hello" variant="warning" size="small">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[14]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-[1px] text-[10px] bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-black'
    )
  })

  it('Should render badge link warning medium', async () => {
    render(
      <Badge href="/hello" variant="warning" size="medium">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[15]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-1 text-xs bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-black'
    )
  })

  it('Should render badge link warning large', async () => {
    render(
      <Badge href="/hello" variant="warning" size="large">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[16]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-3 py-2 text-xs bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-black'
    )
  })

  it('Should render badge link info small', async () => {
    render(
      <Badge href="/hello" variant="info" size="small">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[17]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-[1px] text-[10px] bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-black'
    )
  })

  it('Should render badge link info medium', async () => {
    render(
      <Badge href="/hello" variant="info" size="medium">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[18]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-2 py-1 text-xs bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-black'
    )
  })

  it('Should render badge link info large', async () => {
    render(
      <Badge href="/hello" variant="info" size="large">
        hello
      </Badge>
    )
    const badge = screen.getAllByTestId('badge-link')[19]
    expect(badge).toBeTruthy()
    expect(badge.className).toBe(
      'font-medium text-center rounded-full px-3 py-2 text-xs bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-black'
    )
  })
})
