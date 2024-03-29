"use client"
import Image from "next/image";
import styles from "./navmenu.module.css";
import Link from "next/link";
import {useTranslations} from 'next-intl';
import { useSession } from "next-auth/react";
// import { getServerSession } from "next-auth"
// import { useEffect, useState } from "react";

export default function NavMenu() {
    const t = useTranslations("Header");
    const { data: session, status } = useSession();
    // console.log(session);


    return (
        <nav className="row align-items-center justify-content-center w-100 ps-2">
            <Image
                src="/settify.svg"
                alt="Settify Logo"
                width="56"
                height="56"
                className={`${styles.logo} col-auto pe-0 pt-1 pb-1`}
                priority={true}
            />
            <ul className="col list-unstyled d-flex justify-content-around justify-content-md-start mb-0 w-100">
                <li className="nav-item me-1 me-md-3 fs-6 py-2">
                    <Link
                        href="/"
                        className={`${styles.magicHover} nav-link fs-5`}
                    >
                        {t("home")}
                    </Link>
                </li>
                {session ? <li className="nav-item me-1 me-md-3 fs-6 py-2">
                    
                    <Link
                        href="/collections"
                        className={`${styles.magicHover} nav-link fs-5`}
                    >
                        {t("collections")}
                    </Link>
                </li> : null}
                
                {session?.user?.admin ? <li className="nav-item me-1 me-md-3 fs-6 py-2">
                    <Link
                        href="/users"
                        className={`${styles.magicHover} nav-link fs-5`}
                    >
                        {t("users")}
                    </Link>
                </li> : null}
                
            </ul>
        </nav>
    );
}
