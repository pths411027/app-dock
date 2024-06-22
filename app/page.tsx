"use client";
import { useState, useRef } from "react";
import { handleCountSize } from "./logic";
import styles from "./Page.module.css";
import { apps } from "./config";
export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [location, setLocation] = useState(-1);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    let accumulatedWidth = 5;
    for (let i = 0; i < apps.length; i++) {
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

  return (
    <main className={styles.container}>
      <div className={styles.app_title}>Application dock</div>
      <div
        ref={ref}
        className={styles.dock_container}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={() => setLocation(-1)}
      >
        {apps.map((app, index) => {
          const { size, marginTop } = handleCountSize(index, location);
          return (
            <div
              key={app}
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
                src={`/img/${app}.png`}
                alt={app}
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
