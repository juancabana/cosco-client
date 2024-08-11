/**
 * Shared UI Components
 */

import { GatsbyImage } from 'gatsby-plugin-image';
import React, { type FC } from 'react';


interface Props {
  className?: string;
  loading?: 'eager' | 'lazy';
}

/**
 * Renders a Image from Contentful.
 */
const ContentfulImage: FC<ContentfulImage & Props> = ({
  description,
  file,
  gatsbyImageData,
  loading = 'lazy',
  ...props
}) => {
  if (gatsbyImageData && file.contentType !== 'image/webp')
    return <GatsbyImage image={gatsbyImageData} alt={description} loading={loading} {...props} />;

  return (
    <img
      src={file.url}
      alt={description}
      loading={loading}
      {...props}
    />
  );
};

export default ContentfulImage;
