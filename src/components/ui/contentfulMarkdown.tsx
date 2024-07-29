/**
 * Shared UI Components
 */

import React, { type FC } from 'react';

interface Props {
  className?: string;
}

/**
 * Renders a Markdown from Contentful.
 */
const ContentfulMarkdown: FC<ContentfulMarkdown & Props> = ({ childMarkdownRemark, ...props }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: childMarkdownRemark.html,
      }}
      {...props}
    />
  );
};

export default ContentfulMarkdown;
