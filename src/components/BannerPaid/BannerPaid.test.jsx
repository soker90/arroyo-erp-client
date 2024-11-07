import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BannerPaid from './BannerPaid'

describe('BannerPaid', () => {
  it('renders correctly when paid is true', () => {
    const mockDate = new Date('2023-05-15T12:00:00Z')

    render(
      <BannerPaid
        paid
        paymentDate={mockDate.getTime()}
        paymentType='Credit Card'
        className='custom-class'
      />
    )

    const alert = screen.getByRole('alert')
    expect(alert.className).toContain('bg-success')
    expect(alert.className).toContain('dark:bg-success/80')
    expect(alert.className).toContain('text-white')
    expect(alert.className).toContain('custom-class')
    expect(alert.textContent).toBe('PAGADO el 15/05/2023 con Credit Card')
    expect(alert.querySelector('svg')).toBeNull() // No AlertCircle icon for success
  })

  it('renders correctly when paid is false', () => {
    render(
      <BannerPaid
        paid={false}
        className='custom-class'
      />
    )

    const alert = screen.getByRole('alert')
    expect(alert.className).toContain('bg-destructive')
    expect(alert.className).toContain('text-destructive-foreground')
    expect(alert.className).toContain('custom-class')
    expect(alert.textContent).toBe('NO PAGADO')
    expect(alert.querySelector('svg')).not.toBeNull() // AlertCircle icon should be present
  })

  it('applies custom className', () => {
    render(<BannerPaid paid className='test-class' />)

    const alert = screen.getByRole('alert')
    expect(alert.className).toContain('test-class')
  })
})
