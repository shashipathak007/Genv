import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: 80 }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
