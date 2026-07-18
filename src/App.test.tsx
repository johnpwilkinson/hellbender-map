import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

test('App mounts and renders the scaffold heading', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: /get started/i })).toBeInTheDocument()
})
