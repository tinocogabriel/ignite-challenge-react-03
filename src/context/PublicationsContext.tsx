import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface PublicationsProviderProps {
  children: ReactNode
}

export interface GithubIssuesProps {
  id: number
  title: string
  body: string
  created_at: Date
  number: number
  comments?: number
  html_url?: string
  user?: {
    login: string
  }
}

interface PublicationsContextType {
  issues: GithubIssuesProps[]
  selectedIssue: GithubIssuesProps
  searchInput: string
  loadIssues: (query?: string) => Promise<void>
  loadIssueById: (id: number) => Promise<void>
  setSearchInputValue: (query: string) => void
}

export const PublicationsContext = createContext<PublicationsContextType>(
  {} as PublicationsContextType,
)
export function PublicationsProvider({ children }: PublicationsProviderProps) {
  const [issues, setIssues] = useState<GithubIssuesProps[]>(
    [] as GithubIssuesProps[],
  )

  const [selectedIssue, setSelectedIssue] = useState<GithubIssuesProps>(
    {} as GithubIssuesProps,
  )

  const [searchInput, setSearchInput] = useState<string>('')

  async function loadIssues(query: string = '') {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
    )
    const { items } = response.data

    setIssues(items)
  }

  async function loadIssueById(id: number) {
    const response = await api.get(
      `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`,
    )
    console.log(response.data)
    setSelectedIssue(response.data)
  }

  function setSearchInputValue(query: string) {
    setSearchInput(query)
  }

  useEffect(() => {
    loadIssues()
  }, [])

  return (
    <PublicationsContext.Provider
      value={{
        issues,
        selectedIssue,
        searchInput,
        loadIssues,
        loadIssueById,
        setSearchInputValue,
      }}
    >
      {children}
    </PublicationsContext.Provider>
  )
}
