import Link from 'next/link'
import { ArrowRight, BriefcaseBusiness, CheckCircle2, MapPin, Search, ShieldCheck, Sparkles } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type Props = { primaryTask: TaskKey; primaryRoute: string; posts: SitePost[]; timeSections: HomeTimeSection[] }
const wrap = 'mx-auto w-full max-w-[var(--editable-container)] px-5 lg:px-8'

function unique(items: SitePost[]) {
  return Array.from(new Map(items.filter(Boolean).map((post) => [post.slug || post.id || post.title, post])).values())
}
function poolOf(posts: SitePost[], sections: HomeTimeSection[]) { return unique([...posts, ...sections.flatMap((section) => section.posts)]) }
function locationOf(post: SitePost) { const c = post.content && typeof post.content === 'object' ? post.content as Record<string,unknown> : {}; return typeof c.location === 'string' ? c.location : typeof c.city === 'string' ? c.city : '' }

function HeroNetwork({ posts }: { posts: SitePost[] }) {
  const samples = posts.slice(0, 4)
  return <div className="relative mx-auto aspect-square w-full max-w-[540px]">
    <div className="editable-pulse-ring absolute inset-[12%] rounded-full border border-[#5272ff]" />
    <div className="absolute inset-[22%] rounded-full border border-dashed border-[#5272ff]" />
    <div className="absolute inset-[34%] rounded-full bg-[#3457ff]/15 p-5"><div className="flex h-full items-center justify-center rounded-full bg-[#3457ff] text-5xl font-extrabold text-white shadow-[0_0_0_18px_rgba(52,87,255,.12)]">G</div></div>
    <span className="absolute left-[8%] top-1/2 h-px w-[84%] bg-[#5272ff]"/><span className="absolute left-1/2 top-[8%] h-[84%] w-px bg-[#5272ff]/50"/>
    {samples.map((post,index)=><Link key={post.slug || index} href={postHref('classified',post,'/classified')} className={`editable-float absolute flex max-w-[210px] items-center gap-3 rounded-2xl bg-white/95 p-3 shadow-[0_16px_45px_rgba(31,45,70,.16)] ${index===0?'left-0 top-[18%]':index===1?'right-0 top-[25%]':index===2?'bottom-[13%] left-[3%]':'bottom-[5%] right-[2%]'}`} style={{animationDelay:`-${index}s`}}>
      <img src={getEditablePostImage(post)} alt="" className="h-11 w-11 rounded-xl object-cover"/><span className="min-w-0"><strong className="line-clamp-1 text-xs">{post.title}</strong><small className="mt-1 block text-[10px] text-[var(--slot4-muted-text)]">{getEditableCategory(post)}</small></span>
    </Link>)}
  </div>
}

export function EditableHomeHero({ primaryRoute, posts, timeSections }: Props) {
  const pool = poolOf(posts,timeSections)
  return <section className="px-4 pt-4 sm:px-6">
    <div className="mx-auto grid max-w-[1704px] overflow-hidden rounded-[12px] bg-[radial-gradient(circle_at_76%_25%,#cfe5f0_0,transparent_35%),linear-gradient(120deg,#edf0f2,#e9eef2)] px-6 py-16 sm:px-12 lg:min-h-[660px] lg:grid-cols-[1fr_1fr] lg:items-center lg:px-20">
      <div className="relative z-10 max-w-[700px]"><p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-[#3457ff]"><Sparkles className="h-4 w-4"/> Opportunity meets credibility</p><h1 className="text-[clamp(3rem,5.4vw,5.8rem)] font-medium leading-[.98] tracking-[-.065em]">Find what you need.<br/>Show what you do.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-[var(--slot4-muted-text)]">Explore classified offers, services, rentals, roles, and trusted profiles in one clear, connected place.</p>
        <form action="/search" className="mt-8 flex max-w-2xl flex-col gap-2 rounded-2xl bg-white p-2 shadow-[0_18px_55px_rgba(24,35,52,.12)] sm:flex-row"><label className="flex min-w-0 flex-1 items-center gap-3 px-4"><Search className="h-5 w-5 text-[#3457ff]"/><input name="q" placeholder="Search services, products, people..." className="w-full bg-transparent py-3 outline-none"/></label><button className="rounded-xl bg-[#3457ff] px-7 py-4 text-sm font-bold text-white">Search now <ArrowRight className="ml-2 inline h-4 w-4"/></button></form>
        <div className="mt-6 flex flex-wrap gap-3"><Link href={primaryRoute} className="rounded-full bg-[#17191d] px-6 py-3 text-sm font-bold text-white">Browse all classified</Link><Link href="/create" className="rounded-full border border-[#17191d] px-6 py-3 text-sm font-bold">Post an offer</Link></div>
      </div><HeroNetwork posts={pool}/>
    </div>
  </section>
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts, timeSections }: Props) {
  const pool=poolOf(posts,timeSections).slice(0,10); if(!pool.length)return null
  const doubled=[...pool,...pool]
  return <section className="overflow-hidden py-20"><div className={`${wrap} mb-9 flex items-end justify-between gap-6`}><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#3457ff]">Fresh opportunities</p><h2 className="mt-3 text-4xl font-medium tracking-[-.05em] sm:text-5xl">Discover what’s moving</h2></div><Link href={primaryRoute} className="hidden items-center gap-2 font-bold sm:flex">View all <ArrowRight className="h-4 w-4"/></Link></div>
    <div className="editable-marquee flex gap-5 px-5">{doubled.map((post,index)=><Link key={`${post.slug}-${index}`} href={postHref(primaryTask,post,primaryRoute)} className="group w-[310px] shrink-0 overflow-hidden rounded-2xl border border-[var(--editable-border)] bg-white p-3 transition hover:-translate-y-2 hover:shadow-xl"><div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--slot4-media-bg)]"><img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider">{getEditableCategory(post)}</span></div><div className="p-3"><h3 className="line-clamp-2 text-xl font-bold leading-snug">{post.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post,105)||'Open this listing to view complete details and connect.'}</p></div></Link>)}</div>
  </section>
}

function Feature({post,href}:{post:SitePost;href:string}){return <Link href={href} className="group relative min-h-[530px] overflow-hidden rounded-[24px] bg-[#17191d] text-white"><img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-7 sm:p-10"><span className="rounded-full bg-[#3457ff] px-4 py-2 text-xs font-bold uppercase tracking-wider">Featured</span><h3 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-[-.04em] sm:text-5xl">{post.title}</h3><p className="mt-4 line-clamp-2 max-w-xl text-white/70">{getEditableExcerpt(post,160)}</p></div></Link>}
function Horizontal({post,href}:{post:SitePost;href:string}){return <Link href={href} className="group grid overflow-hidden rounded-2xl border border-[var(--editable-border)] bg-white sm:grid-cols-[170px_1fr]"><div className="aspect-[4/3] overflow-hidden sm:aspect-auto"><img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/></div><div className="p-5"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#3457ff]">{getEditableCategory(post)}</p><h3 className="mt-2 line-clamp-2 text-xl font-bold">{post.title}</h3>{locationOf(post)?<p className="mt-3 flex items-center gap-1 text-sm text-[var(--slot4-muted-text)]"><MapPin className="h-4 w-4"/>{locationOf(post)}</p>:null}</div></Link>}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts, timeSections }: Props) {
 const pool=poolOf(posts,timeSections);if(!pool.length)return null; return <section className="bg-white py-20"><div className={wrap}><div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]"><Feature post={pool[0]} href={postHref(primaryTask,pool[0],primaryRoute)}/><div className="grid content-start gap-5">{pool.slice(1,4).map(post=><Horizontal key={post.slug} post={post} href={postHref(primaryTask,post,primaryRoute)}/>)}</div></div></div></section>
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: Props) {
 const pool=poolOf(posts,timeSections).slice(4,12); if(!pool.length)return null; return <><section className="py-20"><div className={wrap}><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div className="lg:sticky lg:top-32 lg:self-start"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#3457ff]">A clearer classified marketplace</p><h2 className="mt-4 text-4xl font-medium leading-tight tracking-[-.05em] sm:text-5xl">Useful offers, organized for faster decisions.</h2><p className="mt-5 leading-7 text-[var(--slot4-muted-text)]">Compare prices, locations, categories, and practical details before opening the complete classified post.</p><div className="mt-8 grid gap-4">{[[BriefcaseBusiness,'Products, services, roles, and rentals'],[ShieldCheck,'Clear offer and contact details'],[CheckCircle2,'Simple categories for faster browsing']].map(([Icon,label])=>{const I=Icon as typeof BriefcaseBusiness;return <div key={label as string} className="flex items-center gap-3 font-bold"><span className="rounded-xl bg-[#e6ebff] p-3 text-[#3457ff]"><I className="h-5 w-5"/></span>{label as string}</div>})}</div></div><div className="divide-y divide-[var(--editable-border)] border-y border-[var(--editable-border)]">{pool.map((post,index)=><Link key={post.slug} href={postHref(primaryTask,post,primaryRoute)} className="group grid gap-4 py-6 sm:grid-cols-[70px_1fr_150px] sm:items-center"><span className="text-3xl font-light text-[#9aa2aa]">{String(index+1).padStart(2,'0')}</span><div><p className="text-[10px] font-bold uppercase tracking-widest text-[#3457ff]">{getEditableCategory(post)}</p><h3 className="mt-2 text-xl font-bold group-hover:text-[#3457ff]">{post.title}</h3></div><img src={getEditablePostImage(post)} alt="" className="h-24 w-full rounded-xl object-cover"/></Link>)}</div></div></div></section><section className="bg-[#dfe7ff] py-16"><div className={`${wrap} grid gap-8 text-center sm:grid-cols-3`}>{[['Buy & sell','Discover products and timely offers.'],['Hire & offer','Find roles, skills, and practical services.'],['Rent & connect','Explore spaces, equipment, and local opportunities.']].map(([title,text])=><div key={title} className="rounded-2xl bg-white/60 p-8"><h3 className="text-2xl font-bold">{title}</h3><p className="mt-3 text-[var(--slot4-muted-text)]">{text}</p></div>)}</div></section></>
}

export function EditableHomeCta(){return <section className="px-4 py-20 sm:px-6"><div className="mx-auto max-w-[1544px] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_50%_120%,#9de3cc,transparent_45%),linear-gradient(120deg,#e6ebef,#dfe8ef)] px-6 py-20 text-center"><BriefcaseBusiness className="mx-auto h-10 w-10 text-[#3457ff]"/><h2 className="mx-auto mt-5 max-w-4xl text-4xl font-medium leading-tight tracking-[-.05em] sm:text-6xl">Have something useful to offer?</h2><p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--slot4-muted-text)]">Create a clear classified post for a product, service, role, rental, or opportunity.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/create" className="rounded-full bg-[#3457ff] px-7 py-4 font-bold text-white">Create classified <ArrowRight className="ml-2 inline h-4 w-4"/></Link><Link href="/classified" className="rounded-full border border-[#17191d] px-7 py-4 font-bold">Browse classified</Link></div></div></section>}
