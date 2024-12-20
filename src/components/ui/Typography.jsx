import { cva } from 'class-variance-authority'
import PropTypes from 'prop-types'
import React from 'react'

import { cn } from 'utils'

const typographyVariants = cva(
  'm-0 font-normal text-base leading-1.5 tracking-tight text-foreground',
  {
    variants: {
      variant: {
        h1: 'font-light text-6xl leading-10 tracking-wide',
        h2: 'font-bold text-3xl leading-5 tracking-tight',
        h3: 'text-2xl leading-7 tracking-norma font-semibold',
        h4: 'font-medium tracking-normal text-xl leading-5 font-semibold',
        h5: 'text-lg leading-6 tracking-normal',
        h6: 'font-medium leading-9 tracking-normal text-sm',
        subtitle1: 'text-sm leading-9 tracking-normal',
        subtitle2: 'font-bold tracking-normal text-sm leading-relaxed',
        body1: 'leading-7 tracking-normal',
        body2: 'text-sm leading-normal',
        button: 'font-medium text-xs leading-8 tracking-wide uppercase',
        caption: 'text-xs leading-5 tracking-wide',
        overline: 'text-xs leading-14 tracking-widest uppercase'
      }
    },
    defaultVariants: {
      variant: 'body1'
    }
  }
)

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  button: 'span',
  overline: 'span'
}

const Typography = ({
  variant,
  children,
  className,
  component,
  ...rest
}) => {
  const Component = component || variantMapping[variant] || 'span'

  return React.createElement(
    Component,
    {
      className: cn(typographyVariants({ variant }), className),
      ...rest
    },
    children
  )
}

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline'
  ]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType
}

export default Typography
