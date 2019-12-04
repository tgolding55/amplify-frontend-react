import React, { useState } from "react";
import { Checkbox, Form, Button, Card, Dropdown } from "semantic-ui-react";

const PlaylistForm = ({
  newPlaylist,
  setCurrentPlaylist,
  playlists,
  setSongsToAdd,
  addToPlaylist
}) => {
  const [nameField, setNameField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");
  const [publicField, setPublicField] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    newPlaylist(nameField, descriptionField, publicField);
  };
  return (
    <>
      <div className="rightColumnCard">
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
                ></Checkbox>{" "}
                <Button type="submit">Create Playlist</Button>
              </Form.Field>
            </Form>
          </Card.Content>
        </Card>
      </div>

      <div className="rightColumnCard">
        <Card>
          <Card.Header>Selected Playlist</Card.Header>
          <Card.Content>
            <Dropdown
              fluid={true}
              placeholder="Select Playlist"
              selection
              options={playlists.map(playlist => {
                return {
                  key: "option" + playlist.name,
                  value: playlist.id,
                  text: playlist.name
                };
              })}
              onChange={(e, { value }) =>
                setCurrentPlaylist(
                  playlists.find(playlist => playlist.id === value)
                )
              }
            ></Dropdown>
            <br></br>
            <Button positive onClick={() => addToPlaylist()}>
              Save Songs
            </Button>

            <Button negative onClick={() => setSongsToAdd([])}>
              Clear Songs
            </Button>
            <br></br>
          </Card.Content>
        </Card>
      </div>
    </>
  );
};

export default PlaylistForm;
