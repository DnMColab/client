import Navigation from "../Navigation/Navigation";
import Threads from "../Threads/Threads";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navigation />
      {children}
      <Threads />
    </main>
  );
}
