import Navbar from "../../components/Navbar";
import Date from '../../components/date';

async function getContent(slug) {
  const res = await fetch(`https://api.buttercms.com/v2/posts/${slug}?auth_token=7421d8dbab2a4a86ed788e384f8d4024e487ad06`);
  return res.json();
}

export default async function Page({ params: { slug } }) {
  const page = await getContent(slug);

  return (
    <main className="flex min-h-screen flex-col flex-direction px-24 pt-10 dark:bg-gray-950">
    <div className="max-w-screen-sm mx-auto px-6">
    <div className="mb-20">
          <Navbar />
        </div>
      <div className="">
        <article className="post mt-10 mb-20">
          <header>
            <h1 className="shine text-2xl font-semibold">{page.data.title}</h1>
            <h2 className="text-gray-400 text-md mt-2 text-xl mb-5 font-normal">{page.data.summary}</h2>
            <Date dateString={page.data.updated} className="text-lg" />
          </header>
          <div className="post-body mt-10 leading-relaxed text-zinc-800 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: page.data.body }}></div>
        </article>
      </div>
    </div>      
  </main>
  );
}