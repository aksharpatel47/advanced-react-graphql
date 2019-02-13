import styled, { CreateStyled } from "@emotion/styled";

type Theme = {
  red: string;
  black: string;
  grey: string;
  lightgrey: string;
  offWhite: string;
  maxWidth: string;
  bs: string;
};

export default styled as CreateStyled<Theme>;
