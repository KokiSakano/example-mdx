import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => {
      return <h2 className="mt-10 text-3xl font-bold" {...props} />;
    },
    ...components,
  };
};
