import { style } from "@vanilla-extract/css";

export const plus = style({
    fontSize: "1.5rem",
    marginLeft: 10,
});

export const add = style({
    display: "flex",
    alignItems: "center",
    color: "black",
    border: "none",
    borderRadius: 10,
    fontSize: "0.9rem",
    minWidth: 270,
    cursor: "pointer",
    transition: "0.1 ease",
    ":hover": {
        backgroundColor: "#d5d5d5",
    },
    ":active": {
        backgroundColor: "#afafaf",
    },
});

export const form = style({
    alignSelf: "flex-start",
    color: "white",
    border: "none",
    borderRadius: 10,
    fontSize: "1rem",
    minWidth: 270,
});

export const input = style({
    width: "91.5%",
    height: 25,
    outline: "none",
    padding: "6px 10px",
    borderRadius: 10,
    marginBottom: 10,
    border: "none",
    boxShadow: "0 1px 1px #afafaf",
    fontSize: "1rem",
    "::placeholder": {
        fontSize: "0.9rem",
    },
});