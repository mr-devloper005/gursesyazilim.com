'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Globe2, LogOut, Menu, Plus, Search, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

const links = [
  { label: 'Classified', href: '/classified' },
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Search', href: '/search' },
]

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const active = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)]/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-[86px] max-w-[var(--editable-container)] items-center gap-8 px-5 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${SITE_CONFIG.name} home`}>
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-[14px] bg-[#0a1024] shadow-[0_8px_24px_rgba(30,54,150,.18)]">
            <img src="/favicon.png" alt="" className="h-full w-full object-contain p-1" />
          </span>
          <span className="text-lg font-extrabold tracking-[-.04em]">{SITE_CONFIG.name}</span>
        </Link>

        <div className="mx-auto hidden items-center gap-8 lg:flex">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className={`relative py-8 text-sm font-semibold transition ${active(item.href) ? 'text-[var(--slot4-accent)]' : 'hover:text-[var(--slot4-accent)]'}`}>
              {item.label}
              {active(item.href) ? <span className="absolute inset-x-0 bottom-0 h-[3px] rounded-t-full bg-[var(--slot4-accent)]" /> : null}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/search" aria-label="Search" className="hidden rounded-full p-3 transition hover:bg-white sm:inline-flex"><Search className="h-5 w-5" /></Link>
          <span className="hidden items-center gap-1 text-sm md:flex"><Globe2 className="h-5 w-5" /></span>
          {session ? (
            <>
              <span className="hidden max-w-36 items-center gap-2 truncate px-2 text-sm font-bold sm:flex"><UserRound className="h-5 w-5" />{session.name}</span>
              <Link href="/create" className="hidden items-center gap-2 rounded-full bg-[var(--slot4-accent)] px-5 py-3 text-sm font-bold text-white sm:flex"><Plus className="h-4 w-4" /> Create</Link>
              <button type="button" onClick={logout} className="hidden items-center gap-2 rounded-full border border-[#17191d] px-5 py-3 text-sm font-bold sm:flex"><LogOut className="h-4 w-4" /> Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-2 px-3 py-3 text-sm font-bold sm:flex"><UserRound className="h-5 w-5" /> Login</Link>
              <Link href="/signup" className="hidden rounded-full bg-[#17191d] px-6 py-3 text-sm font-bold text-white sm:block">Sign up</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen(!open)} className="rounded-full border border-[var(--editable-border)] p-2.5 lg:hidden" aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {open ? <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-5 py-5 lg:hidden">
        <div className="grid gap-1">{links.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold hover:bg-white">{item.label}</Link>)}</div>
        <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--editable-border)] pt-4">
          {session ? <><span className="w-full px-2 py-2 font-bold">{session.name}</span><Link href="/create" className="rounded-full bg-[var(--slot4-accent)] px-5 py-3 font-bold text-white">Create</Link><button onClick={logout} className="rounded-full border px-5 py-3 font-bold">Logout</button></> : <><Link href="/login" className="rounded-full border px-5 py-3 font-bold">Login</Link><Link href="/signup" className="rounded-full bg-[#17191d] px-5 py-3 font-bold text-white">Sign up</Link></>}
        </div>
      </div> : null}
    </header>
  )
}
