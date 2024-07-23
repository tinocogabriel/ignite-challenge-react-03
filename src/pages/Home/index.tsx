import { HomeContainer, PublicationContainer } from './styles'
import { Profile } from './Profile'
import { SearchForm } from './SearchForm'
import { CardIssue } from './CardIssue'
import { useContext } from 'react'
import { PublicationsContext } from '../../context/PublicationsContext'

export function Home() {
  const { issues } = useContext(PublicationsContext)

  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <PublicationContainer>
        {issues &&
          issues.length > 0 &&
          issues.map((item) => {
            return <CardIssue key={item.id} issue={item} />
          })}
      </PublicationContainer>
    </HomeContainer>
  )
}
