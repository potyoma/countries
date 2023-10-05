"use client";

import Input from "@/components/atoms/input";
import s from "./search-form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "@/components/atoms/dropdown";
import { useState } from "react";

export default function SearchForm({}) {
  const [filter, setFilter] = useState();

  const handleSubmit = e => e.preventDefault();

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <Input
        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        placeholder="Search for a country..."
      />
      <Dropdown
        options={[
          { name: "Africa", value: "africa" },
          { name: "America", value: "america" },
          { name: "Asia", value: "asia" },
          { name: "Oceania", value: "oceania" },
          { name: "Europe", value: "europe" },
        ]}
        label={"Filter by Region"}
        onSelect={setFilter}
        selected={filter}
      />
    </form>
  );
}
