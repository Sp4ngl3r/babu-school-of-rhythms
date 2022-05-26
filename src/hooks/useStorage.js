import { useState, useEffect } from "react";
import { firebaseStorage, firebaseFirestore } from "../firebase/config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageReference = ref(
      firebaseStorage,
      "gallery-images/" + file.name
    );
    const uploadTask = uploadBytesResumable(storageReference, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progressPercentage = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const createdAt = serverTimestamp();
          addDoc(collection(firebaseFirestore, "gallery-images"), {
            downloadURL,
            createdAt,
          });
          setUrl(downloadURL);
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
