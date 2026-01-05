import BirthdayCard from "./components/BirthdayCard";
import PhotoGallery from "./components/PhotoGallery";
import PartyEffect from "./components/PartyEffect";

export default function App() {
  return (
    <div className="page">
      <PartyEffect />
      <BirthdayCard />
      <PhotoGallery />
    </div>
  );
}
