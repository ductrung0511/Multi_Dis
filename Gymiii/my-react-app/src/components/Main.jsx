import * as React from "react";

export default function Main() {
  
  return (
    <div className="flex flex-col pb-3.5 bg-white">
      <div className="flex gap-5 px-16 py-3 w-full bg-white border-b border-solid border-neutral-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto my-auto text-xl font-semibold tracking-normal leading-8 text-black">
          Gym up Stats - Adminstation
        </div>
        <div className="flex gap-5 justify-between">
          <div className="flex gap-3">
            <div className="flex justify-center items-center px-4 py-2 rounded-lg bg-zinc-100">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d63a5fc2c5586a61568dadfd60e7fcc434fcc26de3d8c0acfaf3a36beb5dbc5?"
                className="w-6 aspect-square"
              />
            </div>
            <div className="justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-nowrap bg-black rounded-lg">
              Share
            </div>
          </div>
          <div className="flex gap-2">
            <img
              loading="lazy"
              srcSet="..."
              className="shrink-0 w-10 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/245de0f0c45e9a16d332378bca3d5ff08d50f4cf294ae90ec616490145201c21?"
              className="shrink-0 my-auto w-6 aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-3 self-end px-3 py-2 mt-8 mr-20 text-base leading-6 whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-200 text-zinc-500 max-md:mr-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb24ed642213c596572a68bfb4b518ecbe321f5fb33b43e09fadd9662de7f9f0?"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="flex-1 text-ellipsis">Search...</div>
      </div>
      <div className="flex flex-col px-20 mt-8 w-full max-md:px-5 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow p-6 w-full text-base font-semibold leading-6 text-black bg-white rounded-lg border border-solid shadow-sm border-neutral-200 max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <div className="max-md:max-w-full">Users quantity</div>
                <div className="mt-4 text-4xl tracking-tighter leading-10 max-md:max-w-full">
                  2,405
                </div>
                <div className="mt-4 font-medium text-zinc-500 max-md:max-w-full">
                  +33% month over month
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-between p-6 w-full text-base font-semibold leading-6 text-black bg-white rounded-lg border border-solid shadow-sm border-neutral-200 max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <div className="max-md:max-w-full">Session created</div>
                <div className="mt-4 text-4xl tracking-tighter leading-10 max-md:max-w-full">
                  10,353
                </div>
                <div className="mt-4 font-medium text-zinc-500 max-md:max-w-full">
                  8% month over month
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f84efb03c07d367d65bb7c385823fc010c001b57b5782f18c21201330113a300?"
                className="grow w-full border border-solid shadow-sm aspect-[1.64] border-neutral-200 max-md:mt-8 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow p-6 w-full text-base leading-6 bg-white rounded-lg border border-solid shadow-sm border-neutral-200 max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <div className="font-semibold text-black max-md:max-w-full">
                  User
                </div>
                <div className="flex gap-4 py-3 mt-4 whitespace-nowrap rounded-lg max-md:flex-wrap">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="font-medium text-black">Helena</div>
                    <div className="text-ellipsis text-zinc-700">
                      email@figmasfakedomain.net
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 py-3 whitespace-nowrap rounded-lg max-md:flex-wrap">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="font-medium text-black">Oscar</div>
                    <div className="text-ellipsis text-zinc-700">
                      email@figmasfakedomain.net
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 py-3 whitespace-nowrap rounded-lg max-md:flex-wrap">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="font-medium text-black">Daniel</div>
                    <div className="text-ellipsis text-zinc-700">
                      email@figmasfakedomain.net
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 py-3 rounded-lg max-md:flex-wrap">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="font-medium text-black">
                      Daniel Jay Park
                    </div>
                    <div className="text-ellipsis text-zinc-700">
                      email@figmasfakedomain.net
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 py-3 rounded-lg max-md:flex-wrap">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 w-12 aspect-square"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="font-medium text-black">Mark Rojas</div>
                    <div className="text-ellipsis text-zinc-700">
                      email@figmasfakedomain.net
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 max-w-full w-[857px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start pt-2 pr-20 pb-4 pl-6 w-full text-base font-medium leading-6 bg-white rounded-lg border border-solid shadow-sm border-neutral-200 text-zinc-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-4 px-4 py-2 bg-white rounded-lg border border-solid border-neutral-200">
                  <div className="flex-1 text-ellipsis">Select user</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/245de0f0c45e9a16d332378bca3d5ff08d50f4cf294ae90ec616490145201c21?"
                    className="shrink-0 w-6 aspect-square"
                  />
                </div>
                <div className="mt-5 text-black max-md:ml-2">Username</div>
                <div className="justify-center px-4 py-1.5 mt-2 text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-200 text-ellipsis max-md:ml-2">
                  Placeholder
                </div>
                <div className="mt-3.5 text-black max-md:ml-2">Height</div>
                <div className="justify-center px-4 py-1.5 mt-2 text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-200 text-ellipsis max-md:ml-2">
                  Placeholder
                </div>
                <div className="mt-8 text-black max-md:ml-2">Weight</div>
                <div className="justify-center px-4 py-1.5 mt-2 text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-200 text-ellipsis max-md:ml-2">
                  Placeholder
                </div>
                <div className="mt-3.5 text-black max-md:ml-2">Email</div>
                <div className="justify-center px-4 py-1.5 mt-2 text-xl whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-200 text-ellipsis max-md:ml-2">
                  Placeholder
                </div>
                <div className="justify-center px-4 py-2 mt-8 text-black rounded-lg bg-zinc-100">
                  Edit User Info{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-96 text-base font-medium leading-6 max-md:mt-10">
                <div className="justify-center px-4 py-2 text-black rounded-lg bg-zinc-100">
                  Choose data to restore system
                </div>
                <div className="justify-center px-4 py-2 mt-4 text-white bg-black rounded-lg">
                  Backup data to your computer{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}