"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./Page.module.css";
export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arr = [
    "chatgpt",
    "facebook",
    "instagram",
    "search",
    "google-maps",
    "netflix",
    "chrome",
    "meet",
    "letter-n",
  ];

  const [location, setLocation] = useState(-1);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    let accumulatedWidth = 5;
    for (let i = 0; i < arr.length; i++) {
      if (rowRefs.current[i]) {
        const elementWidth =
          rowRefs.current[i]!.getBoundingClientRect().width + 10 || 0;
        accumulatedWidth += elementWidth;
      }
      if (accumulatedWidth > x) {
        setLocation(i);
        break;
      }
    }
  };
  const SIZE = [40, 30, 20];
  const handleCountSize = (index: number, location: number, size: string) => {
    if (location === -1)
      return { size: Number(size.replace("px", "")), marginTop: 0 };
    const diff = Math.abs(index - location);
    const sizeNum = Number(size.replace("px", ""));
    switch (diff) {
      case 0:
        return { size: sizeNum + SIZE[0], marginTop: -SIZE[0] };
      case 1:
        return { size: sizeNum + SIZE[1], marginTop: -SIZE[1] };
      case 2:
        return { size: sizeNum + SIZE[2], marginTop: -SIZE[2] };
      default:
        return { size: sizeNum, marginTop: 0 };
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.app_title}>Social Media selector dock</div>
      <div
        ref={ref}
        className={styles.dock_container}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={() => setLocation(-1)}
      >
        {arr.map((item, index) => {
          const { size, marginTop } = handleCountSize(index, location, "64px");
          return (
            <div
              key={item}
              ref={(ref) => {
                rowRefs.current[index] = ref;
              }}
              className={styles.dock_item}
              style={{
                width: size + "px",
                height: size + "px",
                marginTop: marginTop + "px",
              }}
            >
              <img
                className={styles.img}
                src={`/img/${item}.png`}
                alt={item}
                width="100%"
                height="100%"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
