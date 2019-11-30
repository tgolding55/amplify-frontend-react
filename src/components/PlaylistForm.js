import React, { useState } from "react";
import { Checkbox, Form, Button } from "semantic-ui-react";

const PlaylistForm = ({ newPlaylist }) => {
  const [nameField, setNameField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");
  const [publicField, setPublicField] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    newPlaylist(nameField, descriptionField, publicField);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <input
          type="text"
          value={nameField}
          onChange={e => setNameField(e.target.value)}
        ></input>
      </Form.Field>
      <Form.Field>
        <input
          type="text"
          value={descriptionField}
          onChange={e => setDescriptionField(e.target.value)}
        ></input>
      </Form.Field>
      <Form.Field>
        <Checkbox
          toggle
          checked={publicField}
          onChange={() => setPublicField(!publicField)}
        ></Checkbox>
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default PlaylistForm;
