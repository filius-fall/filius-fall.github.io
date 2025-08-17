
import { getAllPostIds, getPostData } from '../../../lib/posts';
import Date from '../../../components/date';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(path => ({ id: path.params.id }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return (
    <div className="container mx-auto px-4">
      <article className="prose lg:prose-xl mx-auto my-8">
        <h1 className="text-4xl font-bold">{postData.title}</h1>
        <div className="text-gray-500">
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}
