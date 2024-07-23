import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  PublicationsContext,
  GithubIssuesProps,
} from '../../../context/PublicationsContext'
import {
  formatPublishedDate,
  formatDateRelativeToNow,
} from '../../../utils/formatter'
import { CardContainer } from './styles'

interface CardIssueProps {
  issue: GithubIssuesProps
}

export function CardIssue({ issue }: CardIssueProps) {
  const navigate = useNavigate()
  const { loadIssueById } = useContext(PublicationsContext)

  async function handlePost() {
    await loadIssueById(issue.number)
    navigate('/post')
  }

  return (
    <CardContainer key={issue.id} onClick={handlePost}>
      <div>
        <h1>{issue.title}</h1>
        <time
          title={formatPublishedDate(issue.created_at)}
          dateTime={issue.created_at.toString()}
        >
          {formatDateRelativeToNow(issue.created_at)}
        </time>
      </div>
      <span>{issue.body}</span>
    </CardContainer>
  )
}
