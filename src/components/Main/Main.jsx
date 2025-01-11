import React, { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { assets } from "../../assets/assets";
import {
  RiCodeLine,
  RiCompass3Line,
  RiCompassLine,
  RiFocus2Line,
  RiImageAddLine,
  RiMic2Fill,
  RiMicLine,
  RiQuillPenLine,
  RiSendPlane2Line,
} from "@remixicon/react";
import { Context } from "../../Context/Context";

function Main() {
  // let [inputValue,setInputValue] = useState('');

  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  
  return (
    <>
      <div className="flex flex-col w-full h-100vh text-white lg:overflow-y-hidden max-[640px]:w-100vw max-[640px]:h-mobile-main-height">
        <Navbar />
        <div className="h-full w-full bg-zinc-950 flex justify-center">
          <div className=" mt-2 flex items-center flex-col w-fit mx-3">
            {!showResults ? (
              <>
                <div className="mb-4 flex w-full items-start flex-col max-[640px]:items-center"
                    
                >
                  <h1 className="font-openSans font-semibold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-500 leading-relaxed">
                    Hello, Alias
                  </h1>
                  <h2 className="font-openSans font-semibold text-transparent text-5xl text-zinc-600 max-[640px]:text-3xl"
                    
                      >
                    How can I help you Today?
                  </h2>
                </div>

                <div className="flex gap-4 mt-16 sm:flex-wrap sm:overflow-scroll no-scrollbar sm:h-60 max-[950px]:w-4/5 max-[640px]:flex-wrap max-[640px]:px-16 max-[640px]:max-w-full max-[640px]:items-center max-[640px]:h-2/5 max-[640px]:overflow-scroll"
                      
                >
                  <div className="bg-zinc-900 p-5 rounded-xl flex flex-col flex-shrink-0 flex-grow-0  w-48 h-52 relative hover:bg-zinc-800 cursor-pointer"
                        onClick={() => {
                          setInput('Walk me through how to apply for a new role')
                          onSent('Walk me through how to apply for a new role')
                        }}
                        
                  >
                    <h4 className="font-poppins text-zinc-200 text-sm">
                      Walk me through how to apply for a new role
                    </h4>
                    <div className="w-full flex justify-end rounded-full relative top-16 ">
                      {/* <img src={assets.youtube_icon} alt="yt-icon" /> */}
                      <RiCodeLine
                        size={48}
                        className="bg-zinc-950 p-3 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="bg-zinc-900 p-5 rounded-xl flex flex-col flex-shrink-0 flex-grow-0  w-48 relative h-52 hover:bg-zinc-800 cursor-pointer"
                        onClick={() => {
                          setInput('Help me understand American football')
                          onSent('Help me understand American football')
                        }}
                  >
                    <h4 className="font-poppins text-zinc-200  text-sm">
                      Help me understand American football
                    </h4>
                    <div className="w-full flex justify-end rounded-full relative -bottom-20">
                      {/* <img src={assets.youtube_icon} alt="yt-icon" /> */}
                      <RiQuillPenLine
                        size={48}
                        className="bg-zinc-950 p-3 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="bg-zinc-900 p-5 rounded-xl flex flex-col flex-shrink-0 flex-grow-0  w-48 h-52 hover:bg-zinc-800 cursor-pointer"
                        onClick={() => {
                          setInput('Help me compare these college majors')
                          onSent('Help me compare these college majors')
                        }}
                  >
                    <h4 
                      
                    className="font-poppins text-zinc-200  text-sm">
                      Help me compare these college majors
                    </h4>
                    <div className="w-full flex justify-end rounded-full relative -bottom-20">
                      {/* <img src={assets.youtube_icon} alt="yt-icon" /> */}
                      <RiFocus2Line
                        size={48}
                        className="bg-zinc-950 p-3 rounded-full"
                      />
                    </div>
                  </div>

                  <div 
                  onClick={() => {
                    setInput('Give me ways to add certain foods in my diet')
                    onSent('Give me ways to add certain foods in my diet')
                  }}
                  className="bg-zinc-900 p-5 rounded-xl flex flex-col flex-shrink-0 flex-grow-0 h-52  w-48 relative hover:bg-zinc-800 cursor-pointer">
                    <h4 
                    className="font-poppins text-zinc-200  text-sm ">
                      Give me ways to add certain foods in my diet
                    </h4>
                    <div className="w-full flex justify-end rounded-full relative top-16">
                      {/* <img src={assets.youtube_icon} alt="yt-icon" /> */}
                      <RiCompass3Line
                        size={48}
                        className="bg-zinc-950 p-3 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-responsive-box-w  flex max-[640px]:h-4/6 max-[640px]:w-full  flex-col justify-start  overflow-y-scroll h-response-box-h no-scrollbar "
                      
                >
                  <div className="flex items-center gap-3 my-1 mb-0">
                    <img
                      src={assets.user_icon2}
                      alt="user-icon"
                      className="rounded-full w-12 cursor-pointer border-zinc-800 border-solid border-2"
                    />
                    <p className="text-normal font-semibold font-heebo text-zinc-300">
                      {recentPrompt}
                    </p>
                  </div>
                  {loading ? (
                    <>
                    <div className="flex mt-5 ">
                      <img
                          src={assets.gemini_sparkle}
                          alt="gemini-icon"
                          className=" size-8  mx-2 animate-pulse"
                        />
                      <div className="w-full mt-0">
                        <h1 className="w-full h-5 rounded-md mb-1 bg-gradient-to-r from-blue-200 to-blue-500 animate-pulse opacity-40"></h1>
                        <h1 className="w-5/6 h-5 rounded-md  mb-1  bg-gradient-to-r from-blue-300 to-violet-300 animate-pulse opacity-30"></h1>
                        <h1 className="w-3/5 h-5 rounded-md mb-1  bg-gradient-to-r from-blue-400 to-violet-400 animate-pulse opacity-20"></h1>
                      </div>
                    </div>
                    
                    </>
                  ) : (
                    <>
                      <div className="flex gap-2 items-start mt-5">
                        <img
                          src={assets.gemini_sparkle}
                          alt="gemini-icon"
                          className=" size-8  mx-2"
                        />

                        <p className="leading-loose text-zinc-200 text-normal font-Raleway"
                        dangerouslySetInnerHTML={{__html:resultData}}
                        ></p>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}
          <div className=" max-[950px]:w-full w-input-box-w">
            <div className="flex items-center justify-between relative bottom-3 bg-zinc-800 mt-12 rounded-full h-16 p-3 px-7 w-full">
              {/* {input box} */}
              <input
                type="text"
                placeholder="Enter a prompt here"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-10/12 bg-zinc-800 relative focus:outline-none text-zinc-100 text-lg placeholder:text-base placeholder:font-semibold placeholder:text-zinc-400"
              />
              <div className="flex gap-2">
                <RiImageAddLine
                  size={45}
                  className="cursor-pointer hover:bg-zinc-700 rounded-full p-3"
                />
                <RiMicLine
                  size={45}
                  className="cursor-pointer hover:bg-zinc-700 rounded-full p-3"
                />
                {input && (
                  <RiSendPlane2Line
                    size={45}
                    className="cursor-pointer hover:bg-zinc-700 rounded-full p-3"
                    onClick={() => onSent()}
                    
                  />
                )}
              </div>
            </div>
            <div className="text-center text-xs mt-1 text-zinc-400">
              <p>
                Gemini may display inaccurate info, including about people, so
                double-check its responses.
                <span 
                className="text-blue-200 cursor-pointer">
                   {" "}Your privacy and Gemini Apps
                </span>
              </p>
            </div>
          </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
