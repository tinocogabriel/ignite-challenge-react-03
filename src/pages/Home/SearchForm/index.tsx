import { useContext } from 'react'
import { PublicationsContext } from '../../../context/PublicationsContext'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { issues, searchInput, loadIssues, setSearchInputValue } =
    useContext(PublicationsContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearch({ query }: SearchFormInputs) {
    await loadIssues(query)
  }

  function searchInputChanged(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInputValue(event.target.value)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <div>
        <h3>Publicações</h3>
        <span>
          {issues.length === 1
            ? `${issues.length} publicação`
            : `${issues.length} publicações`}
        </span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
        value={searchInput}
        onChange={searchInputChanged}
      />
    </SearchFormContainer>
  )
}
