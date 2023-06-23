import { style } from "@vanilla-extract/css";

export const wrapper = style({
    alignSelf: "flex-start",
    minWidth: 250,
    margin: "0 10px",
    backgroundColor: "white",
    padding: 10,
    border: "1px solid white",
    borderRadius: 10,
});

export const header = style({
    display: "flex",
    justifyContent: "space-between",
});

export const text = style({
    marginLeft: 10,
    fontWeight: 600,
});