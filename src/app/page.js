import About from "@/Components/About/About";
import Banner from "@/Components/Banner/Banner";
import Contact from "@/Components/ContactUs/Contact";


export const metadata = {
  title: "Home | My Portfolio Website",
  description: "Digital marketing and Social media manager ",
};
const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <About ></About>
      <Contact></Contact>
      
     
    </div>
      );
};

      export default HomePage;