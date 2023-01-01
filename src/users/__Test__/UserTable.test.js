import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserTable from 'users/UserTable'
import { BrowserRouter } from 'react-router-dom'

it('render without crashing', () => {
  render(
    <BrowserRouter>
      <UserTable
        users={[
          {
            id: '1',
            organization: 'labore-dolor-et',
            userName: 'Wilburn.Rice',
            email: 'Maverick.Hyatt83@gmail.com',
            createdAt: 'Dec 27, 2072 04:44 AM',
            status: 'active',
            profile: {
              phoneNumber: '494-278-0946',
            },
          },
        ]}
      />
    </BrowserRouter>,
  )
  const div = screen.getByTestId('user-table')
  expect(div).toBeInTheDocument()
})

it('render popover card only when menu item is clicked', () => {
  render(
    <BrowserRouter>
      <UserTable
        users={[
          {
            id: '1',
            organization: 'labore-dolor-et',
            userName: 'Wilburn.Rice',
            email: 'Maverick.Hyatt83@gmail.com',
            createdAt: 'Dec 27, 2072 04:44 AM',
            status: 'active',
            profile: {
              phoneNumber: '494-278-0946',
            },
          },
        ]}
      />
    </BrowserRouter>,
  )

  expect(screen.queryByTestId('popover-card')).not.toBeInTheDocument()
  const moreItemsCell = screen.queryAllByTestId('more-cell')
  userEvent.click(moreItemsCell[0])
  expect(screen.getByTestId('popover-card')).toBeInTheDocument()
})
