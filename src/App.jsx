import { Bonus } from "./components/Bonus/Bonus";
import { Hero } from "./components/Hero/Hero";
import { Learn } from "./components/Learn/Learn";
import { People } from "./components/People/People";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Faq } from "./components/Faq/Faq"

export function App() {
  return (
    <div>
      <Hero />
      <Learn />
      <People />
      <Testimonials />
      <Bonus />
      <Faq />
    </div>
  );
}
