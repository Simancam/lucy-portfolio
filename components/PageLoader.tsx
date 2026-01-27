"use client";

import { useEffect } from "react";
import { LoaderOne } from "./Loader";
import { useLoader } from "./LoaderContext";

export default function PageLoader() {
  const { loading, setLoading } = useLoader();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [setLoading]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black">
      <LoaderOne />
    </div>
  );
}
