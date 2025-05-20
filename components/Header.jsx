import Link from "next/link";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-5 xl:py-10 text-white sticky top-0 bg-black border-b-2 border-b-gray-500">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold"
                    >WiiN<span className="text-green-600">.</span>
                    </h1>
                </Link>
                {/* Desktop Nav & hire me button*/}
                <div className="hidden xl:flex items-center gap-8">
                <Nav />
                {/* <Link 
                    href="/hire"
                    className="">
                    <Button>Hire Me</Button>
                </Link> */}
                </div>
                {/* Mobile Nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;