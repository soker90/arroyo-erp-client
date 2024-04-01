import { cva } from 'class-variance-authority'
import PropTypes from 'prop-types'

import { cn } from 'utils'

// TODO: In progress

const typographyVariants = cva(
  'm-0 font-normal text-base leading-1.5 tracking-tight text-foreground',
  {
    variants: {
      variant: {
        h1: 'font-medium text-4xl leading-4',
        h2: '',
        h3: '',
        h4: 'font-medium tracking-normal text-xl leading-5 font-semibold',
        h5: '',
        h6: '',
        subtitle1: '',
        subtitle2: 'font-medium leading-relaxed tracking-normal',
        body1: '',
        body2: '',
        caption: '',
        button: '',
        overline: ' '
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
  ...rest
}) => {
  const Component = variantMapping[variant] || 'span'

  return (
    <Component
      className={cn(typographyVariants({ variant }), className)}
      {...rest}
    >{children}
    </Component>
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
  className: PropTypes.string
}

export default Typography
