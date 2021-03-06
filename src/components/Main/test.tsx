import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /olá mundo/i })
    ).toBeInTheDocument()
  })

  it('should render correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
