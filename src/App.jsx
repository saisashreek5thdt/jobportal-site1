import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";

export default function App() {
  useEffect(() => {
    const scripts = [
      "js/jquery-3.7.1.min.js",
      "js/bootstrap.min.js",
      "js/validator.min.js",
      "js/jquery.slicknav.js",
      "js/swiper-bundle.min.js",
      "js/jquery.waypoints.min.js",
      "js/jquery.counterup.min.js",
      "js/jquery.magnific-popup.min.js",
      "js/SmoothScroll.js",
      "js/parallaxie.js",
      "js/gsap.min.js",
      "js/magiccursor.js",
      "js/SplitText.js",
      "js/ScrollTrigger.min.js",
      "js/jquery.mb.YTPlayer.min.js",
      "js/wow.min.js",
      "js/function.js",
    ];

    // Function to dynamically load a script
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load all scripts sequentially
    const loadScripts = async () => {
      try {
        for (const src of scripts) {
          await loadScript(src);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadScripts();

    // Cleanup function
    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <AboutUs />
    }
  ]);

  return (
    <>
      <RouterProvider
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
        router={router}
      />
    </>
  );
}
