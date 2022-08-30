import React from "react";
import styled from "styled-components";

const I = styled.input`
  border: solid 1px red;
`;

type Props = {
  name: string;
  value: string;
  onChange: (e: React.SyntheticEvent) => void;
};

export const Input = ({ value, name, onChange }: Props) => (
  <I type="text" name={name} value={value} onChange={onChange} />
);
