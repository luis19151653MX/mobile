import { FormControl, Select, VStack, WarningOutlineIcon, CheckIcon } from "native-base";
import React, { useState } from "react";


export default function SelectExample() {
  const [service, setService] = useState("");
  return (
    <VStack >
      <FormControl w="3/4" maxW="300" isRequired isInvalid={service===""}>
        <FormControl.Label _text={{ color: "warmGray.50", fontSize: "md" }}>Choose service</FormControl.Label>
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose One" placeholder="Choose Service" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size={5} />
        }} 
        size="xl" p={2} w="80%"
        _text={{ color: "warmGray.50", fontSize: "md" }}
        mt="1"
          onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
        {console.log(service)}
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
    </VStack>
  );
}