
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full">
        <Suspense fallback={<div className="container mx-auto p-6"><LoadingPlaceholder /></div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

const LoadingPlaceholder = () => (
  <div className="space-y-8 w-full">
    <Skeleton className="h-[400px] w-full rounded-xl" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Skeleton className="h-[250px] w-full rounded-lg" />
      <Skeleton className="h-[250px] w-full rounded-lg" />
      <Skeleton className="h-[250px] w-full rounded-lg" />
    </div>
  </div>
);

export default Layout;
