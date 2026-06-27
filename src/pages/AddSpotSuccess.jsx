import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/Ui/Footer/Footer";
import SuccessBanner from "../Components/AddSpot/SuccessBanner";
import SpotPreviewCard from "../Components/AddSpot/SpotPreviewCard";

export default function AddSpotSuccess() {

  
const navigate = useNavigate();
const location = useLocation();

const spot = location.state?.spot;



  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">

      <div>

        <Navbar />

        <main className="max-w-4xl mx-auto py-24 px-6">

          <SuccessBanner
            spotName={spot?.name || "Your Spot"}
            onExplore={() => navigate("/discover")}
            onAddAnother={() => navigate("/add-spot")}
          />

          {spot && (
            <SpotPreviewCard spot={spot} />
          )}

        </main>

      </div>

      <Footer />

    </div>
  );
}