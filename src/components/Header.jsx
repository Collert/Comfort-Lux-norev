import React from "react";

export default function Header (props) {
    return (
        <header>
            <div class="logo">
                <span></span>
            </div>
            <div class="divider">
                <svg id="divider-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 258.25" width='50px' height='50px'>
                <rect class="cls-1" x="0" y="0" width="800" height="68.25" rx="34.12" ry="34.12"/>
                <rect class="cls-1" x="50" y="189.25" width="700" height="69" rx="34.5" ry="34.5"/>
                </svg>
            </div>
            <div class="menu">
                <div><a href="#hero" class="menu-item active">HOME</a></div>
                <div><a href="#gallery" class="menu-item">GALLERY</a></div>
                <div><a class="menu-item">LOL</a></div>
            </div>
        </header>
    )
}