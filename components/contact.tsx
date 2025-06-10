'use client'

import { JSX, SVGProps, useState } from 'react'
import { GitHub, Clipboard, Linkedin, X, Gmail } from './icons8'

const navigation = [
  {
    name: 'GitHub',
    href: 'https://github.com/swaroopaanisetti',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <GitHub {...props} />
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/swaroopaanisetti',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <Linkedin {...props} />
    )
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/swaroopaanisetti',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <X {...props} />
    )
  }
]

const gmail = {
  name: 'Gmail',
  href: 'mailto:swaroopareddy.iiit877@gmail.com',
  icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <Gmail {...props} />
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'swaroopareddy.iiit877@gmail.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className='flex justify-center' id='contact'>
      <div className='flex w-full max-w-xl flex-col items-center gap-6 rounded-2xl border border-border bg-card p-8 shadow-xl'>
        <h2 className='mb-2 text-center font-serif text-3xl font-bold text-foreground'>
          Contact
        </h2>
        <p className='mb-2 text-center text-muted-foreground'>
          Interested in working together or just want to say hello? Feel free to
          reach out!
        </p>
        <div className='flex items-center gap-3 rounded-lg bg-muted px-4 py-2 shadow-sm'>
          <span className='sr-only'>Gmail</span>
          <a
            href={gmail.href}
            target='_blank'
            rel='noopener noreferrer'
            title='Gmail'
          >
            <gmail.icon className='h-7 w-7 text-foreground' />
          </a>
          <span className='select-all font-mono text-base text-foreground'>
            {email}
          </span>
          <button
            onClick={handleCopy}
            className='rounded p-2 hover:bg-accent'
            title='Copy email'
            aria-label='Copy email'
          >
            <Clipboard />
          </button>
          {copied && (
            <span className='ml-2 text-xs text-green-600'>Copied!</span>
          )}
        </div>
        <div className='mt-2 flex gap-8'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target='_blank'
              rel='noreferrer noopener'
              className='text-muted-foreground transition-colors hover:text-primary'
              title={item.name}
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon
                aria-hidden='true'
                className='h-7 w-7 text-foreground'
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
