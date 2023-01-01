import { render, screen } from '@testing-library/react'
import PopoverCard from 'users/PopoverCard'

it('renders the menu links appropriately', () => {
  render(<PopoverCard />)
  expect(screen.getByText('View Details')).toBeInTheDocument()
  expect(screen.getByText('Blacklist User')).toBeInTheDocument()
  expect(screen.getByText('Activate User')).toBeInTheDocument()
})
