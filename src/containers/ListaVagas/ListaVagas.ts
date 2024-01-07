import styled from 'styled-components'

export const Jobs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    display: block;
    padding: 12px 20px;
    margin-bottom: 16px;

    *{
      margin-bottom: 16px;
    }
     *:last-child: {
        margin-bottom: 0;
    }
`
