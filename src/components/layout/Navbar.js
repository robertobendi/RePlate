import { Link } from "react-router-dom";
import { useState } from "react";
import websiteInfo from './websiteInfo.json';
import logo from './img/logo.png';

function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
 const { theme } = websiteInfo;

 return (
   <nav style={{ 
     backgroundColor: theme.colors.background,
     fontFamily: theme.font.primary,
     borderBottom: `1px solid ${theme.colors.border.primary}`,
     transition: theme.style.transitions.default
   }}>
     <div className="max-w-5xl mx-auto px-4 h-14">
       <div className="flex justify-between items-center h-full">
         <Link 
           to="/" 
           className="flex items-center space-x-2 hover:opacity-75"
           style={{ transition: theme.style.transitions.fast }}
         >
           <img src={logo} alt="Logo" className="h-6 w-auto" />
         </Link>

         <div className="hidden md:flex items-center space-x-6">
           {websiteInfo.navigation.menu.map((item) => (
             <Link
               key={item.path}
               to={item.path}
               style={{ 
                 color: theme.colors.text.secondary,
                 fontSize: theme.font.sizes.sm,
                 transition: theme.style.transitions.fast
               }}
               className="hover:opacity-75"
             >
               {item.label}
             </Link>
           ))}
         </div>

         <button
           onClick={() => setIsOpen(!isOpen)}
           style={{ 
             color: theme.colors.text.secondary,
             transition: theme.style.transitions.fast
           }}
           className="md:hidden hover:opacity-75"
         >
           <span className="sr-only">Menu</span>
           {isOpen ? (
             <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
             </svg>
           ) : (
             <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
             </svg>
           )}
         </button>
       </div>

       {isOpen && (
         <div 
           className="md:hidden absolute left-0 right-0 p-4"
           style={{ 
             backgroundColor: theme.colors.surface,
             borderBottom: `1px solid ${theme.colors.border.primary}`,
             boxShadow: theme.style.shadows.lg,
             transition: theme.style.transitions.default
           }}
         >
           <div className="flex flex-col space-y-3">
             {websiteInfo.navigation.menu.map((item) => (
               <Link
                 key={item.path}
                 to={item.path}
                 style={{ 
                   color: theme.colors.text.secondary,
                   fontSize: theme.font.sizes.sm,
                   transition: theme.style.transitions.fast
                 }}
                 className="hover:opacity-75"
                 onClick={() => setIsOpen(false)}
               >
                 {item.label}
               </Link>
             ))}
           </div>
         </div>
       )}
     </div>
   </nav>
 );
}

export default Navbar;