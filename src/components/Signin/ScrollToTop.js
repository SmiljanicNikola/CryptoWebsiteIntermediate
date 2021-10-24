import { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";

export default function ScrollToTop(){
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname]
    );

    return null;
}