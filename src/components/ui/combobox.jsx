import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useSelector, useDispatch } from 'react-redux';
import { setToken, setDisplayIds } from '@/state/slice';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import setDataAcCategory from "@/utils/set_data_ac_category";

export function Combobox({fm, selectedState}) {
  const memo = fm;
//   console.log(memo, selectedState);
  const dis = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const updateVal = async (val) => {
    console.log(selectedState);
    const data = await setDataAcCategory(selectedState, val);
    // console.log(data);
    dis(setDisplayIds(data));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[240px] justify-between"
        >
          {value
            ? memo.find((framework) => framework.value.toLowerCase() === value)?.label
            : "Select..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {memo.map((fmt) => (
              <CommandItem
                key={fmt.value}
                value={fmt.value}
                onSelect={(currentValue) =>  {
                  setValue(currentValue === value ? "" : currentValue);
                  updateVal(currentValue);
                  setOpen(false);
                }}
              >
                {fmt.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === fmt.value.toLowerCase() ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}