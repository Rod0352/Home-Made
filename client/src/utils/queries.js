import { gql } from '@apollo/client';

export const  QUERY_BUSINESSES = gql`
 { buisness {
    buisnessName
    buisnessOwner
    email
    cost
    description
  }
}
`

