"use client";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import FadeInSlider from "../components/FadeInSlider";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center">
        <FadeInSlider/>
      </section>
    </div>
  );
}