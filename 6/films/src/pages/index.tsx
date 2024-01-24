import { FilterSidebar } from "../components/filter";
import { Header } from "../components/header";
import Films from './../components/home-page-content/index';

export default function HomePage() {
  return (
    <>
      <Header film=""></Header>
      <FilterSidebar></FilterSidebar>
      <Films></Films>
    </>
  );
}
