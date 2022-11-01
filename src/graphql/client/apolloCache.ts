import { InMemoryCache } from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        books: concatPagination(['filters', 'sort'])
      }
    },
    Rating: {
      fields: {
        tasks: {
          merge(existing = [], incoming: any[]) {
            return [...existing, ...incoming];
          }
        }
      }
    }
  }
});
