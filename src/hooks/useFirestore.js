import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import { useState, useEffect } from "react";
import { firebaseFirestore } from "../firebase/config";

const useFirestore = (images_collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const query_for_images = query(
      collection(firebaseFirestore, "gallery-images"),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(query_for_images, (querySnapshot) => {
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsubscribe();
  }, [images_collection]);

  return { docs };
};

export default useFirestore;
