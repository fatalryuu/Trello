import { style } from "@vanilla-extract/css";
import { vars } from "../../vars.css.ts";

export const wrapper = style({
    width: "88%",
    background: `linear-gradient(to bottom right, ${vars.colors.cardPrimary}, ${vars.colors.cardSecondary})`,
});