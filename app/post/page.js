import Navbar from "../components/Navbar";
import Date from '../components/date';
import Link from 'next/link';

async function getData() {
  const res = await fetch(`https://api.buttercms.com/v2/posts/?auth_token=7421d8dbab2a4a86ed788e384f8d4024e487ad06`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}



export default async function Home({  }) {
  const data = await getData();
  return (
    
    <main className="flex min-h-screen flex-col flex-direction px-24 pt-10 dark:bg-gray-950">
      
      
      <div className="max-w-screen-sm mx-auto px-6">
        <div className="mb-20">
          <Navbar />
        </div>
        <div className="mt-10">
          <h2 className="shine text-2xl leading-snug text-gray-400">Blog yazıları ve kısa notlar</h2>
        </div>
        <div className="mt-20 mb-20">
        {data.data.map((post) =>
          <article className="mt-10" key={post.id}>
            <header>
              <h3 className="shine font-semibold text-2xl mb-2">
                <Link className="hover:text-gray-400" href={`/post/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="mt-1 text-gray-400 text-sm mb-2">
                {post.summary}
              </p>
            </header>
            <footer>
              <Date dateString={post.updated} className="text-xs" />
            </footer>
          </article>
          )}
        </div>
      </div>      
    </main>
  )
}
