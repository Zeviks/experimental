"use client"; // this is a client component
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <ChakraProvider>
        <head />
        <body>{children}</body>
      </ChakraProvider>
    </html>
  );
}
