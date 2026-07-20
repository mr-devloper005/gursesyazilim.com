'use client'
import Link from 'next/link'
import { ArrowUpRight, LogOut } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const { session, logout } = useEditableLocalAuthSession()
  return <footer className="bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
    <div className="mx-auto max-w-[var(--editable-container)] px-5 py-16 lg:px-8">
      <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div><Link href="/" className="flex items-center gap-3 text-xl font-extrabold"><span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-[15px] bg-[#0a1024] shadow-[0_10px_30px_rgba(52,87,255,.2)]"><img src="/favicon.png" alt="" className="h-full w-full object-contain p-1" /></span>{SITE_CONFIG.name}</Link><p className="mt-5 max-w-md leading-7 text-white/60">Discover relevant classified offers and professional profiles built around trust, useful details, and direct connections.</p></div>
        <div><p className="text-xs font-bold uppercase tracking-[.22em] text-white/40">Explore</p><div className="mt-5 grid gap-3">{[['Classified','/classified'],['Home','/'],['About','/about'],['Search','/search']].map(([label,href])=><Link key={href} href={href} className="flex items-center gap-2 hover:text-[#9eafff]">{label}<ArrowUpRight className="h-4 w-4" /></Link>)}</div></div>
        <div><p className="text-xs font-bold uppercase tracking-[.22em] text-white/40">Account</p><div className="mt-5 flex flex-col items-start gap-3">{session ? <><Link href="/create" className="hover:text-[#9eafff]">Create</Link><button onClick={logout} className="flex items-center gap-2 hover:text-[#9eafff]"><LogOut className="h-4 w-4"/>Logout</button></> : <><Link href="/login" className="hover:text-[#9eafff]">Login</Link><Link href="/signup" className="hover:text-[#9eafff]">Sign up</Link></>}</div></div>
      </div>
      <div className="flex flex-col gap-3 pt-7 text-sm text-white/45 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</span><span>Classified opportunities · Trusted profiles · Better connections</span></div>
    </div>
  </footer>
}
