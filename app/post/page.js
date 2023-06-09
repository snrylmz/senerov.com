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
const height = {
  height: '600px',
}


export default async function Home({ }) {
  const data = await getData();
  return (

    <main className="flex min-h-screen justify-center px-4 md:px-6 lg:px-12 py-5 md:py-20 bg-slate-950">
    <div className="md:w-4/5 bg-slate-900 border-4 border-slate-800 rounded-lg">
      <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-3/12 bg-slate-950 p-3 border-e-2 border-slate-900">
            <div className="flex">
              <div className="w-3 h-3 bg-red-500 mx-1 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 mx-1 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 mx-1 rounded-full"></div>
            </div>
            <Navbar />
          </div>
          <div className="md:w-9/12 bg-slate-900 overflow-y-scroll pb-10" style={height}>
            <div className="bg-slate-950">
              <div className="w-fit pt-1 ms-3 md:ms-10">
                <div className="mt-1 bg-slate-900 pt-2 px-4 rounded-t-md">
                  <span className="text-md">Blog yazıları ve kısa notlar</span>
                  <span className="text-md ms-10 text-slate-500">
                    <Link className="shine" href="/">X</Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-10 ms-3 md:ms-10">
              {data.data.map((post) =>
                <article className="mt-10 border-b border-slate-800 pb-5" key={post.id}>
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
        </div>
      </div>
    </main>
  )
}
