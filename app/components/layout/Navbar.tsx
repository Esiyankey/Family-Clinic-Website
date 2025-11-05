import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react'
import React from 'react'

export const Navbar = () => {
    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];
  return (
    <nav >
        <div className='flex justify-between items-center max-w-7xl mx-auto py-6'>
            <div  className='flex items-center gap-12'>
                <div className='flex gap-2 items-center'>
                    
                    <Phone size={20}  className='fill-current text-[#4891da]' fill='currentColor'/>
                    <span>+1 (555) 123-4567</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <Mail size={20} className='text-[#4891da]'/>
                    <span>info@familyclinic.com</span>

                </div>
            </div>
            <div>
                <span>Admin</span>
            </div>
        </div>
        <div className='w-full h-0.5 bg-[#eeeeee]'></div>
        <div className='flex justify-between items-center max-w-7xl mx-auto  p-10'>
            <div><h2>Logo</h2></div>
            <div className='flex gap-10 '>
                {links.map((link) => (
                    <a key={link.name} href={link.href} className='text-lg font-semibold  border-b-2 border-transparent hover:border-blue-500 transition'>
                        {link.name}
                    </a>
                ))}
            </div>
            <div>
                <Button >Book Appointment</Button>
            </div>
        </div>
    </nav>
  )
}
