import styles from "./page.module.css";

// Test
if (process.env.NODE_ENV === 'dev') {
  console.log('dev mode');
} else {
  console.log('prod mode');
}

export default function Home() {
  return (
    <div>
      This is main
    </div>
  );
}
