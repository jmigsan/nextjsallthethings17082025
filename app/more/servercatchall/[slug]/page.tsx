export function generateStaticParams() {
  return [{ slug: ['a', '1'] }, { slug: ['b', '2'] }, { slug: ['c', '3'] }];
}

// Three versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
// - /product/a/1
// - /product/b/2
// - /product/c/3
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  // ...
  return <div>My Post: {slug.join('/')}</div>;
}
