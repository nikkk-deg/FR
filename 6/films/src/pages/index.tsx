import { Films } from "../components/home-page-content";
import { FilterSidebar } from "../components/filter";
import { Header } from "../components/header";



export default function HomePage() {
  return (
    <>
      <Header film=""></Header>
      <FilterSidebar></FilterSidebar>
      <Films></Films>
    </>
  );
}
