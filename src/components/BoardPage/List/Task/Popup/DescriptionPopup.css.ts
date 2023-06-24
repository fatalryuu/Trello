import { style } from "@vanilla-extract/css";
import { vars } from "../../../../../vars.css.ts";

export const wrapper = style({
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: "100vw",
    height: "100vh",
});

export const form = style({
    position: "absolute",
    top: "30%",
    left: "35%",
    width: 500,
    height: 180,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
});

export const closeButton = style({
    border: "none",
    position: "absolute",
    right: 8,
    top: 8,
    background: "none",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
});

export const nameHeader = style({
    fontSize: "1.5rem",
});

export const listHeader = style({
    fontSize: "1.1rem",
    marginBottom: 20,
});

export const label = style({
    cursor: "text",
});

export const input = style({
    width: "90%",
    outline: "none",
    padding: "6px 10px",
    borderRadius: 3,
    marginBottom: 20,
    marginTop: 10,
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
    width: "30%",
    padding: "7px 0",
});
