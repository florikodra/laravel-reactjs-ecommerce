import { PropsWithChildren } from 'react';
import NavBar from '@/Layouts/NavbarLayout';

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar />
            <main className='pt-[68px]'>{children}</main>
        </div>
    );
}
