import { useState } from 'react'
import './App.css'


function MyComponent(props) {
  return (
    <div className="bg-neutral-800 flex flex-col items-stretch pb-12">
      <div className="justify-between bg-stone-950 flex w-full gap-5 px-20 py-7 items-start max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <div className="justify-center items-center flex gap-0.5 mt-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/40a100d4d0bcb34e9284e5d98bf3e1e792a6189c424be48b5a05382e372d72ce?"
            className="aspect-square object-contain object-center w-[18px] fill-sky-500 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="text-white text-xl font-semibold capitalize self-stretch grow whitespace-nowrap">
            CARD GAME
          </div>
        </div>
        <div className="items-stretch self-stretch flex justify-between gap-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/86b9a10021b4653c8349342f2130dc420a833e58a264fb8ac616767c83a70ec8?"
            className="aspect-square object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-white text-xl font-semibold capitalize grow whitespace-nowrap mt-1.5 self-start">
            Repository
          </div>
        </div>
      </div>
      <div className="self-center flex w-full max-w-[1030px] flex-col mt-20 mb-9 items-start max-md:max-w-full max-md:mt-10">
        <div className="items-stretch flex gap-3">
          <div className="text-white text-3xl font-semibold capitalize grow whitespace-nowrap">
            Points:{" "}
          </div>
          <div className="text-white text-3xl font-semibold capitalize whitespace-nowrap">
            0
          </div>
        </div>
        <div className="items-stretch flex justify-between gap-5">
          <div className="text-white text-3xl font-semibold capitalize">
            Time:{" "}
          </div>
          <div className="text-white text-3xl font-semibold capitalize">0</div>
        </div>
        <div className="w-[865px] max-w-full mt-14 self-end max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.71] object-contain object-center w-full overflow-hidden shrink-0 grow flex-1 max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.71] object-contain object-center w-full overflow-hidden shrink-0 grow flex-1 max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.71] object-contain object-center w-full overflow-hidden shrink-0 grow flex-1 max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.71] object-contain object-center w-full overflow-hidden shrink-0 grow flex-1 max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="w-[865px] max-w-full mt-10 self-end max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.71] object-contain object-center w-full overflow-hidden shrink-0 grow flex-1 max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.71] object-contain object-center w-full overflow-hidden shrink-0 grow flex-1 max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.71] object-contain object-center w-full overflow-hidden shrink-0 grow flex-1 max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.71] object-contain object-center w-full overflow-hidden shrink-0 grow flex-1 max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <MyComponent/>
    </>
  )
}

export default App
