import { FormEvent, useState } from 'react'
import { Form, InputField, SearchButton } from './FormVagas'

type Props = {
  whenSearch: (term: string) => void
}

const FormVagas = ({ whenSearch }: Props) => {
  const [term, setTerm] = useState<string>('')

  const sendingForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (typeof whenSearch === 'function') {
      whenSearch(term.toLocaleLowerCase())
    }
  }

  return (
    <Form onSubmit={sendingForm}>
      <InputField
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTerm(e.target.value)}
        type="search"
      />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  )
}
export default FormVagas
