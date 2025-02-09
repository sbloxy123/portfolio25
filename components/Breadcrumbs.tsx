'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Breadcrumbs = ({position} : {position: "inHeader" | "inPage"}) => {

    const pathname = usePathname();
    const breadcrumb = pathname.split('/');


    return (
        //   ${breadcrumb.length > 2 ? "translate-y-[70px] xsmall:translate-y-[70%]" : "translate-y-[70%] " }
        <div className={`
            breadcrumbs relative m-auto h-fit whitespace-nowrap font-font_anonymous text-[0.5em] font-normal uppercase leading-none tracking-[0.2em] text-theme_green

            ${position == "inPage" && breadcrumb.length > 2 ? "visible small:hidden" : 
            position == "inPage" && breadcrumb.length < 2 ? "" :
            "hidden small:block"} 

            `}>
        {pathname === '/' ? (
            ''
        ) : (
            <span>
            {breadcrumb.length > 2 ? (
                <>
                <Link
                href="/projects"
                className={`text-[clamp(1.4rem,2vw,1.6rem)] underline decoration-transparent decoration-1 underline-offset-4 opacity-80 transition-colors duration-300 hover:decoration-theme_green
                `}
                aria-label="back to projects page"
                >
                / {breadcrumb[1]}
                </Link>
                <span className="text-[clamp(1.4rem,2vw,1.4rem)] opacity-50">
                <span className="mx-1"> / </span> <span>{breadcrumb[2]}</span>
                </span>
                </>
            ) : (
                <p
                className={`text-[clamp(1.4rem,2vw,1.6rem)] opacity-80`}
                aria-label="back to projects page"
                >
                / {breadcrumb[1]}
                </p>
            )}
            </span>
        )}
    </div>
  )
}

export default Breadcrumbs