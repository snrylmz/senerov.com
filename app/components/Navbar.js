import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      <div>
        <nav className="gap-3 flex flex-row">
          <div className="flex flex-col pt-10">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#cbd5e1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 9h.01" />
                <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                <path d="M11 12h1v4h1" />
              </svg>
              <span className="text-slate-300 hover:text-slate-100 ps-1 text-sm">
                <Link className="shine" href="/">Hakkımda</Link>
              </span>
            </div>
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#cbd5e1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M9 15h-2" />
                <path d="M13 12h-6" />
                <path d="M11 9h-4" />
              </svg>
              <span className="text-slate-300 hover:text-slate-100 ps-1 text-sm">
                <Link className="shine" href="/post">Yazılar</Link>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}