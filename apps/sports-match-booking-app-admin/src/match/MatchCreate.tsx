import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";

import { SportTitle } from "../sport/SportTitle";

export const MatchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="createdBy" source="createdBy" />
        <SelectInput
          source="genderRestriction"
          label="genderRestriction"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="isFilled" source="isFilled" />
        <TextInput label="matchLocation" source="matchLocation" />
        <DateTimeInput label="matchTime" source="matchTime" />
        <NumberInput
          step={1}
          label="numberOfParticipants"
          source="numberOfParticipants"
        />
        <ReferenceInput source="sport.id" reference="Sport" label="Sport">
          <SelectInput optionText={SportTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
