import { style } from "@vanilla-extract/css";

export const wrapper = style({
    width: 250,
    margin: "20px 0 0 20px",
    backgroundColor: "white",
    padding: 10,
    border: "1px solid white",
    borderRadius: 10,
});

export const header = style({
    display: "flex",
    justifyContent: "space-between",
});
