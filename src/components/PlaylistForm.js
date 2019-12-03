import React, { useState } from "react";
import { Checkbox, Form, Button, Card } from "semantic-ui-react";

const PlaylistForm = ({ newPlaylist }) => {
  const [nameField, setNameField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");
  const [publicField, setPublicField] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    newPlaylist(nameField, descriptionField, publicField);
  };

  return (
    <div className="card">
      <Card>
        <Card.Header>New Playlist Form</Card.Header>
        <Card.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>
                Playlist Name
                <input
                  type="text"
                  placeholder="Playlist Name"
                  value={nameField}
                  onChange={e => setNameField(e.target.value)}
                ></input>
              </label>
            </Form.Field>
            <Form.Field>
              <label>
                Playlist Description
                <input
                  type="text"
                  placeholder="Playlist Description"
                  value={descriptionField}
                  onChange={e => setDescriptionField(e.target.value)}
                ></input>
              </label>
            </Form.Field>
            <Form.Field>
              <Checkbox
                label={publicField ? "Public" : "Private"}
                toggle
                checked={publicField}
                onChange={() => setPublicField(!publicField)}
              ></Checkbox>
            </Form.Field>
            <Button type="submit">Create Playlist</Button>
          </Form>

          
        </Card.Content>
      </Card>
    </div>
  );
};

export default PlaylistForm;
