import Link from "next/link";
import Navbar from "../../components/Navbar";
import Date from '../../components/date';

async function getContent(slug) {
  const res = await fetch(`https://api.buttercms.com/v2/posts/${slug}?auth_token=7421d8dbab2a4a86ed788e384f8d4024e487ad06`);
  return res.json();
}

const height = {
  height: '600px',
}


export default async function Page({ params: { slug } }) {
  const post = await getContent(slug);
  
  return (
    <main className="flex min-h-screen justify-center px-4 md:px-6 lg:px-12 py-20 bg-slate-950">
    <div className="w-4/5 bg-slate-900 border-4 border-slate-800 rounded-lg">
      <div className="flex h-full overflow-y-scroll">
        <div className="w-3/12 bg-slate-950 p-3 border-e-2 border-slate-900">
          <div className="flex">
            <div className="w-3 h-3 bg-red-500 mx-1 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 mx-1 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 mx-1 rounded-full"></div>
          </div>
          <Navbar />
        </div>
        <div className="w-9/12 bg-slate-900 overflow-y-scroll pb-10" style={height}>
          <div className="bg-slate-950 flex">
          <div className="w-fit pt-1 ms-6">
              <div className="mt-1 bg-slate-900 pt-2 px-4 rounded-t-md">
                <span className="text-md">
                  <Link className="shine" href="/post">Yazılar</Link>
                </span>
              </div>
            </div>
            <div className="w-fit pt-1 ms-1">
              <div className="mt-1 bg-slate-900 pt-2 px-4 rounded-t-md">
                <span className="text-md">{post.data.title}</span>
                <span className="text-md ms-10 text-slate-500">
                  <Link className="shine" href="/post">X</Link>
                </span>
              </div>
            </div>
          </div>
          <article className="post mt-10 ms-10">
              <header className="border-b border-slate-800 pb-5">
                <h1 className="shine text-2xl font-semibold">{post.data.title}</h1>
                <h2 className="text-gray-400 text-md mt-2 text-xl mb-5 font-normal">{post.data.summary}</h2>
                <p className="mr-5 mb-1 text-sm text-white">Yayın Tarihi: <span><Date dateString={post.data.published} /></span></p>
                <p className="mr-5 mb-1 text-sm text-white">Güncellenme Tarihi: <span><Date dateString={post.data.updated} /></span></p>
                <p className="mr-5 mb-1 text-sm text-white">Etiket: 
                  {post.data.tags.map((tags) =>
                    <span className="mx-1 text-gray-400">#{tags.name}, </span>
                  )}
                </p>
              </header>
              <div className="post-body mt-10 leading-relaxed text-zinc-800 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: post.data.body }}></div>
            </article>
        </div>
      </div>
    </div>
  </main>
  );
}