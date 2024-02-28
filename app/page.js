// import Image from "next/image";
import styles from "./page.module.css";

// Test
if (process.env.NODE_ENV === 'dev') {
  console.log('dev mode');
} else {
  console.log('prod mode');
}

export default function Home() {
  return (
    <main className={styles.main}>
      This is main
    </main>
  );
}
