// import styles from "./page.module.css";
import ItemList from "./ui/items/itemList";
import ItemCardEdit from "./ui/items/itemCardEdit";

// Test
// if (process.env.CUSTOM_ENV === 'dev') {
//   console.log('dev mode');
// } else {
//   console.log('prod mode');
// }

export default function Home() {
  return (
      <ItemList/>
      // <ItemCardEdit/>
  );
}
