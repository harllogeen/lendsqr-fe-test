import FilterBox from 'users/FilterBox'
import { render, fireEvent, act } from '@testing-library/react'

describe('FilterBox component', () => {
  const mockChangeValue = jest.fn()
  const filterValue = {
    organization: '',
    userName: '',
    email: '',
    createdAt: '',
    status: '',
  }

  it('shows all required input fields with empty values', () => {
    const { getByTestId } = render(
      <FilterBox
        searchValue={filterValue}
        data={[{ orgName: 'Organization 1' }]}
        handleChangeValue={mockChangeValue}
      />,
    )

    expect(getByTestId('filter-input-organization').value).toBe('')
    expect(getByTestId('filter-input-userName').value).toBe('')
    expect(getByTestId('filter-input-email').value).toBe('')
    expect(getByTestId('filter-input-createdAt').value).toBe('')
    expect(getByTestId('filter-input-status').value).toBe('')
  })

  it('triggers event handler on input change', () => {
    const changedSearchValue = { ...filterValue, userName: 'Wilburn.Rice' }
    const { getByTestId, rerender } = render(
      <FilterBox
        searchValue={filterValue}
        data={[{ orgName: 'Organization 1' }]}
        handleChangeValue={mockChangeValue}
      />,
    )

    act(() => {
      fireEvent.change(getByTestId('filter-input-userName'), {
        target: { value: 'Wilburn.Rice' },
      })
    })

    rerender(
      <FilterBox
        searchValue={changedSearchValue}
        data={[{ orgName: 'Organization 1' }]}
        handleChangeValue={mockChangeValue}
      />,
    )

    expect(getByTestId('filter-input-userName').value).toBe('Wilburn.Rice')
  })
})
