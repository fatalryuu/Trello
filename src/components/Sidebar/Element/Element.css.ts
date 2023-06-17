import { style } from "@vanilla-extract/css";
import { vars } from "../../../vars.css.ts";

export const element = style({
    display: "flex",
    cursor: "pointer",
    ":hover": {
        backgroundColor: "#e3e3e3",
    },
});

export const active = style({
    backgroundColor: "#ccc",
});

export const preview = style({
    display: "block",
    width: 25,
    height: 20,
    background: `linear-gradient(to bottom right, ${vars.colors.cardPrimary}, ${vars.colors.cardSecondary})`,
    borderRadius: 3,
});