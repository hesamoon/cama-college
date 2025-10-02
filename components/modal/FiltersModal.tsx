"use client";

import { Dispatch, SetStateAction, useState } from "react";

// components
import Modal from "./Modal";
import Button from "../Button";
import Selector from "../Selector";
import PriceRangeSlider from "../PriceRangeSlider";

type ProgramType = {
  id: number;
  fVal: string;
};

function FiltersModal({
  open,
  onClose,
  filters,
  setFilters,
}: {
  open: boolean;
  onClose: () => void;
  filters: {
    programTypes: string[];
    priceRange: { min: number; max: number };
  } | null;
  setFilters: Dispatch<
    SetStateAction<{
      programTypes: string[];
      priceRange: { min: number; max: number };
    } | null>
  >;
}) {
  const handleClose = () => {
    onClose();
  };

  const [programTypes, setProgramTypes] = useState<ProgramType[]>([]);
  const [priceRange, setPriceRange] = useState<{
    min: number;
    max: number;
  } | null>(null);
  const [resetKey, setResetKey] = useState(0);

  const filterClickHandler = () => {
    setFilters({
      programTypes: programTypes.map((pt) => pt.fVal),
      priceRange: priceRange ?? { min: 0, max: 0 },
    });
  };

  const resetClickHandler = () => {
    setFilters(null);
    setProgramTypes([]);
    setPriceRange(null);
    setResetKey((prev) => prev + 1);
  };

  console.log(filters);

  return (
    <Modal open={open} onClose={handleClose} padding="p-0 md:w-[541px]">
      <div className="divide-y divide-outline-level1">
        {/* header */}
        <header className="flex items-center justify-between py-2 px-4">
          <h3 className="mobile-title-medium md:title-medium text-on_surface-light">Filters</h3>

          {/* close button */}
          <Button
            props={{
              value: "",
              leftIcon: "close-circle",
              rightIcon: "",
              type: "text",
              disabled: false,
              width: 24,
              height: 24,
              size: "mobile-body-large md:body-large",
              clickHandler: handleClose,
            }}
          />
        </header>

        {/* body */}
        <div className="flex flex-col divide-y divide-outline-level1">
          {/* Program Type */}
          <div className="p-4 space-y-6">
            <h4 className="mobile-title-large md:title-large text-on_surface-light">Program Type</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                { id: 1, fVal: "Attendance Programs" },
                { id: 2, fVal: "Online Programs" },
                { id: 3, fVal: "Self-Study Programs" },
              ].map((item) => (
                <Selector
                  key={item.id}
                  props={{
                    value: item.fVal,
                    leftIcon: "",
                    disabled: false,
                    selected: !!programTypes.find((pt) => pt.id === item.id),
                    clickHandler: () => {
                      if (!!programTypes.find((pt) => pt.id === item.id)) {
                        setProgramTypes(
                          programTypes.filter((pt) => pt.id !== item.id)
                        );
                      } else setProgramTypes([...programTypes, item]);
                    },
                  }}
                />
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="p-4 space-y-6">
            <h4 className="title-large text-on_surface-light">Price Range</h4>

            <PriceRangeSlider
              key={resetKey}
              min={100}
              max={3000}
              initialMin={150}
              initialMax={950}
              gap={50}
              onChange={(min, max) => {
                setPriceRange({ min, max });
              }}
            />
          </div>
        </div>

        {/* footer */}
        <footer className="flex items-center justify-between py-2 px-4">
          <Button
            props={{
              value: "Clear All",
              leftIcon: "",
              rightIcon: "",
              type: "text",
              color: "red",
              disabled: false,
              size: "mobile-body-large md:body-medium w-full md:w-fit",
              padding: "py-2 px-6",
              clickHandler: resetClickHandler,
            }}
          />

          <Button
            props={{
              value: "Filters",
              leftIcon: "",
              rightIcon: "",
              type: "filled",
              color: "red",
              disabled: false,
              size: "mobile-body-large md:body-medium w-full md:w-fit",
              padding: "py-2 px-6",
              clickHandler: filterClickHandler,
            }}
          />
        </footer>
      </div>
    </Modal>
  );
}

export default FiltersModal;
