import { useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from '../styles';

import { Stack, Tooltip, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
//import useDialogModal from '../../hooks/useDialogModal';
//import ProductDetail from '../productdetail';
import ProductInfo from '../Info';
import { ProductType } from 'data';
import { FeaturedBook } from 'components/Featured';

type Props = {
  book: FeaturedBook;
  isMobile: boolean;
};
export default function SingleProductDesktop({ book, isMobile }: Props) {
  //   const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
  //     useDialogModal(ProductDetail);

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    console.log('passei');
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  console.log('isMobile: ', isMobile, showOptions);
  return (
    <>
      <S.Product
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* <S.ProductImage src={book.attributes.coverImageUrl} /> */}
        <S.ProductImage>
          <Image
            src={book.attributes.coverImageUrl}
            alt={book.attributes.title}
            // layout="responsive"
            width={500}
            height={650}
            aria-label={book.attributes.title}
          />
        </S.ProductImage>
        <S.FavButton isfav={0}>
          <Tooltip placement="left" title="add to my wishlist">
            <FavoriteIcon />
          </Tooltip>
        </S.FavButton>
        {(showOptions || isMobile) && (
          <S.AddToCartButton istoshow={`${showOptions}`} variant="contained">
            Add to cart
          </S.AddToCartButton>
        )}
        <S.ActionsButtonsContainer istoshow={showOptions.toString()}>
          <Stack direction={isMobile ? 'row' : 'column'}>
            <S.ActionButton>
              <Tooltip placement="left" title="share this product">
                <ShareIcon color="primary" />
              </Tooltip>
            </S.ActionButton>
            <S.ActionButton onClick={() => {}}>
              <Tooltip placement="left" title="full view">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </S.ActionButton>
          </Stack>
        </S.ActionsButtonsContainer>
      </S.Product>
      <ProductInfo book={book} />
      {/* <ProductDetailDialog product={product} /> */}
    </>
  );
}
