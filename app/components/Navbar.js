import Link from 'next/link';
 
export default function Navbar() {
  return (
    <header>
        <div>
            <nav className="gap-3 flex flex-row">
                <span>
                    <Link className="shine" href="/">Hakkımda</Link>
                  </span>
                {/* <span><a className="" href="/photos">Fotoğraflar</a></span> */}
                <span>
                  <Link className="shine" href="/post">Yazılar</Link>
                </span>
                </nav>
            </div>
        </header>
  )
}