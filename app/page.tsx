import Contact from '@/components/contact'
import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <RecentPosts/>
        <RecentProjects/>
        <Contact/>
      </div>
    </section>
  )
}
