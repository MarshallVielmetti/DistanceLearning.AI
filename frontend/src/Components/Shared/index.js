import styled from "styled-components";

const Spacer = styled.div`
  flex-grow: ${(props) => (props.num ? props.num : 1)};
`;

export { Spacer };
