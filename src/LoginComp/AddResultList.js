import { Button } from "@material-ui/core";
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Filter,
  ReferenceInput,
  SelectInput,
  TextInput,
  TopToolbar,
  CreateButton,
} from "react-admin";

////////////////////////////////////////
const ListActions = (props) => (
  <TopToolbar>
    <CreateButton basePath="/Результаты" />
    <Button
      onClick={async () =>
        fetch("http://84.38.181.52:5000/recount", {
          method: "GET",
        })
      }
    >
      Пересчёт баллов
    </Button>
  </TopToolbar>
);

////////////////////////////////////
const CutonAction = (props) => {
  return <TopToolbar {...props}></TopToolbar>;
};

const PostFilter = (props) => (
  <Filter {...props}>
     <TextInput label='Search' source='id' alwaysOn />
    <ReferenceInput label='User' source='name' reference='users' allowEmpty>
      <SelectInput optionText='name' />
    </ReferenceInput>
  </Filter>
);

const AddResultList = (props) => {
  return (
    <List
      filters={<PostFilter />}
      title="Список участников"
      bulkActionButtons={false}
      exporter={false}
      actions={<ListActions />}
      {...props}
    >
      <Datagrid>
        <TextField label="Номер" id="Uid" source="id" />
        <TextField label="Имя" source="name" />
        <TextField label="Класс" source="class" />
      </Datagrid>
    </List>
  );
};

export default AddResultList;
