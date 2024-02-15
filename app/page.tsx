import { Footer, Hero, NavBar } from "@components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <Hero />
      <Footer />
    </main>
  );
}
