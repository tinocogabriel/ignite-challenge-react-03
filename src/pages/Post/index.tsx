import { useContext, useEffect } from 'react'
import { PublicationsContext } from '../../context/PublicationsContext'
import {
  InfoContainer,
  InfoDetails,
  InfoTitle,
  PostContainer,
  PostContent,
} from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useNavigate } from 'react-router-dom'
import { formatDateRelativeToNow } from '../../utils/formatter'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function Post() {
  const { selectedIssue } = useContext(PublicationsContext)

  const navigate = useNavigate()

  console.log(selectedIssue.title)
  useEffect(() => {
    if (!selectedIssue.title) {
      navigate('/')
    }
  }, [])

  return (
    <PostContainer>
      <InfoContainer>
        <InfoTitle>
          <NavLink to="/">
            <a href="#">
              <FontAwesomeIcon size="sm" icon={faChevronLeft} />
              <span>Voltar</span>
            </a>
          </NavLink>
          <a href={selectedIssue.html_url} target="_blank">
            <span>Ver no Github</span>
            <FontAwesomeIcon size="sm" icon={faArrowUpRightFromSquare} />
          </a>
        </InfoTitle>
        <h1>{selectedIssue.title}</h1>
        <InfoDetails>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {selectedIssue.user?.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {selectedIssue.created_at &&
              formatDateRelativeToNow(selectedIssue.created_at)}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} fill="solid" />
            {selectedIssue.comments}{' '}
            {selectedIssue.comments === 1 ? 'comentário' : 'comentários'}
          </span>
        </InfoDetails>
      </InfoContainer>
      <PostContent>
        <ReactMarkdown
          children={selectedIssue.body}
          remarkPlugins={[remarkGfm]}
        />
      </PostContent>
    </PostContainer>
  )
}
