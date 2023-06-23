import { style } from "@vanilla-extract/css";
import { vars } from "../../vars.css.ts";

export const wrapper = style({
    display: "flex",
    width: "85vw",
    background: `linear-gradient(to bottom right, ${vars.colors.cardPrimary}, ${vars.colors.cardSecondary})`,
});

export const board = style({
    width: "80%",
});

export const nameHeader = style({
    width: "100%",
    color: "white",
    fontSize: "1.3rem",
    padding: "15px 0 20px 20px",
    backgroundColor: "#0070cc",
    marginBottom: 10,
});

export const listContainer = style({
    display: "flex",
    width: "64.9vw",
    height: "92.5vh",
    overflowX: "auto",
});