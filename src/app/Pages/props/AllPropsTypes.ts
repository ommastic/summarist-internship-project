import type { Book } from "../../types/Book";
import type { User } from "firebase/auth";

export type MainProps = {
  isLoginOpen: boolean;
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
  redirectPath: string;
}

export type SearchProps = {
  searchResults: Book[];
  setSearchResults: React.Dispatch<React.SetStateAction<Book[]>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export type ForYouProps = MainProps & SearchProps & {
  search: string;
}

export type InsideWrapperProps = MainProps & {
  book: Book;
}

export type LibraryProps = SearchProps & {
  search: string;
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type SharedProps = MainProps & LibraryProps


export type InsideBookProps = SharedProps & {
  setRedirectPath: React.Dispatch<React.SetStateAction<string>>;
};


export type InsideBookPageProps = InsideBookProps & {
  book: Book;
}

export type SettingsProp = LibraryProps & {
  user: User | null;
}

export type CloseButtonProps = {
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type LoadingProps = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}