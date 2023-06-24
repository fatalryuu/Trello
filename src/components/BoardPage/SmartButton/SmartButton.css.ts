import { style } from "@vanilla-extract/css";
import { vars } from "../../../vars.css.ts";

export const plus = style({
    fontSize: "1.5rem",
    marginLeft: 10,
});

export const add = style({
    display: "flex",
    alignItems: "center",
    color: "white",
    border: "none",
    borderRadius: 10,
    backgroundColor: "#5ab4ff",
    fontSize: "1rem",
    padding: "9px 10px",
    minWidth: 270,
    height: 27,
    cursor: "pointer",
    marginLeft: 5,
    marginRight: 15,
    transition: "0.1 ease",
    ":hover": {
        backgroundColor: "#419eff",
    },
    ":active": {
        backgroundColor: "#5faeff",
    },
});

export const form = style({
    alignSelf: "flex-start",
    color: "white",
    border: "none",
    borderRadius: 10,
    backgroundColor: "white",
    fontSize: "1rem",
    padding: 7,
    minWidth: 270,
    height: 73,
    marginLeft: 5,
    marginRight: 15,
});

export const input = style({
    width: "90%",
    outline: "none",
    padding: "6px 10px",
    borderRadius: 3,
    marginBottom: 10,
    border: `2px solid ${vars.colors.cardPrimary}`,
    fontSize: "1rem",
    "::placeholder": {
        fontSize: "0.9rem",
    },
});

export const submit = style({
    color: "white",
    outline: "none",
    border: "none",
    borderRadius: 3,
    backgroundColor: "#323eff",
    cursor: "pointer",
    transition: "0.1s ease",
    ":hover": {
        backgroundColor: "#000def",
    },
    ":active": {
        backgroundColor: "#000bbd",
    },
    width: "58%",
    padding: "7px 0",
});

export const closeButton = style({
    border: "none",
    cursor: "pointer",
    background: "none",
    fontWeight: 600,
    fontSize: "1.2rem",
    marginLeft: 12,
});

export const lower = style({
    display: "flex",
    justifyContent: "left",
});