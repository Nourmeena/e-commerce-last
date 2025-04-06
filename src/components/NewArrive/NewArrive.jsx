import React from "react";
import "./NewArrive.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import TextRep from "./TextRep";
import playstation from "../../assets/playstation.png";
import woman from "../../assets/woman.png";


const NewArrive = () => {
  return (
    <>
      <div className="container new-arrive p-5">
        <SectionTitle name="Featured" />
        <h2 className="p-3">New Arrival</h2>
        <div className="container shop-now row g-4">
          <div className="left-side col-lg-6 col-sm-12 position-relative">
            <TextRep
              imageName={playstation}
              title="Women's Collection"
              description="Featured woman collection that give ypu another vibe"
            />
          </div>
          <div className="right-side d-flex flex-column col-md-6 col-sm-12">
            <div className="above-side mb-3 position-relative ">
              <TextRep
                imageName={woman}
                title="Women's Collection"
                description="Featured woman collection that give ypu another vibe"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrive;
