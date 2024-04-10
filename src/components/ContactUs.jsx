import { useContext } from "react";
import { AuthContext } from "../AuthContexProvider/AuthContextProvider";


const ContactUs = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div className="hero min-h-screen bg-gold" style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/modern-commercial-building-located-industrial-park_987032-68950.jpg?w=900)'}}>
  <div className="hero-overlay bg-opacity-60 "></div>
  <div className="hero-content text-center 
  text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
      <p className="mb-5">PropNets is a leading real estate company specializing in property management, sales, and investment services.</p>
      <h3 className="font-semibold">Email address:PropNetsSupport@gmail.com</h3>
      <h2 className="text-xl fnt-medium">Location: Mirabazar, 124, Sylhet</h2>

     
    </div>
  </div>
</div>
        </div>
    );
};

export default ContactUs;
