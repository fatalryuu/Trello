import { style } from "@vanilla-extract/css";
import { vars } from "../../../vars.css.ts";

export const wrapper = style({
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1rem",
    width: "23%",
    padding: "10px 0 60px 0",
    margin: "0 10px 10px 0",
    cursor: "pointer",
    border: "none",
    borderRadius: 3,
    background: `linear-gradient(to bottom right, ${vars.colors.cardPrimary}, ${vars.colors.cardSecondary})`,
    transition: "0.1s ease",
    ":hover": {
        background: "linear-gradient(to bottom right, #0075d7, #00bada)",
    }
});

export const name = style({
    padding: "0 10px",
    textDecoration: "none",
    fontWeight: 600,
    color: "white",
});

export const button = style({
    outline: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    paddingRight: 10,
});

export const name__input = style({
    border: "none",
    outline: "none",
    width: "50%",
    marginLeft: 10,
});