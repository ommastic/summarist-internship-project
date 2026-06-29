import { useParams } from "react-router-dom";
import { auth } from "../../../firebase";
import { useState, useEffect } from "react";
import type { Book } from "../../types/Book";
import axios from "axios";
import InsideBookPage from "./InsideBookPage";
import InsideBookOtherPage from "./InsideBookOtherPage";
import type { InsideBookProps } from "../props/AllProps";

export default function InsideBookPageWrapper(
  props: InsideBookProps) {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const user = auth.currentUser;


  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`);
      setBook(response.data);
    };

    fetchBook();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return user ? (
    <InsideBookPage {...props} book={book} />
  ) : (
    <InsideBookOtherPage {...props} book={book} />
  );

}