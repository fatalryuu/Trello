import { style } from "@vanilla-extract/css";
import { vars } from "../../vars.css.ts";

export const wrapper = style({
    width: "20%",
    padding: 10,
    borderLeft: `1px solid ${vars.colors.borderColor}`,
    backgroundColor: "white",
});

export const menu__header = style({
    borderBottom: `1px solid ${vars.colors.borderColor}`,
    textAlign: "center",
    paddingBottom: 10,
    fontWeight: 400,
});

export const actions__header = style({
    display: "flex",
    alignItems: "center",
    fontSize: "1.1rem",
    fontWeight: 400,
    margin: "20px 0 0 10px",
});

export const text = style({
    marginLeft: 10,
});

