import { useEffect, useRef, useState } from "react";

import "./App.css";
import ReactSignatureCanvas from "react-signature-canvas";

import sing from "./assets/singnature.gif"
function App() {
  const [imageUrl, setImageUrl] = useState("");
  const canvaRef = useRef();
  const [isloading, setIsloading] = useState(true)
  const [previewImage, setPreviewImage] = useState(false);
  const [penColor, setPenColor] = useState("black");
  const [penStroke, setPenStroke] = useState(2.4);
  const [singPadBgColor, setSetsingPadBgColor] = useState("#E0E0E0");
  useEffect(() => {
    
  const timeout = setTimeout(() => {
    setIsloading(false)
  }, 2000);
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  
  const clearSingnature = () => {
    canvaRef.current.clear();
  };
  const downloadSingnature = () => {
    const imgulr = canvaRef.current.getTrimmedCanvas().toDataURL("image/png");

    if (!canvaRef.current.isEmpty()) {
      setImageUrl(imgulr);
      setPreviewImage(true);
    }
  };
  const handlePenStrokeChange = (e) => {
    setPenStroke(e.target.value);
    canvaRef.current._sigPad.maxWidth = penStroke;
  };
  const handleSingnaturePadhBgChange = (e) => {
  

    setSetsingPadBgColor(e.target.value);
    // canvaRef.current._sigPad.backgroundColor = singPadBgColor;
    clearSingnature();
  };
  // useEffect(() => {
  //   console.log(canvaRef.current.style);
  // }, []);
console.log(canvaRef.current);

  return (
    <>
      {isloading ? (
        <div className="flex justify-center w-full">
          <img src={sing} alt="" />
        </div>
      ) : (
        <div className=" h-full w-full flex items-center">
          <div className="main flex justify-center px-[2vw]  py-[5vw] gap-3">
            <div className="first  w-[40%] bg-purple-700 p-4 rounded-md">
              <h1 className="text-5xl tracking-widest font-bold font-serif text-white ">
                Singnature Creator
              </h1>
              <div className="paragraph mt-4 text-white">
                <p>
                  Create your unique digital signature with our advanced tools
                  and customization options.
                </p>
              </div>

              <div>
                <div className="singimage mt-2 rounded-lg w-full h-[20vw]"></div>
              </div>
              {/* <div className="colorPickers mt-4 flex justify-between">
              <input className="rounded-full" type="color" name="" id="" />
              <input type="color" name="" id="" />
              <input type="color" name="" id="" />
              <input type="color" name="" id="" />
            </div> */}
            </div>

            <div className="second flex flex-col">
              <div className="singnaturepad relative w-[100%]   cursor-crosshair border-2 border-purple-600 rounded-lg">
                <ReactSignatureCanvas
                  ref={canvaRef}
                  penColor={penColor}
                  backgroundColor={singPadBgColor}
                  canvasProps={{
                    // width: 500,
                    // height: 300,

                    className: "sigCanvas",
                  }}
                />
                {previewImage ? (
                  <div className="fixed top-[15vw] md:top-[5vw] shadow-xl  bg-white flex-col w-1/2 object-cover flex   rounded-md p-2 ">
                    <div className="flex justify-end">
                      <h3
                        className="cursor-pointer w-fit text-end text-red-700  text-2xl"
                        onClick={() => setPreviewImage(false)}
                        title="Close"
                      >
                        X
                      </h3>
                    </div>
                    <img className="h-[21vh]" src={imageUrl} alt="" />
                    <div className="flex bg-transparent mt-5  justify-between">
                      <img
                        // width={50}
                        onClick={() => setPreviewImage(false)}
                        className=" cursor-pointer w-[3vw] object-contain"
                        src="https://cdn-icons-png.flaticon.com/512/5690/5690471.png"
                        alt=""
                      />
                      <a
                        className="flex previewdImg img-fluid  w-1/2 justify-end"
                        href={imageUrl}
                        download={"Singnature"}
                      >
                        <img
                          // width={50}
                          className=" cursor-pointer w-[3vw] object-contain"
                          src="https://cdn-icons-png.flaticon.com/512/1091/1091669.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="tools h-full row flex px-2 justify-between mt-9">
                <div className="singnatureOption col-3   p-2  rounded-lg flex flex-col gap-4 bg-[#F0F0F0]">
                  <h1 className="text-purple-600  font-bold text-[2vw]">
                    Signature Options
                  </h1>
                  <button
                    onClick={clearSingnature}
                    className="bg-purple-700 text-[1vw] h-fit flex items-center justify-between p-2 rounded-md text-white font-bold"
                  >
                    Clear Singnature
                    <svg
                      className="object-cover w-[15%] h-fit"
                      fill="#ffffff"
                      height="200px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 612.002 612.002"
                      xmlSpace="preserve"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path d="M594.464,534.414H344.219L606.866,271.77c6.848-6.851,6.848-17.953,0-24.8L407.547,47.65 c-3.291-3.288-7.749-5.135-12.401-5.135c-4.65,0-9.11,1.847-12.398,5.135L5.138,425.262c-6.851,6.848-6.851,17.95,0,24.8 l114.29,114.287c3.288,3.291,7.749,5.138,12.398,5.138h462.638c9.684,0,17.536-7.852,17.536-17.536 C612,542.265,604.148,534.414,594.464,534.414z M395.145,84.851L569.664,259.37L363.27,465.763L188.753,291.245L395.145,84.851z M294.618,534.414H139.09L42.336,437.66l121.617-121.617l174.519,174.519L294.618,534.414z"></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </button>
                  <button
                    onClick={downloadSingnature}
                    className="bg-purple-700 text-[1vw] h-fit flex justify-between items-center  p-2 rounded-md text-white font-bold"
                  >
                    Preview Singnature
                    <svg
                      fill="#ffffff"
                      className="object-cover w-[17%] h-fit"
                      version="1.1"
                      baseProfile="tiny"
                      id="Layer_1"
                      xmlns:x="&amp;ns_extend;"
                      xmlns:i="&amp;ns_ai;"
                      xmlns:graph="&amp;ns_graphs;"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                      width="191px"
                      height="191px"
                      viewBox="-4.2 -4.2 50.40 50.40"
                      xmlSpace="preserve"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path d="M22.5,6.5c0-2.38-0.5-3-3-3h-16c-2.5,0-3,0.69-3,3v29c0,2.5,0.62,3,3,3h18.939L14,32.5H5.5v-24h12v20l5-4.561V6.5z M13.5,36.5h-3v-2h3V36.5z M27.84,31.54c0,0.681,0.561,1.239,1.24,1.239c0.689,0,1.25-0.561,1.25-1.239c0-0.69-0.561-1.25-1.25-1.25 C28.4,30.29,27.84,30.85,27.84,31.54z M30.45,38.561c4.05-0.891,10.28-6.199,10.28-6.199S36.1,25.17,29.9,24.4 c-0.351-0.041-1.57-0.051-1.801-0.03c-5.99,0.58-10.83,8.22-10.83,8.22s5.259,5.131,10.201,5.96 C28.05,38.67,29.85,38.67,30.45,38.561z M23.05,31.529c0-3.1,2.671-5.609,5.95-5.609s5.95,2.51,5.95,5.609 c0,3.111-2.671,5.621-5.95,5.621S23.05,34.641,23.05,31.529z"></path>{" "}
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="singnatureOption col-3  p-2 rounded-lg flex flex-col gap-4 bg-[#F0F0F0]">
                  <h1 className="text-purple-600 font-bold text-[2vw]">
                    Pen Setting
                  </h1>
                  <div className="inputs text-[1.6vw] w-full">
                    <div className="mt-2 flex flex-col ">
                      <label htmlFor="">Pen Size:</label>
                      <input
                        min={1}
                        max={10}
                        maxLength={10}
                        value={penStroke}
                        onChange={handlePenStrokeChange}
                        className="rounded-sm "
                        type="number"
                      />
                    </div>
                    <div className="mt-1 flex w-full flex-col ">
                      <label htmlFor="">Pen Color :</label>
                      <input
                        // style={{width:"5vw" }}
                        className="rounded-sm w-[5vw] h-[3vw]"
                        value={penColor}
                        onChange={(e) => setPenColor(e.target.value)}
                        type="color"
                      />
                    </div>
                  </div>
                </div>
                <div className="singnatureOption col-3 p-2 rounded-lg flex flex-col gap-4 bg-[#F0F0F0]">
                  <h1 className="text-purple-600 font-bold text-[2vw]">
                    Background Settings
                  </h1>
                  <div className="flex flex-col text-[1.5vw]">
                    <label htmlFor="">BackGround Color:</label>
                    <input
                      className="w-[5vw] h-[3vw]"
                      value={singPadBgColor}
                      onChange={handleSingnaturePadhBgChange}
                      type="color"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
