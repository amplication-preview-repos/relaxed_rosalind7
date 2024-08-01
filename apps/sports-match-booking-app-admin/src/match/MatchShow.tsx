import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { SPORT_TITLE_FIELD } from "../sport/SportTitle";

export const MatchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="genderRestriction" source="genderRestriction" />
        <TextField label="ID" source="id" />
        <BooleanField label="isFilled" source="isFilled" />
        <TextField label="matchLocation" source="matchLocation" />
        <TextField label="matchTime" source="matchTime" />
        <TextField label="numberOfParticipants" source="numberOfParticipants" />
        <ReferenceField label="Sport" source="sport.id" reference="Sport">
          <TextField source={SPORT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
