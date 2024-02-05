// import About from "./components/About";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Services from "./components/Services";
// import Tours from "./components/Tours";
// import "./app.css";
// import NotFound from './components/NotFound';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navigation from "./components/Navigation";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navigation />
//         <Routes>
//           <Route path="/" element={<Footer />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/tours" element={<Tours />} />
//           <Route path="/contact" element={<About />} />
//           <Route path="*" element={<NotFound />} /> {/* Added this line for 404 */}
//         </Routes>
//   </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Services  from './components/Services';
import Tours from './components/Tours';
import Hero from './components/Hero';
import About from './components/About';

function App() {
return (
<BrowserRouter>
<Navigation />
<Routes>
<Route path="/" element={<Hero />} />
<Route path="/services" element={<Services />} />
<Route path="/tours" element={<Tours />} />
<Route path="/about" element={<About />} />
</Routes>
</BrowserRouter>
);
}

export default App;