import React,{useState} from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import AnnouncementsHero from "../components/FooterComponents/AnnouncementsHero";
import AnnouncementsList from "../components/FooterComponents/AnnouncementsList";
import AnnouncementControls from "../components/FooterComponents/AnnouncementControls";
const Announcements = () => {
    const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [sort, setSort] = useState("Latest");
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <AnnouncementsHero />
        <AnnouncementControls 
        search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />
        <AnnouncementsList 
        search={search}
          category={category}
          sort={sort}
        />
        
      </main>
      <Footer />
    </>
  );
};

export default Announcements;