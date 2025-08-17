import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <div className="container mx-auto px-4">
      <section className="text-center my-8">
        <h1 className="text-4xl font-bold">Blog</h1>
      </section>
      <section>
        <ul className="space-y-4">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="border p-4 rounded-md">
              <Link href={`/posts/${id}`} className="text-xl font-bold">
                {title}
              </Link>
              <br />
              <small className="text-gray-500">
                {date}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}