"use client";
import { useEffect, useState } from "react";
import Button from "./Button";
import close from "@/public/assets/close.svg";
import copy from "@/public/assets/copy.svg";
import Image from "next/image";
import { useWeb5 } from "@/plugins/web5.client";
import Spinner from "./Spinner";
import Alert from "./Alert";

//The web5 sdk doesn't have a way to allow the user to input a DID and login like you would a username and password
//What it can do now is detect if there is a did related to the browser they are using and it will automatically use it
//If there is no did related, then it will create a new one at page load

const LogIn = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [copiedDID, setCopiedDID] = useState(false);

  const { myDID } = useWeb5();

  return (
    <>
      <div
        onClick={() => {
          setIsLoginOpen(true);
        }}
      >
        <Button
          type="button"
          title="My Credentials"
          icon="/assets/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {isLoginOpen && (
        <dialog
          open={isLoginOpen}
          className="fixed top-0 flex h-full w-full animate-fade-in items-center justify-center bg-slate-700 bg-opacity-60 backdrop-blur-sm"
        >
          <div
            className={`mx-10 flex w-full max-w-md flex-col rounded-md bg-gray-300`}
          >
            {copiedDID && <Alert severity="success" message="DID Copied" />}

            <div className="m-2 flex items-center justify-between">
              <article className="relative left-5 z-0 flex w-full items-center justify-center">
                <h2 className="text-lg font-bold">
                  <p>You are logged in as:</p>
                </h2>
              </article>

              <button
                className="z-10 rounded-md p-2 hover:scale-95 transition-transform"
                onClick={() => {
                  setCopiedDID(false);

                  setIsLoginOpen(false);
                }}
              >
                <Image src={close} alt="close" width={24} height={24} />
              </button>
            </div>

            {myDID ? (
              <div className="flex w-full flex-col gap-2 px-2 pb-2">
                <div className="overflow-hidden rounded-md">
                  <p className="max-h-[200px] overflow-scroll break-words bg-white px-2 py-3 text-slate-400">
                    {myDID}
                  </p>
                </div>

                <button
                  className="btn flex gap-1  rounded-md bg-black-100 hover:bg-green-50 px-2 transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText(myDID);
                    setCopiedDID(true);
                    setTimeout(() => {
                      setCopiedDID(false);
                    }, 2000);
                  }}
                >
                  <Image src={copy} alt="copy did" />
                  <span>Copy DID</span>
                </button>
              </div>
            ) : (
              <Spinner />
            )}
          </div>
        </dialog>
      )}
    </>
  );
};

export default LogIn;
