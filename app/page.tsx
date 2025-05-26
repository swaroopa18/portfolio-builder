import Intro from '@/components/intro'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function Home() {
  const content = `
  #This is **markdown** content`
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <MDXRemote source={content} />
      </div>
    </section>
  )
}
