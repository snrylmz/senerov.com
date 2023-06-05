import { Metadata } from 'next';
import Head from 'next/head'
import Navbar from "../../components/Navbar";
import Date from '../../components/date';

async function getContent(slug) {
  const res = await fetch(`https://api.buttercms.com/v2/posts/${slug}?auth_token=7421d8dbab2a4a86ed788e384f8d4024e487ad06`);
  return res.json();
}



export default async function Page({ params: { slug } }) {
  const post = await getContent(slug);
  
  return (
    <div>
      
      <main className="flex min-h-screen flex-col flex-direction px-4 md:px-6 lg:px-12 pt-10 bg-slate-900">

        <div className="max-w-screen-sm mx-auto px-6">
          <div className="mb-20">
            <Navbar />
          </div>
          <div className="">
            <article className="post mt-10 mb-20">
              <header>
                <h1 className="shine text-2xl font-semibold">{post.data.title}</h1>
                <h2 className="text-gray-400 text-md mt-2 text-xl mb-5 font-normal">{post.data.summary}</h2>
                <span className="mr-5 text-sm text-gray-400">Yayın Tarihi: <Date dateString={post.data.published} /></span>
                <span className="text-sm text-gray-400">Son Güncelleme: <Date dateString={post.data.updated} /></span>
              </header>
              <div className="post-body mt-10 leading-relaxed text-zinc-800 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: post.data.body }}></div>
            </article>
          </div>
        </div>
      </main>
    </div>


  );
}