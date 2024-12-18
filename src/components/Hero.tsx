import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <Container className="relative z-10 h-[90vh] flex items-center">
        <div className="w-full">
          <div className="text-white space-y-8 max-w-3xl mx-auto text-center gap-4">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light">
              Innovative digital marketing solutions that drive real business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center pt-4">
              <Button
                variant="contained"
                size="large"
                href="#booking"
                className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-3 text-lg rounded-full"
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#services"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg rounded-full"
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
} 