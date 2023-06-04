import Link from 'next/link';
 
export default function Navbar() {
  return (
    <header>
        <div>
            <nav className="hidden flex-col gap-3 sm:!flex sm:flex-row">
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