import { style } from "@vanilla-extract/css";
import { vars } from "../../vars.css.ts";

export const wrapper = style({
    width: "20%",
    padding: 20,
    borderLeft: `1px solid ${vars.colors.borderColor}`,
    backgroundColor: "white",
})