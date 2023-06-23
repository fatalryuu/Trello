import { style } from "@vanilla-extract/css";

export const wrapper = style({
    display: "flex",
    justifyContent: "space-between",
    border: "none",
    boxShadow: "0 1px 1px #afafaf",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
    padding: 10,
    cursor: "pointer",
});
