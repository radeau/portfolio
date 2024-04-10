import Link from 'next/link';

const navItems = {
    '/': {
        name: 'Home',
    },
    '/projects': {
        name: 'Projects',
    }, 
    '/resume': {
        name: 'Resume',
    }
};

export function Navbar() {
    return (
        <aside className="mb-12 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <nav className="flex flex-row justify-center relative  fade md:overflow-auto scroll-pr-6 md:relative rounded-xl py-4 shadow-xl">
                    <div className="flex flex-row h-6">
                        {Object.entries(navItems).map(([path, { name }]) => {
                            return (
                                <Link 
                                    key={path}
                                    href={path}
                                    className="transition-all hover:text-xl hover:font-bold dark:hover:text-xl flex align-middle relative py-1 px-4"
                                >
                                {name}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </aside>
    );
}