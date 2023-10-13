import { FooterSimple } from "@/component/FooterSimple";
import { HeroBullets } from "@/component/HeroBullets";
import { HeaderSimple } from "@/component/SimpleHeader";
import { SimpleGrid } from "@mantine/core";

export default function Home() {
  return(
    <>
     <HeaderSimple/>
    <HeroBullets/>
    <FooterSimple/>
    </>
  )
}