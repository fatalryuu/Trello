import { style } from "@vanilla-extract/css";
import { vars } from "../../vars.css.ts";

export const wrapper = style({
    display: "flex",
    width: "100%",
    background: `linear-gradient(to bottom right, ${vars.colors.cardPrimary}, ${vars.colors.cardSecondary})`,
});

export const boardStyle = style({
    width: "80%",
})

export const list__container = style({
    display: "flex",
});