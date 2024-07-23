import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ProfileContainer,
  ProfileBio,
  ProfileBioTitle,
  ProfileInfo,
} from './styles'
import { useState, useEffect } from 'react'
import { api } from '../../../lib/axios'

interface UserProps {
  avatar_url: string
  name: string
  bio?: string
  login: string
  company: string
  followers: number
  html_url: string
}

export function Profile() {
  const [user, setUser] = useState<UserProps>({} as UserProps)

  async function loadUserData() {
    const { data } = await api.get('users/tinocogabriel')
    setUser(data)
  }

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" />
      <div>
        <ProfileBio>
          <ProfileBioTitle>
            <h1>{user.name}</h1>
            <a href={user.html_url} target="_blank">
              <span>GITHUB</span>
              <FontAwesomeIcon size="sm" icon={faArrowUpRightFromSquare} />
            </a>
          </ProfileBioTitle>
          <span>
            {user.bio && user.bio !== '' ? user.bio : 'Sem bio cadastrada :('}
          </span>
        </ProfileBio>
        <ProfileInfo>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {user.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {user.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {user.followers} {user.followers === 1 ? 'Seguidor' : 'Seguidores'}
          </span>
        </ProfileInfo>
      </div>
    </ProfileContainer>
  )
}
