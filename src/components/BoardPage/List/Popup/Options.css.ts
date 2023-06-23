import { style } from "@vanilla-extract/css";

export const wrapper = style({
    display: "flex",
    justifyContent: "space-between",
});

export const button = style({
    outline: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    paddingRight: 10,
});

export const nameInput = style({
    border: "none",
    borderBottom: "1px solid black",
    outline: "none",
    width: "50%",
    marginLeft: 10,
    marginRight: 39,
});