import { useLocation , useNavigate} from "react-router"

export default function Header() {

  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route){
    if(route === location.pathname){
        return true;
    }
  }

  
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <h2 className='cursor-pointer' onClick={()=>navigate("/")}>Stay</h2>
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={` cursor-pointer py-3 text-sm font-semibold border-b-[3px]   ${pathMatchRoute("/") && "border-b-red-500"}`}  onClick={()=>navigate("/")}>Home</li>
                    <li className={` cursor-pointer py-3 text-sm font-semibold border-b-[3px]   ${pathMatchRoute("/offers") && "border-b-red-500"} `} onClick={()=>navigate("/offers")}>Offers</li>
                    <li className={` cursor-pointer py-3 text-sm font-semibold border-b-[3px]   ${pathMatchRoute("/sign-in") && "border-b-red-500"}`} onClick={()=>navigate("/sign-in")}>Sign in</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
