import { style } from "@vanilla-extract/css";

export const wrapper = style({
    border: "none",
    boxShadow: "0 1px 1px #afafaf",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
    padding: "10px 10px 5px 10px",
    cursor: "pointer",
});

export const top = style({
    display: "flex",
    justifyContent: "space-between",
    width: 250,
});

export const taskName = style({
    fontWeight: 600,

});

export const taskDescription = style({
    marginTop: 10,
    paddingBottom: 5,
    maxWidth: 250,
    height: "auto",
    overflowWrap: "break-word",
});

