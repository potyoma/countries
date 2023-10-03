"use client";

import Input from "@/components/atoms/input";
import s from "./search-form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchForm({}) {
  const handleSubmit = e => e.preventDefault();

  return (
    <form onSubmit={handleSubmit}>
      <Input
        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        placeholder="Search for a country..."
      />
    </form>
  );
}
