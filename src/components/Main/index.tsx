import { Wrapper, Logo, Illustration, Link } from './styles'

type Props = {
  url?: string
}

export const Main = ({ url = 'https://techweek21.rchlo.tech/' }: Props) => {
  return (
    <Wrapper>
      <Logo src="/img/riachuelo.svg" alt="Logo da Riachuelo" />

      <Illustration src="/img/banner.jpg" alt="Banner TechWeek" />

      <Link href={url} target={'_blank'}>
        Acessar
      </Link>
    </Wrapper>
  )
}
