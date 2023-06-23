import { style } from "@vanilla-extract/css";
import { vars } from "../../../vars.css.ts";

export const preview = style({
    display: "block",
    width: 25,
    height: 20,
    marginRight: 10,
    background: `linear-gradient(to bottom right, ${vars.colors.cardPrimary}, ${vars.colors.cardSecondary})`,
    borderRadius: 3,
});

export const name = style({
    fontWeight: 400,
    fontSize: "1rem",
});