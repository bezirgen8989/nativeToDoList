import React from 'react';
import { svgTypeConstatns } from "./iconsTypeConstants";

import { SvgCss, SvgXml } from 'react-native-svg';
import { View, Text } from 'react-native';


const SvgIcons = ({ iconType, iconColor, width, height }) => {
    switch (iconType) {
        case svgTypeConstatns.HOME:
            return (
                <SvgXml xml={
                    `
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1280.000000pt" height="1206.000000pt" viewBox="0 0 1280.000000 1206.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1206.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M5828 11600 c-282 -250 -1418 -1256 -2523 -2235 -1106 -978 -2165 -1917 -2355 -2085 -190 -168 -460 -407 -600 -530 -140 -124 -276 -245 -302 -270 l-48 -45 330 -370 c181 -203 336 -369 343 -369 8 1 603 521 1323 1156 3778 3332 4388 3868 4395 3866 4 -2 470 -413 1036 -914 565 -501 1842 -1631 2836 -2512 994 -881 1812 -1602 1817 -1602 5 0 12 5 15 10 5 8 11 7 21 -1 19 -15 -10 -45 339 351 153 173 293 331 312 351 l34 36 -838 739 c-461 407 -1544 1363 -2408 2124 -863 762 -1919 1693 -2347 2070 l-776 685 -45 0 -45 0 -514 -455z"/>
                    <path d="M5707 9301 c-364 -322 -1370 -1213 -2235 -1979 l-1572 -1393 2 -2872 3 -2872 22 -41 c12 -23 41 -58 64 -77 83 -72 -24 -67 1561 -67 l1428 0 2 1273 c3 1266 3 1272 24 1317 26 58 76 108 134 134 45 21 52 21 1224 24 1304 3 1248 5 1322 -60 52 -46 81 -97 93 -163 8 -40 11 -454 11 -1292 l0 -1233 1484 2 1485 3 30 29 c17 16 45 63 63 105 l33 76 2 2860 2 2860 -2240 1975 c-1270 1120 -2249 1976 -2260 1976 -13 1 -247 -200 -682 -585z"/>
                    </g>
                    </svg>
                    `
                } width={"50%"} height={"50%"} />

            )
        case svgTypeConstatns.LOG_IN:
            return (
                <SvgXml xml={
                    `
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.6666 11.3333L14 8L10.6666 4.66667" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 8H6" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    `
                } width={"50%"} height={"50%"} />

            )
        case svgTypeConstatns.SETTINGS:
            return (
                <SvgXml xml={
                    `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 4H3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13 16H7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 20H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 8H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 12H16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    `
                } width={"50%"} height={"50%"} />

            )
        case svgTypeConstatns.TO_DOS:
            return (
                <SvgXml xml={
                    `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 21C4 21.5523 4.44772 22 5 22C5.55228 22 6 21.5523 6 21H4ZM19 21L18.4453 21.8321C18.7522 22.0366 19.1467 22.0557 19.4719 21.8817C19.797 21.7077 20 21.3688 20 21H19ZM16 19L16.5547 18.1679C16.1581 17.9035 15.63 17.9558 15.2929 18.2929L16 19ZM14 21L13.2929 21.7071C13.6834 22.0976 14.3166 22.0976 14.7071 21.7071L14 21ZM12 19L12.7071 18.2929C12.3166 17.9024 11.6834 17.9024 11.2929 18.2929L12 19ZM10 21L9.29289 21.7071C9.68342 22.0976 10.3166 22.0976 10.7071 21.7071L10 21ZM8 19L8.70711 18.2929C8.37004 17.9558 7.84192 17.9035 7.4453 18.1679L8 19ZM4.4453 20.1679C3.98577 20.4743 3.8616 21.0952 4.16795 21.5547C4.4743 22.0142 5.09517 22.1384 5.5547 21.8321L4.4453 20.1679ZM9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8V6ZM15 8C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6V8ZM9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12V10ZM15 12C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10V12ZM13 14C12.4477 14 12 14.4477 12 15C12 15.5523 12.4477 16 13 16V14ZM15 16C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14V16ZM6 21V5H4V21H6ZM6 5C6 4.44772 6.44772 4 7 4V2C5.34315 2 4 3.34315 4 5H6ZM7 4H17V2H7V4ZM17 4C17.5523 4 18 4.44772 18 5H20C20 3.34315 18.6569 2 17 2V4ZM18 5V21H20V5H18ZM19.5547 20.1679L16.5547 18.1679L15.4453 19.8321L18.4453 21.8321L19.5547 20.1679ZM15.2929 18.2929L13.2929 20.2929L14.7071 21.7071L16.7071 19.7071L15.2929 18.2929ZM14.7071 20.2929L12.7071 18.2929L11.2929 19.7071L13.2929 21.7071L14.7071 20.2929ZM11.2929 18.2929L9.29289 20.2929L10.7071 21.7071L12.7071 19.7071L11.2929 18.2929ZM10.7071 20.2929L8.70711 18.2929L7.29289 19.7071L9.29289 21.7071L10.7071 20.2929ZM7.4453 18.1679L4.4453 20.1679L5.5547 21.8321L8.5547 19.8321L7.4453 18.1679ZM9 8H15V6H9V8ZM9 12H15V10H9V12ZM13 16H15V14H13V16Z" fill="${iconColor || "black"}"/>
                    </svg>
                    `
                } width={"50%"} height={"50%"} />

            )
        case svgTypeConstatns.URGENT_TASK:
            return (
                <SvgXml xml={
                    `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="${iconColor || "black"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 7V12L15 15" stroke="${iconColor || "black"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    `
                } width={width || "100%"} height={height || "100%"} />

            )
        case svgTypeConstatns.MAIN_TASK:
            return (
                <SvgXml xml={
                    `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 3V7C14 7.55228 14.4477 8 15 8H19" stroke="${iconColor || "black"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21Z" stroke="${iconColor || "black"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 17V12" stroke="${iconColor || "black"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 17V16" stroke="${iconColor || "black"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 17V14" stroke="${iconColor || "black"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                    
                    `
                } width={width || "100%"} height={height || "100%"} />

            )
        case svgTypeConstatns.CHILL_ICON:
            return (
                <SvgXml xml={
                    `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="4" r="1" stroke="${iconColor || "black"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 9L7.5 10L10.5 12.5" stroke="${iconColor || "black"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 21V13L16 7.5" stroke="${iconColor || "black"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 4.5L12 6.5L16 7.5L20 11L18 14.5" stroke="${iconColor || "black"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>       
                    `
                } width={width || "100%"} height={height || "100%"} />

            )
        default: return <View>
            <Text>N/I</Text>
        </View>

    }


}

export default SvgIcons;




