declare module 'gray-matter' {
  const matter: any;
  export = matter;
}

declare module 'next-mdx-remote/serialize' {
  export function serialize(content: string, options?: any): Promise<any>;
}

declare module 'next-mdx-remote' {
  import * as React from 'react';
  export const MDXRemote: React.ComponentType<any>;
  export default MDXRemote;
}

declare module 'rehype-slug' {
  const rehypeSlug: any;
  export default rehypeSlug;
}

declare module 'rehype-autolink-headings' {
  const rehypeAutolinkHeadings: any;
  export default rehypeAutolinkHeadings;
}

declare module 'remark-gfm' {
  const remarkGfm: any;
  export default remarkGfm;
}
