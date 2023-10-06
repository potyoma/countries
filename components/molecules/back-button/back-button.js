"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => router.back();

  return (
    <Button
      onClick={handleClick}
      icon={<FontAwesomeIcon icon={faArrowLeftLong} />}
    >
      Back
    </Button>
  );
}
