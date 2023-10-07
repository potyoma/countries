"use client";

import Input from "@/components/atoms/input";
import s from "./search-form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "@/components/atoms/dropdown";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@/components/atoms/form";
import { Button } from "@/components/atoms/button";

export default function SearchForm({}) {
  const [filter, setFilter] = useState();
  const [searchQuery, setSearchQuery] = useState();

  const router = useRouter();

  const handleSubmit = () =>
    searchQuery && router.push(`?search=${searchQuery}`);

  useEffect(() => {
    if (filter) router.push(`?filter=${filter.value}`);
  }, [filter]);

  return (
    <Form onSubmit={handleSubmit} className={s.form}>
      <Input
        icon={
          <Button className={s.submitButton} transparent type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        }
        placeholder="Search for a country..."
        onChange={({ target: { value } }) => setSearchQuery(value)}
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
    </Form>
  );
}
