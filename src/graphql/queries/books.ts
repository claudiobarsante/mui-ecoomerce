import { gql } from '@apollo/client';

export const BookFragment = gql`
  fragment BookFragment on Book {
    title
    sku
    coverImageUrl
    isOnSale
    pageCount
    userRatings
    price
    rating
    salePrice
    synopsis
    stock
    totalRatings
    authors {
      data {
        attributes {
          name
        }
      }
    }
    publisher {
      data {
        attributes {
          name
        }
      }
    }
  }
`;

export const FEATURED_QUERY = gql`
  query Featured {
    books(filters: { isFeatured: { eq: true } }) {
      data {
        id
        attributes {
          ...BookFragment
        }
      }
    }
  }
  ${BookFragment}
`;

export const BOOK_QUERY = gql`
  query Book($id: ID!) {
    book(id: $id) {
      data {
        id
        attributes {
          ...BookFragment
        }
      }
    }
  }
  ${BookFragment}
`;

export const BOOKS_FILTERS_QUERY = gql`
  query BooksFilters(
    $page: Int
    $pageSize: Int
    $filters: BookFiltersInput
    $sort: [String]
  ) {
    books(
      filters: $filters
      sort: $sort
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      data {
        id
        attributes {
          ...BookFragment
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
  ${BookFragment}
`;

/**
 * query BookByAuthor{
  books(filters:{authors:{name:{in:["J. R. R. Tolkien"]}}}){
    data{
      id      
      attributes{
        title
        slug
      }
    }
  }
}
 */

/**
 * import { gql } from '@apollo/client';

// todo: not using, remove it
export const BOOKS_QUERY = gql`
  query Books {
    books {
      data {
        attributes {
          title
          synopsis
        }
      }
    }
  }
`;

export const FEATURED_QUERY = gql`
  query Featured {
    books(filters: { isFeatured: { eq: true } }) {
      data {
        id
        attributes {
          title
          sku
          price
          coverImageUrl
          rating
        }
      }
    }
  }
`;

export const BOOK_QUERY = gql`
  query Book($id: ID!) {
    book(id: $id) {
      data {
        id
        attributes {
          title
          sku
          coverImageUrl
          isOnSale
          pageCount
          userRatings
          price
          rating
          salePrice
          synopsis
          stock
          totalRatings
          authors {
            data {
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const BOOKS_FILTERS_QUERY = gql`
  query BooksFilters(
    $page: Int
    $pageSize: Int
    $filters: BookFiltersInput
    $sort: [String]
  ) {
    books(
      filters: $filters
      sort: $sort
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      data {
        id
        attributes {
          title
          sku
          price
          coverImageUrl
          rating
          authors {
            data {
              id
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`;

/**
 * query BookByAuthor{
  books(filters:{authors:{name:{in:["J. R. R. Tolkien"]}}}){
    data{
      id      
      attributes{
        title
        slug
      }
    }
  }
}
 */
