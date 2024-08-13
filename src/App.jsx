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
                    className="bg-purple-700 text-[1vw] h-fit flex justify-between p-2 rounded-md text-white font-bold"
                  >
                    Clear Singnature
                    <svg
                      className="object-contain w-[17%] h-full"
                      fill="#f2f2f2"
                      viewBox="-266.24 -266.24 1556.48 1556.48"
                      t="1569683368540"
                      class="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="9723"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      stroke="#f2f2f2"
                      transform="rotate(0)"
                      stroke-width="0.01024"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke="#CCCCCC"
                        stroke-width="2.048"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <defs>
                          <style type="text/css"></style>
                        </defs>
                        <path
                          d="M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-0.3 1.5-0.4 3-0.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-0.1 4.4-0.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390z m468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"
                          p-id="9724"
                        ></path>
                      </g>
                    </svg>
                  </button>
                  <button
                    onClick={downloadSingnature}
                    className="bg-purple-700 text-[1vw] h-fit flex justify-between  p-2 rounded-md text-white font-bold"
                  >
                    Preview Singnature
                    <svg
                      fill="#ffffff"
                      className="object-contain w-[17%] h-full"
                      version="1.1"
                      baseProfile="tiny"
                      id="Layer_1"
                      xmlns:x="&amp;ns_extend;"
                      xmlns:i="&amp;ns_ai;"
                      xmlns:graph="&amp;ns_graphs;"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                      width="191px"
                      height="191px"
                      viewBox="-4.2 -4.2 50.40 50.40"
                      xml:space="preserve"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                  <div className="inputs text-[1.6vw]">
                    <div className="mt-2 flex flex-col ">
                      <label htmlFor="">Pen Size:</label>
                      <input
                        min={1}
                        max={10}
                        maxLength={10}
                        value={penStroke}
                        onChange={handlePenStrokeChange}
                        className="rounded-sm"
                        type="number"
                      />
                    </div>
                    <div className="mt-1 flex flex-col ">
                      <label htmlFor="">Pen Color :</label>
                      <input
                        className="rounded-sm"
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
                      className=""
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
