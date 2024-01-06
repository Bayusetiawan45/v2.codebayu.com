import Link from 'next/link'

import React from 'react'

import { IBadgeVariant } from '@/common/types'

interface BadgeProps {
  children: React.ReactNode
  href?: string
  target?: React.HTMLAttributeAnchorTarget | undefined
  variant?: IBadgeVariant
  size?: 'small' | 'medium' | 'large'
}

export default function Badge(props: BadgeProps) {
  const { children, variant = 'primary', size = 'medium', href, target } = props

  let variantColor = ''
  let chooseSize = ''

  switch (variant) {
    case 'primary':
      variantColor = 'bg-neutral-200 dark:bg-neutral-700'
      break
    case 'secondary':
      variantColor = 'bg-neutral-700 text-white dark:bg-neutral-200 dark:text-black'
      break
    case 'success':
      variantColor = 'bg-emerald-100 text-emerald-700 dark:bg-emerald-200 dark:text-black'
      break
    case 'danger':
      variantColor = 'bg-red-100 text-red-700 dark:bg-red-200 dark:text-black'
      break
    case 'warning':
      variantColor = 'bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-black'
      break
    case 'info':
      variantColor = 'bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-black'
      break
    default:
      variantColor = 'bg-neutral-200 dark:bg-neutral-700'
  }

  switch (size) {
    case 'small':
      chooseSize = 'px-2 py-[1px] text-[10px]'
      break
    case 'medium':
      chooseSize = 'px-2 py-1 text-xs'
      break
    case 'large':
      chooseSize = 'px-3 py-2 text-xs'
      break
    default:
      chooseSize = 'px-2 py-1 text-xs'
  }
  if (href)
    return (
      <Link
        data-testid="badge-link"
        href={href}
        target={target}
        className={`font-medium text-center rounded-full ${chooseSize} ${variantColor}`}
      >
        {children}
      </Link>
    )
  return (
    <span data-testid="badge" className={`font-medium text-center rounded-full ${chooseSize} ${variantColor}`}>
      {children}
    </span>
  )
}
