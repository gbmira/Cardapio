import Image from "next/image"
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className="w-full flex items-center h-20 bg-cor-01">
    <div className="w-full max-w-[1246px] px-[15px] mx-auto">
      <div className="flex items-center">
        <Image 
          src={logo}
          alt="MyMenu"
        />
      </div>
    </div>
  </header>
  )
}

export default Header