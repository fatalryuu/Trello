import { style } from "@vanilla-extract/css";
import { vars } from "../../../vars.css.ts";

export const wrapper = style({
    position: "absolute",
    left: "23.7%",
    width: "20%",
    backgroundColor: "white",
    boxShadow: `0 0 10px ${vars.colors.borderColor}`,
    borderRadius: 3,
    padding: 10,
});

export const top = style({
    paddingBottom: 8,
    borderBottom: `1px solid ${vars.colors.borderColor}`,
});

export const close__button = style({
    position: "absolute",
    right: 8,
    border: "none",
    cursor: "pointer",
    background: "none",
    borderRadius: 3,
    paddingTop: 2,
    paddingRight: 5,
    fontWeight: 600,
    fontSize: "1rem",
});

export const header = style({
    fontSize: "1.1rem",
    fontWeight: 400,
    textAlign: "center",
});

export const form = style({
    marginTop: 10,
});

export const input = style({
    width: "70%",
    outline: "none",
    padding: "6px 10px",
    borderRadius: 3,
    marginTop: 2,
    marginBottom: 10,
    border: `2px solid ${vars.colors.cardPrimary}`,
    fontSize: "1rem",
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
    width: "100%",
    padding: "7px 0",
});