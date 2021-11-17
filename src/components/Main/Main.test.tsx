import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('should render heading', async () => {
    const url = 'https://techweek21.rchlo.tech/'

    render(<Main url={url} />)

    const linkElement = screen.getByRole('link', {
      name: /acessar/i
    })

    screen.logTestingPlaygroundURL()

    expect(linkElement).toBeInTheDocument()
  })
})

// expect(linkElement).toHaveAttribute('target', '_blank')

// it('should render with correctly background', async () => {
//   const url = 'https://techweek21.rchlo.tech/'

//   const { container } = render(<Main url={url} />)

//   expect(container.firstChild).toHaveStyle('background-color:#212529')
// })

// const logo = screen.getByRole('img', { name: /logo da riachuelo/i })
// const banner = screen.getByRole('img', { name: /banner techweek/i })

// const link = screen.getByRole('link', {
//   name: /acessar/i
// })

// expect(logo).toBeInTheDocument()
// expect(banner).toBeInTheDocument()
// expect(link).toHaveAttribute('href', 'https://techweek21.rchlo.tech/'
