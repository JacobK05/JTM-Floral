import { gql } from '@apollo/client'

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
    
    }
  }

`

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
     _id
     username
    }
  }

`


export const QUERY_ME = gql`
  query me {
    me {
     _id
     username
    }
  }

`

export const QUERY_SERVICES = gql`
  query allServices {
    services {
      _id
      name
      description
    }
  }

`