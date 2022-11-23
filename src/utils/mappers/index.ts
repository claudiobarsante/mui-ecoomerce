import {
  AuthorEntity,
  BookEntity,
  BookQuery,
  WishlistEntity,
  WishlistEntityResponse,
  WishlistEntityResponseCollection
} from 'graphql/generated/graphql';

export type BookProps = {
  id: string;
  sku: string;
  title: string;
  coverImageUrl: string;
  isOnSale: boolean;
  pageCount: number;
  price: number;
  rating: number | undefined | null;
  salePrice: number;
  synopsis: string;
  stock: number;
  authors: (string | null | undefined)[] | undefined;
  publisher: string | undefined | null;
  totalRatings: number | null | undefined;
};

export const bookMapper = (bookData: BookQuery) => {
  const id = bookData.book?.data?.id!;
  const {
    title,
    sku,
    coverImageUrl,
    isOnSale,
    pageCount,
    price,
    rating,
    salePrice,
    synopsis,
    stock,
    totalRatings
  } = bookData.book?.data?.attributes!;

  if (bookData.book?.data) {
    const extractedAuthors = bookData.book?.data?.attributes?.authors?.data.map(
      (author) => author.attributes?.name
    );

    const book: BookProps = {
      id,
      sku,
      title,
      coverImageUrl,
      isOnSale,
      pageCount,
      price,
      rating,
      salePrice,
      synopsis,
      stock,
      totalRatings,
      authors: extractedAuthors,
      publisher:
        bookData.book?.data?.attributes?.publisher?.data?.attributes?.name
    };

    return book;
  }

  return {};
};

export const bookToWishlistMapper = (bookData: BookEntity) => {
  const id = bookData?.id!;
  const {
    title,
    sku,
    coverImageUrl,
    isOnSale,
    pageCount,
    price,
    rating,
    salePrice,
    synopsis,
    stock,
    totalRatings
  } = bookData.attributes!;

  if (bookData?.attributes) {
    const extractedAuthors = bookData?.attributes?.authors?.data.map(
      (author: AuthorEntity) => author.attributes?.name
    );

    const book: BookProps = {
      id,
      sku,
      title,
      coverImageUrl,
      isOnSale,
      pageCount,
      price,
      rating,
      salePrice,
      synopsis,
      stock,
      totalRatings,
      authors: extractedAuthors,
      publisher: bookData.attributes.publisher?.data?.attributes?.name
    };

    return book;
  }

  return {};
};
