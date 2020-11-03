import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Subtitle = styled.p`
  font-size: 1.75rem;
`;

const StyledLabel = styled(Form.Label)`
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  padding: 0.5rem 2rem;
  background-color: #0a7b86;
  border: #0a7b86 solid 4px;
  border-radius: 4px;
  margin-bottom: 1rem;

  &:hover,
  &:focus {
    background-color: #086068;
    color: white;
    font-weight: normal;
    border: #086068 solid 4px;
    box-shadow: none;
  }

  &.active,
  &:active {
    background-color: #086068 !important;
    border: #086068 solid 4px !important;
    color: white !important;
    box-shadow: none !important;
  }
`;

function CtaForm({ id, title, subtitle, form }) {
  const [validated, setValidated] = useState(false);
  let isValid = true;
  const [success, setSuccess] = useState(false);

  const sendForm = (myForm) => {
    const inputs = myForm.elements;
    const formData = new FormData(myForm);

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < inputs.length - 1; index++) {
      const element = inputs[index];
      if (element.name !== 'bot-field' && element.name !== 'form-name') {
        if (element.validity.valid === false) {
          isValid = false;
        }
      }
    }

    if (isValid) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          setSuccess(true);
          myForm.reset();
          setValidated(false);
        })
        .catch((error) => alert(error));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.currentTarget;

    if (myForm.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    isValid = true;
    setSuccess(false);
    sendForm(myForm);
  };

  return (
    <Container id={`${id}`} as="section">
      <Row>
        <Col className="mx-auto" lg={8}>
          <h2 className="text-center">{title}</h2>
          {subtitle && <Subtitle className="text-center">{subtitle}</Subtitle>}
          <Form
            name={form.name}
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            id={form.name}
          >
            <p className="hidden" style={{ display: 'none' }}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>
                Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
              </label>
            </p>

            <input type="hidden" name="form-name" value={form.name} />
            {form.formFields.map((input) => {
              const { _type, inputType } = input;

              if (_type === 'input' && inputType === 'email') {
                const { _key, label, name, placeholder, required } = input;
                return (
                  <Form.Group controlId={name} key={_key}>
                    <StyledLabel>{label}</StyledLabel>
                    <Form.Control
                      type={inputType}
                      placeholder={placeholder}
                      required={required}
                      name={name}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      ref={React.createRef()}
                    />
                  </Form.Group>
                );
              }

              if (_type === 'input') {
                const { _key, label, name, placeholder, required } = input;
                return (
                  <Form.Group controlId={name} key={_key}>
                    <StyledLabel>{label}</StyledLabel>
                    <Form.Control
                      type={inputType}
                      placeholder={placeholder}
                      required={required}
                      name={name}
                      ref={React.createRef()}
                    />
                  </Form.Group>
                );
              }

              const { _key, label, name, placeholder, required, rows } = input;
              return (
                <Form.Group controlId={name} key={_key}>
                  <StyledLabel>{label}</StyledLabel>
                  <Form.Control
                    as="textarea"
                    rows={rows}
                    placeholder={placeholder}
                    required={required}
                    name={name}
                    ref={React.createRef()}
                  />
                </Form.Group>
              );
            })}
            {success && <p>Thank you! You will hear from us soon.</p>}
            <StyledButton type="submit">{form.submit}</StyledButton>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

CtaForm.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
};

CtaForm.defaultProps = {
  subtitle: null,
};

export default CtaForm;
