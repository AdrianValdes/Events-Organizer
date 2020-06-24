import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { Form, Label, Segment, List } from 'semantic-ui-react';
export const PlaceInput = ({
  input: { value, onChange, onBlur },
  width,
  options,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <PlacesAutocomplete
      value={value}
      onChange={onChange}
      searchOptions={options}
    >
      {({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
        <Form.Field error={touched && !!error}>
          <input
            placeholder={placeholder}
            {...getInputProps({ placeholder, onBlur })}
          />
          {touched && error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
          {suggestions.length > 0 && (
            <Segment
              style={{
                marginTop: 0,
                position: 'absolute',
                zIndex: 1000,
                width: '100%',
              }}
            >
              {loading && <div>Loading...</div>}
              <List selection>
                {suggestions.map((suggestions) => (
                  <List.Item {...getSuggestionItemProps(suggestions)}>
                    <List.Header>
                      {suggestions.formattedSuggestion.mainText}
                    </List.Header>
                    <List.Description>
                      {suggestions.formattedSuggestion.secondaryText}
                    </List.Description>
                  </List.Item>
                ))}
              </List>{' '}
            </Segment>
          )}
        </Form.Field>
      )}
    </PlacesAutocomplete>
  );
};
