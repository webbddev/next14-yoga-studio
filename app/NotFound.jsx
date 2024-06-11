import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </div>
  );
}
// import dynamic from 'next/dynamic';

// const DynamicNotFound = dynamic(
//   () => import('./[locale]/_components/notFound/notFound.component'),
//   { ssr: false }
// );

// export default function NotFound() {
//   return <DynamicNotFound />;
// }
