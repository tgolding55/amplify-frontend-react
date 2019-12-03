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
          placeholder="Playlist Name"
          value={nameField}
          onChange={e => setNameField(e.target.value)}
        ></input>
      </Form.Field>
      <Form.Field>
        <input
          type="text"
          placeholder="Playlist Description"
          value={descriptionField}
          onChange={e => setDescriptionField(e.target.value)}
        ></input>
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="Public"
          toggle
          checked={publicField}
          onChange={() => setPublicField(!publicField)}
        ></Checkbox>
      </Form.Field>
      <Button type="submit">Create Playlist</Button>
    </Form>
  );
};

export default PlaylistForm;
