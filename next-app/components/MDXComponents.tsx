import React from 'react'

const Callout = ({ children, type = 'info' }: any) => {
  const base = 'p-4 rounded-lg border';
  const styles: any = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    warning: 'bg-red-50 border-red-200 text-red-900',
    green: 'bg-green-50 border-green-200 text-green-900',
  };
  return <div className={`${base} ${styles[type]}`}>{children}</div>;
}

const MDXComponents: any = {
  Callout,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
  a: (props: any) => <a className="text-blue-600 underline" {...props} />,
  ul: (props: any) => <ul className="list-disc ml-6" {...props} />,
  ol: (props: any) => <ol className="list-decimal ml-6" {...props} />,
}

export default MDXComponents
