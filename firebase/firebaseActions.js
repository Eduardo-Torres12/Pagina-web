// firebase/firebaseActions.js
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

const agregarProducto = async (producto) => {
  try {
    const docRef = await addDoc(collection(db, 'productos'), producto);
    console.log('Producto añadido con ID: ', docRef.id);
  } catch (e) {
    console.error('Error añadiendo producto: ', e);
  }
};

const obtenerProductos = async () => {
  const querySnapshot = await getDocs(collection(db, 'productos'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};

export { agregarProducto, obtenerProductos };
