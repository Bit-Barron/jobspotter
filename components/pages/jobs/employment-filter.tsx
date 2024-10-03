import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "~/components/ui/dropdown-menu";
import { Check } from "lucide-react-native";
import { Button } from "~/components/ui/button";
import { FilterStore } from "~/store/dashboard/FilterStore";
import { Text } from "~/components/ui/text";
import { View } from "react-native";

const EmploymentTypeFilter = () => {
  const { selectedType, setSelectedType } = FilterStore();

  const employmentTypes = [
    { id: "fullTime", label: "Full Time" },
    { id: "partTime", label: "Part Time" },
    { id: "contractor", label: "Contractor" },
  ];

  const handleSelect = (type: string) => {
    setSelectedType(type);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-full">
        <Button variant="outline">
          <Text>
            Filter by:
            {selectedType
              ? employmentTypes.find((t) => t.id === selectedType)?.label
              : "Employment Type"}
          </Text>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[365px]">
        {employmentTypes.map((type) => (
          <DropdownMenuItem key={type.id} onPress={() => handleSelect(type.id)}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text>{type.label}</Text>
              {selectedType === type.id && <Check size={16} />}
            </View>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EmploymentTypeFilter;
