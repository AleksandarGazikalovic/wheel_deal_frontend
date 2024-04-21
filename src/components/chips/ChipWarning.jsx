import React from "react";
import styled from "styled-components";
import Theme from "../../theme/Theme";

const ChipWarning = (props) => {
  return (
    <Theme dark={props.dark}>
      <Wrapper>{props.label}</Wrapper>
    </Theme>
  );
};

export default ChipWarning;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 0px ${(props) => props.theme.padding.sm};
  height: 2rem;
  background-color: ${(props) => props.theme.color.warning};
  border-radius: ${(props) => props.theme.border.radius.lg};
  border: 1px solid ${(props) => props.theme.border.color.warning};
  font-family: ${(props) => props.theme.font.warning};
  font-size: 14px;
  color: ${(props) => props.theme.text.warning};
  text-align: center;
  user-select: none;
`;