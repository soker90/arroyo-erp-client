/*
// @vitest-environment happy-dom
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, beforeAll, vi } from 'vitest'

import Clients from './Clients'
import { ThemeWrapper } from '../../../story'

describe.only('Clients', () => {
  beforeAll(() => {
    render(
      <ThemeWrapper>
        <Clients />
      </ThemeWrapper>)
  })
  it('should render with clients', () => {
    expect(screen.getByText('Clientes')).toBeDefined()
  })
})
*/
