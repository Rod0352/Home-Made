import { gql } from '@apollo/client';

export const  QUERY_BUSINESSES = gql`
query  buisness{
    buisnessName
    buisnessOwner
    email
    cost
    description
  }
`

