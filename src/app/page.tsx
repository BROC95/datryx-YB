'use client';

import Nav from '@/_sections/Nav';
import Hero from '@/_sections/Hero';
import Services from '@/_sections/Services';
import WhyWe from '@/_sections/WhyWe';
import Footer from '@/_sections/Footer';
import Cta from '@/_sections/Cta';
import Products from '@/_sections/Products';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}

<Nav></Nav>
      {/* 1. Hero Section */}
<Hero></Hero>
      {/* 2. Services Section */}
<Services></Services>

      {/* 3. Why Choose Us Section */}
  
<WhyWe></WhyWe>
      {/* 4. Featured Products Section */}
     <Products></Products>
      {/* 5. Final CTA */}
<Cta></Cta>


      {/* Footer */}
<Footer></Footer>
    </main>
  );
}
