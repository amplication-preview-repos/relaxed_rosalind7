import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { SPORT_TITLE_FIELD } from "../sport/SportTitle";

export const MatchList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Matches"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
