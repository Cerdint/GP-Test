"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function UsPage() {
  return (
    <section className="bg-black  relative ">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white">
                LLevamos el Marketing <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  a nuevos horizontes
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/linear.webp`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top mt-10"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}