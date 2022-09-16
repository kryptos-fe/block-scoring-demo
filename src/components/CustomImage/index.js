import React, { forwardRef } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

const CustomImage = forwardRef(function CustomImage({ isFill, width, height, src, position, ...props }, ref) {
  return (
    <Box
      sx={{ cursor: 'pointer' }}
      ref={ref}
      {...props}
      width={width}
      height={height}
      position={position || 'relative'}
    >
      <Image src={src} layout="fill" objectPosition="center" objectFit={isFill ? 'cover' : 'contain'} alt="" />
    </Box>
  );
});

CustomImage.defaultProps = {
  width: '100%',
  height: '100%',
  isFill: false,
};

CustomImage.propTypes = {
  width: PropTypes.any.isRequired,
  height: PropTypes.any.isRequired,
  position: PropTypes.oneOf(['sticky', 'relative', 'static', 'absolute']),
  isFill: PropTypes.bool,
};

export default CustomImage;
