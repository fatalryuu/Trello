import { style } from "@vanilla-extract/css";
import { vars } from "../../vars.css.ts";

export const wrapper = style({
    width: "12%",
    padding: 20,
    borderRight: `1px solid ${vars.colors.borderColor}`
});

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