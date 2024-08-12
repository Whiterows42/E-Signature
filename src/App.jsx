import { useEffect, useRef, useState } from 'react'

import './App.css'
import ReactSignatureCanvas from 'react-signature-canvas'

function App() {
const [imageUrl, setImageUrl] = useState("")
  const canvaRef = useRef()
  const [previewImage, setPreviewImage] = useState(false)
  console.log(canvaRef.current);
  const [penColor, setPenColor] = useState("black")
  const [penStroke, setPenStroke] = useState(2.4)
  const [singPadBgColor, setSetsingPadBgColor] = useState("#E0E0E0");
  const clearSingnature = () => { 
    canvaRef.current.clear()
   }
   const downloadSingnature = () => { 
    const imgulr = canvaRef.current.getTrimmedCanvas().toDataURL("image/png");
    
    if (!canvaRef.current.isEmpty()) {
      setImageUrl(imgulr);
      setPreviewImage(true);
    }

    }
    const handlePenStrokeChange = (e) => { 
      setPenStroke(e.target.value)
      canvaRef.current._sigPad.maxWidth = penStroke;
     }
    const handleSingnaturePadhBgChange = (e) => { 
      

     
      setSetsingPadBgColor(e.target.value)
      canvaRef.current._sigPad.backgroundColor = singPadBgColor;
       canvaRef.current.clear();
     }
     useEffect(() => {
      console.log(canvaRef.current.style);
      
     }, [])
     
  return (
    <>
      <div className=" h-full w-full flex items-center">
        <div className="main flex justify-center px-[2vw]  py-[5vw] gap-3">
          <div className="first  w-[40%] bg-purple-700 p-4 rounded-md">
            <h1 className="text-5xl tracking-widest font-bold font-serif text-white ">
              Singnature Creator
            </h1>
            <div className="paragraph mt-4 text-white">
              <p>
                Create your unique digital signature with our advanced tools and
                customization options.
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
            <div className="singnaturepad relative w-[100%]  cursor-crosshair border-2 border-purple-600 rounded-lg">
              <ReactSignatureCanvas
                ref={canvaRef}
                penColor={penColor}
                canvasProps={{
                  // width: 500,
                  // height: 300,

                  className: "sigCanvas",
                }}
              />
              {previewImage ? (
                <div className="fixed top-[15vw]   bg-white flex-col w-1/2 object-cover flex   rounded-md p-4 ">
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
                      width={50}
                      onClick={() => setPreviewImage(false)}
                      className=" cursor-pointer"
                      src="https://cdn-icons-png.flaticon.com/512/5690/5690471.png"
                      alt=""
                    />
                    <a
                      className="flex previewdImg  w-1/2 justify-end"
                      href={imageUrl}
                      download={"image"}
                    >
                      <img
                        width={50}
                        className=" cursor-pointer"
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
                  className="bg-purple-700 text-[1vw] h-full p-3 rounded-md text-white font-bold"
                >
                  Clear Singnature
                </button>
                <button
                  onClick={downloadSingnature}
                  className="bg-purple-700 text-[1vw] h-fit p-3 rounded-md text-white font-bold"
                >
                  Preview Singnature
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
                  className=''
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
    </>
  );
}

export default App
